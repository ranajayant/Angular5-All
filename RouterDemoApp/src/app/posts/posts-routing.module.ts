import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './../posts/posts.component';

const POST_ROUTES: Routes = [
    { path: 'posts', component: PostsComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(POST_ROUTES),
    ],
    exports: [RouterModule]
})

export class PostRoutingModule { }

export const PostRoutingComponents = [PostsComponent];
