import { Component, Input, OnInit } from '@angular/core';
import { DialogCardComponent } from '../dialog-card/dialog-card.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


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

  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(DialogCardComponent, dialogConfig);
  }
}
