import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from './firebase.service';
import { signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: string | null = null

  constructor(
    private router: Router,
    private firebaseService: FirebaseService
  ) { }

  login(email: string, password: string) {
    const auth = this.firebaseService.auth
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        auth.currentUser?.getIdToken().then(token => {
          this.token = token
          this.router.navigate(['/'])
        })
      })
      .catch(err => {
        console.error('Error Login ', err)
      })
  }

  getIdToken() {
    return this.token
  }

  isAuthenticated() {
    return this.token != null
  }

  logout() {
    const auth = this.firebaseService.auth
    auth.signOut()
      .then(() => {
        this.token = null
        this.router.navigate(['login'])
      })
      .catch(err =>
        console.error('Error Logout ', err))
  }
}
