
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments.component';

const COMMENT_ROUTES: Routes = [
    { path: 'comments', component: CommentsComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(COMMENT_ROUTES),
    ],
    exports: [RouterModule]
})

export class CommentsRoutingModule { }

export const CommentRoutingComponents = [CommentsComponent];
