import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/model/member';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  desktop = 'desktop';
  mobile = 'mobile';
  tablet = 'tablet';
  link = 'http://www.google.com'

  members: Member[] = [];

  constructor(private memberService: MemberService) {}

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    this.memberService.getMembers().subscribe(members => this.members = members)
  }
}
