import { Post } from './post.model';
import { Subscription } from 'rxjs/Rx';
import { PostsService } from './posts.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private userId: string;
  private userName: string;
  private posts: Observable<Post[]>;
  constructor(private postService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    // Stick with the observable params approach if there's even a chance that the router could re-use the component. 
    //this.route.snapshot.params['userId'];
    this.route.queryParams.subscribe((param: any) => {
      this.userName = param['userName'];
      console.log(this.userName);
    });
    this.subscription = this.route.params.subscribe((param: any) => {
      this.userId = param['userId'];
      if (this.userId) {
        this.posts = this.postService.getUserPosts(this.userId);
      } else {
        this.posts = this.postService.getAllPosts();
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
