import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersListComponent } from './components/dashboard/users-list/users-list.component';
import { UserItemComponent } from './components/dashboard/users-list/user-item/user-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    UsersListComponent,
    UserItemComponent
  ],
  imports: [
    SharedModule
  ]
})
export class MainModule { }
