import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanBoardComponent } from './views/kanban-board/kanban-board.component';
import { TicketComponent } from './views/ticket/ticket.component'

const routes: Routes = [
  { path: '', redirectTo: '/kanbanBoard', pathMatch: 'full' },
  { path: 'kanbanBoard', component: KanbanBoardComponent },
  { path: 'ticket/:id', component: TicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
