import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import HttpClientModule from @angular/common/http

import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
    // Include it under 'imports' in your application module
    // after BrowserModule.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
