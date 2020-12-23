import { Router, NavigationEnd } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  url: string;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }

  showElement(element: string): boolean {
    let isShown = false;
    if (
      (element === 'navbar' && this.url !== '/login') ||
      (element === 'title-bar' && this.url !== '/login' && this.url !== '/home' && this.url !== '/' && this.authService.token)
    ) {
      isShown = true;
    }
    return isShown;
  }

}
