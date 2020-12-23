import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  navigate(): void {
    this.authService.token ? this.router.navigate(['/home', 'dashboard']) : this.router.navigate(['/login']);
  }

}
