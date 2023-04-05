import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Ticket } from './model/ticket';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const tickets = [
      {
        id: 1,
        title: "Create Kanban Board",
        tag: "Epic",
        type: "Experiment",
        assignee: ["Max", "Alina", "Carolin", "Kobe"],
        label: ['Dev', 'UX', 'PO', 'Dog'],
        status: 'backlog'

      },
      {
        id: 2,
        title: "Kanban Design",
        tag: "Task",
        type: "Design",
        assignee: ["Carolin"],
        label: ['UX'],
        status: 'backlog'
      },

      {
        id: 3,
        title: "Kanban Presentation",
        tag: "Task",
        type: "Task",
        assignee: ["Alina"],
        label: ['PO'],
        status: 'design'
      },
      {
        id: 4,
        title: "Happieness Management",
        tag: "Epic",
        type: "Experiment",
        assignee: ["Kobe"],
        label: ['Dog'],
        status: 'build'
      },
      {
        id: 5,
        title: "Kanban Setup Dev Environment",
        tag: "Task",
        type: "Task",
        assignee: ["Max"],
        label: ['Dev'],
        status: 'signOff'
      },
      {
        id: 6,
        title: "Kanban Development",
        tag: "Task",
        type: "Task",
        assignee: ["Max"],
        label: ['Dev'],
        status: 'build'
      },
      {
        id: 7,
        title: "Create Kanban Board Taks",
        tag: "Subtask",
        type: "Subtask",
        assignee: ["Alina"],
        label: ['PO'],
        status: 'done'
      },
      {
        id: 8,
        title: "Test Kanban",
        tag: "Test",
        type: "Task",
        assignee: ["Carolin"],
        label: ['UX'],
        status: 'done'
      },
      {
        id: 9,
        title: "Organize Party",
        tag: "Task",
        type: "Date",
        assignee: ["Kobe"],
        label: ['Dog'],
        status: 'signOff'
      },
      {
        id: 10,
        title: "Invite Guests to Party",
        tag: "Subtask",
        type: "Subtask",
        assignee: ["Alina"],
        label: ['PO'],
        status: 'design'
      }
    ];
    const members = [
      {
        id: 1,
        name: "Max",
      },
      {
        id: 2,
        name: "Alina",
      },
      {
        id: 3,
        name: "Carolin",
      },
      {
        id: 4,
        name: "Kobe",
      }
    ]
    return {tickets, members};
  }

  genId(tickets: Ticket[]): number {
    return tickets.length > 0 ? Math.max(...tickets.map(ticket => ticket.id)) + 1 : 1;
  }
}
