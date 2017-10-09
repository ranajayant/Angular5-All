import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {
  posts: any;
  constructor(private postSvc: PostService) { }

  ngOnInit() {

    this.postSvc.getPostList().subscribe(data => {
      // Read the result field from the JSON response.
      this.posts = data;
    });
  }
}
