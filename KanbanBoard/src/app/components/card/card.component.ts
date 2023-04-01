import { Component } from '@angular/core';
import { TICKETS } from 'src/db-data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  tickets: any = TICKETS;
}
