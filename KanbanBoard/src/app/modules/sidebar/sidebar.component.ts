import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  desktop = 'desktop';
  mobile = 'mobile';
  tablet = 'tablet';
  link = 'http://www.google.com'
}
