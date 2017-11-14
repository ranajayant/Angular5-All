
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsService } from './comments.service';


@NgModule({
  imports: [CommonModule, CommentsRoutingModule],
  declarations: [],
  providers: [CommentsService]
})
export class CommentsModule { }
