import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from './user.service';
import {User} from './user';

@Component({
  selector: 'add-user',
  templateUrl: './addUser.component.html',
  styleUrls: ['./addUser.component.css']
})

export class addUserComponent implements OnInit{

  users: User[];
  user = new User();

  constructor(private _userService: UserService,
              private _router: Router){}

  ngOnInit(): void {
    this.getUsers();
  }

  addUser(): void{
    this._userService.addUser(this.user)
      .subscribe((response) => {
          console.log(response);
          this.reset();
          this.getUsers();
          this._userService.getMain();
        }, (error) =>{
          console.log(error);
        }
      );
  }

  getUsers(): void{
    this._userService.getAllUsers()
      .subscribe((userData) => {
        this.users = userData,
          console.log(userData);
      },(error) =>{
        console.log(error);
      });
  }

  private reset(){
    this.user.id = null;
    this.user.email = null;
    this.user.name = null;
  }
}
