import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public auth: Auth
  public firestore: Firestore

  constructor() {
    const app = initializeApp(environment.firebase)
    this.auth = getAuth(app)
    this.firestore = getFirestore(app)
  }
}
