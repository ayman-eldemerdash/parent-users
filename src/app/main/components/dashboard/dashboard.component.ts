import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pageNumber = 1;
  totalPages: number;
  users: User[];
  loading: boolean;

  constructor(
    private userService: UserService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers(this.pageNumber).subscribe(
      (res: any) => {
        this.users = this.pageNumber === 1 ? res.data as User[] : [...this.users, ...res.data as User[]];
        this.totalPages = res.total_pages;
        this.loading = false;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        this.loading = false;
        this.toastrService.error('Something went wrong');
      }
    );
  }

  getMoreUsers(): void {
    if (this.pageNumber < this.totalPages) {
      this.loading = true;
      this.pageNumber++;
      setTimeout(() => {
        this.getUsers();
      }, 1000);
    }
  }

}
