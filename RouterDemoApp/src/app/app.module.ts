import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Core Module */
import { CoreModule } from './core/core.module';


/* App Routing Module */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HomeModule,
    UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
