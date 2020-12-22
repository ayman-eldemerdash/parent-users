import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ToastrModule } from 'ngx-toastr';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule,
    ToastrModule.forRoot()
  ],
  exports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule,
    ToastrModule,
    LoadingComponent
  ]
})
export class SharedModule { }
