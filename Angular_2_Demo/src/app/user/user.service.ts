import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UserEntity } from './user.model';


@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUserList(): Observable<UserEntity[]> {
   
    return this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .map(response => response.json() as UserEntity[]);
  }
}
