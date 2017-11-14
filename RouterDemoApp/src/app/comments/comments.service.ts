import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';

import { Comment } from './comments.model';

@Injectable()
export class CommentsService {
    postsCommentsUrl: string = 'https://jsonplaceholder.typicode.com/comments?postId=';
    allCommentsUrl: string = 'https://jsonplaceholder.typicode.com/comments';
    constructor(private http: Http
    ) { }

    getPostComments(postId: string): Observable<Comment[]> {
        return this.http.get(this.postsCommentsUrl + postId)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json());
    }

    getAllComments(): Observable<Comment[]> {
        return this.http.get(this.allCommentsUrl)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json());
    }

}
