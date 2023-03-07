import { Component } from '@angular/core';
import { faList, faTrashCan, faFolder, faPenToSquare, faFont, faListCheck, faTable, faImages, faArrowUpFromBracket, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  //Fontaweome icons
  faList = faList;
  faTrashCan = faTrashCan;
  faFolder = faFolder;
  faPenToSquare = faPenToSquare
  faFont = faFont;
  faListCheck = faListCheck;
  faTable = faTable;
  faImages = faImages;
  faArrowUpFromBracket = faArrowUpFromBracket;
  faMagnifyingGlass = faMagnifyingGlass;


}
