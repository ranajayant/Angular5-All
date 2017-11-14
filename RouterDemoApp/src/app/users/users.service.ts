import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { User } from './user.model';

@Injectable()
export class UserService {
    usersUrl: string = 'https://jsonplaceholder.typicode.com/users';
    constructor(private http: Http
    ) { }

    getAllUsers(): Observable<User[]> {
        return this.http.get(this.usersUrl)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json());
    }

}
