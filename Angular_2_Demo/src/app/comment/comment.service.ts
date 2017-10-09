import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class CommentService {

  constructor(private http: Http) { }

  getCommentList(): Observable<any[]> {
    return this.http
               .get('https://jsonplaceholder.typicode.com/comments')
               .map(response => response.json() as any[]);
  }
}
