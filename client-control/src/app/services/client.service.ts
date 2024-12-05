import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client.model';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, orderBy, query, updateDoc } from '@angular/fire/firestore';

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

  getClient(id: string): Observable<Client | null> {
    const clientDoc = doc(this.firestore, `clients/${id}`)
    return docData(clientDoc, { idField: 'id' }) as Observable<Client>
  }

  updateClient(client: Client) {
    const clientDoc = doc(this.firestore, `clients/${client.id}`)
    return updateDoc(clientDoc, { ...client })
  }

  deleteClient(client: Client) {
    const clientDoc = doc(this.firestore, `clients/${client.id}`)
    return deleteDoc(clientDoc)
  }
}
