import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() tag: string = '';
  @Input() id?: number;
  @Input() labels: string[]= [];
  @Input() type: string = '';
  @Input() assignees: string[] = [];
}
