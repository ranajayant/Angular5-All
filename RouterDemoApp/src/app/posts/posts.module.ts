
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './posts-routing.module';
import { PostsService } from './posts.service';


@NgModule({
  imports: [CommonModule, PostRoutingModule],
  declarations: [],
  providers: [PostsService]
})
export class PostModule { }
