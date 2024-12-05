import { Injectable } from '@angular/core';
import { Auth, authState, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private AuthService: Auth) { }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(this.AuthService, email, password)
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }

  getAuthState(): Observable<any> {
    return authState(this.AuthService)
  }

  logOut() {
    this.AuthService.signOut()
  }
}
