import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { Router } from '@angular/router';


@Component({
    selector: 'user-list',
    templateUrl: './userList.component.html',
    styleUrls: ['./userList.component.css']
})
export class UserListComponent implements OnInit{
  user = new User();
  statusMessage: string;
  users: User[];
  constructor(private _userService: UserService,
                private _router: Router){}

    ngOnInit(): void {
        this.getUsers();
    }

  getUsers(): void{
        this._userService.getAllUsers()
            .subscribe((userData) => this.users = userData,
            (error) =>{
                console.log(error);
            }
        );
    }
}
