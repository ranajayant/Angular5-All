import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {

  }

  onPhotoNavLinkClick() {
    // this is relative
    // this.router.navigate(['home/photos', { id: dummyid, foo: 'foo' }]);
    // The id value appears in the URL as (;id=dummyid;foo=foo), not in the URL path
    // Set our navigation extras object
    // that passes on our global query params and fragment
    // let navigationExtras: NavigationExtras = {
    //   preserveQueryParams: true,
    //   preserveFragment: true
    // };

    // // Redirect the user
    // this.router.navigate([redirect], navigationExtras);
    this.router.navigate(['home/photos']);
  }
}
