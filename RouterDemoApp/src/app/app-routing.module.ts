import { PhotosComponent } from './photos/photos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    }
    //,
    // {
    //     path: '**',
    //     component: PagenotfoundComponent
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    providers: [],
    // By re-exporting the RouterModule, our feature module will be provided with the Router Directives when using our Routing Module.
    exports: [RouterModule]
})
export class AppRoutingModule { }