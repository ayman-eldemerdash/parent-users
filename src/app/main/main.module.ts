import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    SharedModule
  ]
})
export class MainModule { }
