import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ExternalLinkComponent } from './components/external-link/external-link.component';
import { LabelComponent } from './components/label/label.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { TagComponent } from './components/tag/tag.component';
import { SidebarComponent } from './views/sidebar/sidebar.component';
import { KanbanBoardComponent } from './views/kanban-board/kanban-board.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { TeamMemberComponent } from './components/team-member/team-member.component';
import { TicketComponent } from './views/ticket/ticket.component';

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
    TeamMemberComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
