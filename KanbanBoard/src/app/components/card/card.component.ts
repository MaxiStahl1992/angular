import { Component, Input, OnInit } from '@angular/core';
import { TICKETS } from 'src/db-data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  @Input() title: string = '';
  @Input() tag: string = '';
  @Input() id?: number;
  @Input() labels: string[]= [];

  ngOnInit(): void {
    console.log(this.labels)
  }
}
