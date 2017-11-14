import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response,  } from '@angular/http';

@Injectable()
export class PhotoService {
    photosUrl: string = 'https://jsonplaceholder.typicode.com/photos';
    constructor(private http: Http
    ) { }

    getAllPhotos(): Observable<any[]> {
        return this.http.get(this.photosUrl)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json());
    }

}
