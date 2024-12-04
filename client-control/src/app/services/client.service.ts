import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client.model';
import { collection, collectionData, Firestore, orderBy, query } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clients: Observable<Client[]>

  constructor(private firestore: Firestore) {
    const clientRef = collection(this.firestore, 'clients')
    const cons = query(clientRef, orderBy('name', 'asc'))
    this.clients = collectionData(cons, { idField: 'id' }) as Observable<Client[]>
  }

  getClients(): Observable<Client[]> {
    return this.clients
  }
}
