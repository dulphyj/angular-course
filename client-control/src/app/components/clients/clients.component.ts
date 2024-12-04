import { Component, ElementRef, ViewChild } from '@angular/core';
import { Client } from '../../model/client.model';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-clients',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

  clients: Client[] | null = null
  client: Client = {
    name: '',
    lastname: '',
    email: '',
    balance: undefined
  }

  @ViewChild('closeButton') closeButton!: ElementRef

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients
    })
  }

  getTotalBalance(): number {
    return this.clients?.reduce((total, client) => total + (client.balance ?? 0), 0) ?? 0
  }

  addClient(clientForm: NgForm) {
    const { value, valid } = clientForm
    if (valid) {
      this.clientService.addClient(value)
      clientForm.resetForm()
      this.closeModal()
    }
  }

  closeModal() {
    this.closeButton.nativeElement.click()
  }

}
