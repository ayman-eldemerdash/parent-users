import { Injectable } from '@angular/core';
import {Location} from '@angular/common';
import { CanActivate,  UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private location: Location
  ) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuth = !!this.authService.token;
    if (!isAuth) {
      return true;
    }
    return this.router.createUrlTree([this.location.back()]);
  }

}
