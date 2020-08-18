import {Component, OnInit, OnChanges} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from './user.service';
import {User} from './user';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges{

    users: User[];
    user = new User();

    constructor(private _userService: UserService,
                private _router: Router){}

    ngOnInit(): void {
        this.getUsers();
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

    addUser(): void{
        this._userService.addUser(this.user)
            .subscribe((response) => {
              console.log(response);
            this.reset();
            this.getUsers();
            }, (error) =>{
                console.log(error);
            }
        );
    }

  updateUser(): void{
    this._userService.updateUser(this.user)
      .subscribe((response) => {
          console.log(response);
          this.reset();
          this.getUsers();
        }, (error) =>{
          console.log(error);
        }
      );
  }

    private reset(){
        this.user.id = null;
        this.user.email = null;
        this.user.name = null;
    }

    ngOnChanges(changes:any) {}

    deleteUser(userId: string){
        this._userService.deleteUser(userId)
            .subscribe((response) => {console.log(response); this.getUsers();},
            (error) =>{
                console.log(error);
            });
            this.reset();
    }

  getUserById(userId: string){
        this._userService.getUserById(userId)
            .subscribe((userData) => {this.user = userData; this.getUsers(); }),
            (error) => {
                console.log(error);
            }
        this.reset();
    }
}
