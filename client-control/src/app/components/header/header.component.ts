import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isLogIn: boolean = false;
  logInUser: string | null = null

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginService.getAuthState().subscribe(user => {
      if (user) {
        this.isLogIn = true
        this.logInUser = user.email
      } else {
        this.isLogIn = false
      }
    })
  }

  logOut() {
    this.loginService.logOut()
    this.router.navigate(['/login'])
    this.isLogIn = false
    //this.logInUser = null
  }
}
