import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string | null = null
  password: string | null = null
  message: string | null = null

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.getAuthState().subscribe(user => {
      if (user) {
        this.router.navigate(['/'])
      } else {
        this.message = null
      }
    })
  }

  login() {
    if (this.email && this.password) {
      this.loginService.login(this.email, this.password)
        .then(() => this.router.navigate(['/']))
        .catch(err => this.message = err)
    } else {
      this.message = 'Please fill out all fields!'
    }
  }
}
