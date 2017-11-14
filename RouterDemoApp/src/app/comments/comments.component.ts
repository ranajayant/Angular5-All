import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { Comment } from './comments.model';
import { CommentsService } from './comments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private postId: string;
  private comments: Observable<Comment[]>;
  constructor(private commentService: CommentsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((param: any) => {
      this.postId = param['postId'];
      if (this.postId) {
        this.comments = this.commentService.getPostComments(this.postId);
      } else {
        this.comments = this.commentService.getAllComments();
      }
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
