import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ToastrModule } from 'ngx-toastr';
import { LoadingComponent } from './components/loading/loading.component';
import { UserModalComponent } from './components/user-modal/user-modal.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { BtnLoadingComponent } from './components/btn-loading/btn-loading.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';

@NgModule({
  declarations: [
    LoadingComponent,
    UserModalComponent,
    DeleteModalComponent,
    BtnLoadingComponent,
    TitleBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule,
    ToastrModule.forRoot()
  ],
  exports: [
    CommonModule,
    RouterModule,
    ToastrModule,
    InfiniteScrollModule,
    LoadingComponent,
    UserModalComponent,
    BtnLoadingComponent,
    DeleteModalComponent,
  ]
})
export class SharedModule { }
