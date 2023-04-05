import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgDragDropModule } from 'ng-drag-drop';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ExternalLinkComponent } from './components/external-link/external-link.component';
import { LabelComponent } from './components/label/label.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { TagComponent } from './components/tag/tag.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { KanbanBoardComponent } from './modules/kanban-board/kanban-board.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { TeamMemberComponent } from './components/team-member/team-member.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ExternalLinkComponent,
    LabelComponent,
    AvatarComponent,
    TagComponent,
    SidebarComponent,
    KanbanBoardComponent,
    TeamMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgDragDropModule.forRoot(),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
