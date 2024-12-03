import { Component } from '@angular/core';
import { ProductListingComponent } from "./product-listing/product-listing.component";
import { RouterModule } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Online Store';

  constructor(private loginService: LoginService) { }

  isAuthenticated() {
    return this.loginService.isAuthenticated()
  }

  logout() {
    this.loginService.logout()
  }
}
