import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';

import { Post } from './post.model';

@Injectable()
export class PostsService {
    userPostsUrl: string = 'https://jsonplaceholder.typicode.com/posts?userId=';
    allPostsUrl: string = 'https://jsonplaceholder.typicode.com/posts';
    constructor(private http: Http
    ) { }

    getUserPosts(userId: string): Observable<Post[]> {
        return this.http.get(this.userPostsUrl + userId)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json());
    }

    getAllPosts(): Observable<Post[]> {
        return this.http.get(this.allPostsUrl)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json());
    }

}
