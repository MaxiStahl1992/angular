import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() tag: string = '';
  @Input() description: string = '';
  @Input() acceptanceCriteria: string = '';
  @Input() id?: number;
  @Input() labels: string[]= [];
  @Input() type: string = '';
  @Input() assignees: string[] = [];

  constructor(private router: Router) {}

  openTicket() {
    this.router.navigate([`ticket/${this.id}`])
    console.log('clicked')
  }
}
