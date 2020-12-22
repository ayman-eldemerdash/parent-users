import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersListComponent } from './components/dashboard/users-list/users-list.component';
import { UserItemComponent } from './components/dashboard/users-list/user-item/user-item.component';
import { UserDetailsComponent } from './components/dashboard/user-details/user-details.component';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    UsersListComponent,
    UserItemComponent,
    UserDetailsComponent
  ],
  imports: [
    SharedModule
  ]
})
export class MainModule { }
