import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { UserService } from 'src/app/user.service';
import { User } from 'src/app/user.model';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.userService.getAll().pipe(first()).subscribe(users => { 
            this.users = users; 
        });
    }
}