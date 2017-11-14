import { PhotosComponent } from './../photos/photos.component';
import { CommentsComponent } from './../comments/comments.component';
import { PostsComponent } from './../posts/posts.component';
import { UsersComponent } from './../users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';



const HOME_ROUTES: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: UsersComponent,
                children: [
                    {
                        path: '',
                        component: PostsComponent,
                        children: [
                            {
                                path: '',
                                component: CommentsComponent
                            },
                            {
                                path: ':postId/comments',
                                component: CommentsComponent
                            }
                        ]
                    },
                    {
                        path: ':userId/posts',
                        component: PostsComponent,
                        children: [
                            {
                                path: '',
                                component: CommentsComponent
                            },
                            {
                                path: ':postId/comments',
                                component: CommentsComponent
                            }
                        ]
                    }
                ]
            },
            {
                path: 'photos',
                component: PhotosComponent
            }
            // {
            //     path: 'grid',
            //     component: AgGridDemoComponent
            // }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(HOME_ROUTES),
    ],
    exports: [RouterModule]
})

export class HomeRoutingModule { }

export const HomeRoutingComponents = [HomeComponent, PostsComponent, CommentsComponent, PhotosComponent];
