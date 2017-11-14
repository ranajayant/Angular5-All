import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { PostsComponent } from '../posts/posts.component';
const USER_ROUTES: Routes = [
    {
        path: 'users',
        component: UsersComponent,
        children: [
            {
                path: '',
                component: PostsComponent,
            },
            {
                path: ':userId/posts',
                component: PostsComponent,
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(USER_ROUTES)
    ],
    exports: [RouterModule]
})

export class UsersRoutingModule { }

export const UsersRoutingComponents = [UsersComponent, PostsComponent];
