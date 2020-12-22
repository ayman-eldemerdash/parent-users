import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {

  @Input() user: User;
  @Input() selectedUser: User;
  @Output() editEmitter = new EventEmitter();
  @Output() deleteEmitter = new EventEmitter();

  emitUserEdit(e: Event): void {
    e.stopPropagation();
    this.editEmitter.emit(this.user);
  }

  emitUserDelete(e: Event): void {
    e.stopPropagation();
    this.deleteEmitter.emit(this.user);
  }

}
