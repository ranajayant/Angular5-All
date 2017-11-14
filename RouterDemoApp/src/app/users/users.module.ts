import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UserService } from './users.service';


@NgModule({
  imports: [CommonModule, UsersRoutingModule],
  declarations: [],
  providers: [UserService]
})
export class UsersModule { }
