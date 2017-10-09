import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class PostService {

  constructor(private http: Http) { }

  getPostList(): Observable<any[]> {
    return this.http
               .get('https://jsonplaceholder.typicode.com/posts')
               .map(response => response.json() as any[]);
  }
}
