import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {

  user: User;
  userOnFly: User;
  loading: boolean;
  addEmitter = new EventEmitter();
  editEmitter = new EventEmitter();

  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
    this.userOnFly = {
      name: this.user ? this.user.name : null,
      job: null
    };
  }

}
