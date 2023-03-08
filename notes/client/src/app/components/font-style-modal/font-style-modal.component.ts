import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { faB, faI, faUnderline, faStrikethrough } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-font-style-modal',
  templateUrl: './font-style-modal.component.html',
  styleUrls: ['./font-style-modal.component.scss']
})
export class FontStyleModalComponent {
  //fontawesome Icons
  faB = faB;
  faI = faI;
  faUnderline = faUnderline;
  faStrikethrough = faStrikethrough;
}
