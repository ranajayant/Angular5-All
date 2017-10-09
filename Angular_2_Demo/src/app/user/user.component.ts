import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { UserEntity } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  users: UserEntity[];
  constructor(private userSvc: UserService) { }

  ngOnInit() {

    this.userSvc.getUserList().subscribe(data => {
      // Read the result field from the JSON response.
      this.users = data as UserEntity[];
    });
  }

}
