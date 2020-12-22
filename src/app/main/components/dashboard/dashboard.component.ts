import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';
import { UserModalComponent } from 'src/app/shared/components/user-modal/user-modal.component';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  users: User[];
  loading: boolean;
  selectedUser: User;
  showDetailsPanel: boolean;
  subscriptions = new Subscription();

  constructor(
    private modalService: NgbModal,
    private userService: UserService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getUsers();
  }

  getUsers(): void {
    if (this.userService.users) {
      this.users = this.userService.users;
    } else {
      this.userService.storeUsers();
      this.userService.users$.subscribe({
        next: () => {
          this.users = this.userService.users;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          this.toastrService.error('Something went wrong');
        }
      });
    }
  }

  getMoreUsers(): void {
    if (this.userService.pageNumber < this.userService.totalPages) {
      this.loading = true;
      this.userService.pageNumber++;
      this.userService.storeUsers();
    }
  }

  onGetUserDetails(user: User): void {
    this.showDetailsPanel = true;
    this.selectedUser = null;
    this.userService.getUserDetails(user.id).subscribe(
      (res: User) => this.selectedUser = res,
      (err: HttpErrorResponse) => this.toastrService.error('Something went wrong')
    );
  }

  onEditUser(originalUser: User): void {
    const USER_MODAL = this.modalService.open(UserModalComponent, { centered: true });
    USER_MODAL.componentInstance.user = originalUser;
    this.subscriptions.add(
      USER_MODAL.componentInstance.editEmitter.subscribe(
        (res: User) => this.editUser(originalUser, res, USER_MODAL)
      )
    );
  }

  editUser(originalUser: User, newUser: User, modal: NgbModalRef): void {
    this.subscriptions.add(
      this.userService.editUser(newUser).subscribe(
        (res) => {
          const INDEX = this.users.findIndex((user) => user.id === originalUser.id);
          this.users[INDEX].name = res.name;
          this.users[INDEX].job = res.job;
          this.selectedUser = null;
          this.showDetailsPanel = false;
          this.toastrService.success(`${res.name} updated successfully`);
          modal.close();
        },
        (err) => {
          this.toastrService.error('Something went wrong, please try again!');
          modal.componentInstance.loading = false;
        }
      )
    );
  }

  onDeleteUser(user: User): void {
    const DELETE_MODAL = this.modalService.open(DeleteModalComponent, { centered: true });
    DELETE_MODAL.componentInstance.user = user;
    this.subscriptions.add(
      DELETE_MODAL.componentInstance.deleteEmitter.subscribe(
        () => this.deleteUser(user, DELETE_MODAL)
      )
    );
  }

  deleteUser(originalUser: User, modal: NgbModalRef): void {
    this.subscriptions.add(
      this.userService.deleteUser(originalUser.id).subscribe(
        (res) => {
          const INDEX = this.users.findIndex((user) => user.id === originalUser.id);
          this.users.splice(INDEX, 1);
          this.selectedUser = null;
          this.showDetailsPanel = false;
          this.toastrService.success(`${originalUser.name} deleted successfully`);
          modal.close();
        },
        (err) => {
          this.toastrService.error('Something went wrong, please try again!');
          modal.componentInstance.loading = false;
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
