import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { UserService } from './user/user.service';
import { UserComponent } from './user/user.component';
import {UserListComponent} from './user/userList.component';
import {addUserComponent} from './user/addUser.component';
import { PageNotFoundComponent } from './others/pageNotFound.component';


const appRoutes: Routes = [
  {path: 'addUser', component: addUserComponent},
  {path: 'users', component: UserListComponent},
  { path: 'changeUsers', component: UserComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  declarations: [
    AppComponent, UserComponent, UserListComponent, PageNotFoundComponent, addUserComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,  RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
