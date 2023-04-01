import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgDragDropModule } from 'ng-drag-drop';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { StakeholderComponent } from './components/stakeholder/stakeholder.component';
import { ExternalLinkComponent } from './components/external-link/external-link.component';
import { LabelComponent } from './components/label/label.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { TagComponent } from './components/tag/tag.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { KanbanBoardComponent } from './modules/kanban-board/kanban-board.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    StakeholderComponent,
    ExternalLinkComponent,
    LabelComponent,
    AvatarComponent,
    TagComponent,
    SidebarComponent,
    KanbanBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgDragDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
