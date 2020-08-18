import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from './user';

@Injectable()
export class UserService{

    constructor(private _httpService: Http){}

    getMain(){
      return this._httpService.get("http://localhost:4200/main");
    }

    getAllUsers(): Observable<User[]>{
        return this._httpService.get("http://localhost:8080/TestServer_war/api/user")
                .map((response: Response) => response.json())
                .catch(this.handleError);
    }

    getUserById(userId: string): Observable<User>{
        return this._httpService.get("http://localhost:8080/TestServer_war/api/user/"+userId)
                .map((response: Response) => response.json())
                .catch(this.handleError);
    }

    addUser(user: User){
        let body = JSON.parse(JSON.stringify(user));
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._httpService.post("http://localhost:8080/TestServer_war/api/user", body, options);

    }

    updateUser(user: User) {
      let body = JSON.parse(JSON.stringify(user));
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this._httpService.put("http://localhost:8080/TestServer_war/api/user/"+user.id, body, options);
    }

    deleteUser(userId: string){
        return this._httpService.delete("http://localhost:8080/TestServer_war/api/user/"+userId);
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error);
    }
}
