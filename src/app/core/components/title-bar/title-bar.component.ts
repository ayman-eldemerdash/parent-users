import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import { UserModalComponent } from 'src/app/shared/components/user-modal/user-modal.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent {

  subscriptions = new Subscription();

  constructor(
    private modalService: NgbModal,
    private userService: UserService,
    private toastrService: ToastrService,
  ) { }

  onAddUser(): void {
    const USER_MODAL = this.modalService.open(UserModalComponent, { centered: true });
    this.subscriptions.add(
      USER_MODAL.componentInstance.addEmitter.subscribe(
        (res: User) => this.addUser(res, USER_MODAL)
      )
    );
  }

  addUser(newUser: User, modal: NgbModalRef): void {
    this.subscriptions.add(
      this.userService.createUser(newUser).subscribe(
        (res) => {
          this.userService.users.unshift(newUser);
          this.toastrService.success(`${res.name} addedd successfully`);
          modal.close();
        },
        (err) => {
          this.toastrService.error('Something went wrong, please try again!');
          modal.componentInstance.loading = false;
        }
      )
    );
  }

}
