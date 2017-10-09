import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  providers: [CommentService]
})
export class CommentComponent implements OnInit {
  comments: any;
  constructor(private commentSvc: CommentService) { }

  ngOnInit() {

    this.commentSvc.getCommentList().subscribe(data => {
      // Read the result field from the JSON response.
      this.comments = data;
    });
  }
}
