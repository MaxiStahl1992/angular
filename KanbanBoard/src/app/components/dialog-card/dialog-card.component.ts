import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ticket } from 'src/app/model/ticket';

@Component({
  selector: 'app-dialog-card',
  templateUrl: './dialog-card.component.html',
  styleUrls: ['./dialog-card.component.scss']
})
export class DialogCardComponent {

  constructor( public dialogRef: MatDialogRef<DialogCardComponent>, @Inject (MAT_DIALOG_DATA) public data: Ticket) {}

  closeDialog() {
    this.dialogRef.close()
  }
}
