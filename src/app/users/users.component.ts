import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users:User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(
      value => this.users = value );
  }

}
