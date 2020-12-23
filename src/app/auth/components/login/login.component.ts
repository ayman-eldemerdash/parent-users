import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private toastrService: ToastrService,
    private authService: AuthService,
  ) { }

  onLogin(form: NgForm): void {
    this.authService.login(form.value).subscribe(
      (res: string) => {
        this.authService.token = res;
        this.router.navigate(['/home', 'dashboard']);
        form.reset();
      },
      (err: HttpErrorResponse ) => {
        this.toastrService.error(err.error.error);
      }
    );
  }

}
