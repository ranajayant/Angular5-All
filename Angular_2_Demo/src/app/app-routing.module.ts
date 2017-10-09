import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';




const routes: Routes = [
    { path: '', component: UserComponent },
    { path: 'posts', component: PostComponent },
    { path: 'comments', component: CommentComponent },
    {
        path: 'users',
        component: UserComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
