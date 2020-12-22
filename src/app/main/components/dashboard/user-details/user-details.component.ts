import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  @Input() user: User;
  @Output() closeEmitter = new EventEmitter();
  @Output() editEmitter = new EventEmitter();
  @Output() deleteEmitter = new EventEmitter();

}
