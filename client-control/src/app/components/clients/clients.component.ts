import { Component } from '@angular/core';
import { Client } from '../../model/client.model';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-clients',
  imports: [CommonModule, RouterModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

  clients: Client[] | null = null

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients
    })
  }

  getTotalBalance(): number {
    return this.clients?.reduce((total, client) => total + (client.balance ?? 0), 0) ?? 0
  }

}
