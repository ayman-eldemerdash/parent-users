import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import {BreadcrumbModule} from 'angular-crumbs';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { TitleBarComponent } from './core/components/title-bar/title-bar.component';
import { BreadcrumbComponent } from './core/components/title-bar/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleBarComponent,
    BreadcrumbComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    AuthModule,
    MainModule,
    AppRoutingModule,
    BreadcrumbModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
