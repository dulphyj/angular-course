import { Component } from '@angular/core';
import { Client } from '../../model/client.model';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-edit-clients',
  imports: [FormsModule, RouterModule],
  templateUrl: './edit-clients.component.html',
  styleUrl: './edit-clients.component.css'
})
export class EditClientsComponent {

  client: Client = {
    name: '',
    lastname: '',
    email: '',
    balance: undefined
  }

  id: string | null = null

  constructor(
    private clientService: ClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    if (this.id) {
      this.clientService.getClient(this.id).subscribe((client: Client | null) => {
        if (client) {
          this.client = client
        } else {
          alert('Client not found')
          this.router.navigate(['/'])
        }
      })
    } else {
      alert('Invalid client id')
      this.router.navigate(['/'])
    }
  }

  saveClient(clientForm: NgForm) {
    const { value, valid } = clientForm
    if (valid) {
      value.id = this.id
      this.clientService.updateClient(value)
      this.router.navigate(['/'])
      alert('Client updated successfully')
    }
  }

  delete() {
    if (confirm('Are you sure you want to delete this client?')) {
      this.clientService.deleteClient(this.client)
      this.router.navigate(['/'])
      alert('Client deleted successfully')
    }
  }

}
