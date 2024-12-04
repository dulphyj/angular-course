import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client.model';
import { addDoc, collection, collectionData, Firestore, orderBy, query } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clients: Observable<Client[]>
  clientsRef: any;

  constructor(private firestore: Firestore) {
    this.clientsRef = collection(this.firestore, 'clients')
    const cons = query(this.clientsRef, orderBy('name', 'asc'))
    this.clients = collectionData(cons, { idField: 'id' }) as Observable<Client[]>
  }

  getClients(): Observable<Client[]> {
    return this.clients
  }

  addClient(client: Client) {
    return addDoc(this.clientsRef, client)
  }
}
