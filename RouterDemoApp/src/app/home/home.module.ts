import { UsersModule } from '../users/users.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule, HomeRoutingComponents } from './home-routing.module';
import { UsersRoutingComponents } from '../users/users-routing.module';
import { PostRoutingComponents } from '../posts/posts-routing.module';
import { PostModule } from '../posts/posts.module';
import { CommentRoutingComponents } from '../comments/comments-routing.module';
import { CommentsModule } from '../comments/comments.module';
import { PhotosModule } from '../photos/photos.module';


@NgModule({
    imports: [CommonModule, HomeRoutingModule],
    declarations: [HomeRoutingComponents, UsersRoutingComponents, PostRoutingComponents, CommentRoutingComponents],
    providers: [],
    exports: [UsersModule, PostModule, CommentsModule, PhotosModule]
})
export class HomeModule { }
