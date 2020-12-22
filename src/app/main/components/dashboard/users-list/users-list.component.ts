import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  @Input() users: User[];
  @Input() selectedUser: User;
  @Output() userEmitter = new EventEmitter();
  @Output() editEmitter = new EventEmitter();
  @Output() deleteEmitter = new EventEmitter();

  emitSelectedUser(user: User): void {
    if (user?.id !== this.selectedUser?.id) {
      this.userEmitter.emit(user);
      this.selectedUser = user;
    }
  }

}
