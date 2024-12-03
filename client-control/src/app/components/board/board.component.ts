import { Component } from '@angular/core';
import { ClientsComponent } from "../clients/clients.component";

@Component({
  selector: 'app-board',
  imports: [ClientsComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

}
