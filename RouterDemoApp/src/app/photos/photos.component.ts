import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  private photos: Observable<any[]>;
  constructor(private photoService: PhotoService

  ) { }

  ngOnInit() {
    this.photos = this.photoService.getAllPhotos();
  }

}
