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
  @Input() description: string = '';
  @Input() acceptanceCriteria: string = '';
  @Input() id?: number;
  @Input() labels: string[]= [];
  @Input() type: string = '';
  @Input() assignees: string[] = [];

  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogCardComponent, {
      data: {
        title: this.title, 
        acceptanceCriteria: this.acceptanceCriteria,
        description: this.description,
        tag: this.tag, 
        id: this.id, 
        label: this.labels, 
        type: this.type, 
        assignee: this.assignees
      }
    })

    dialogRef.afterClosed().subscribe( result => {
      console.log('dialog closed');
      console.log(result.data);
    })
  }
}
