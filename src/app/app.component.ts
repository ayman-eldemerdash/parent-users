import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  url: string;

  constructor(private router: Router) {
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
      (element === 'title-bar' && this.url !== '/login' && this.url !== '/home' && this.url !== '/')
    ) {
      isShown = true;
    }
    return isShown;
  }

}
