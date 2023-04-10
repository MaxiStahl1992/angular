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
        description: "...",
        acceptanceCriteria: "...",
        tag: "Epic",
        type: "experiment",
        assignee: ["Max", "Alina", "Carolin", "Kobe"],
        label: ['Dev', 'UX', 'PO', 'Dog'],
        status: 'backlog'

      },
      {
        id: 2,
        title: "Kanban Design",
        description: "...",
        acceptanceCriteria: "...",
        tag: "Task",
        type: "design",
        assignee: ["Carolin"],
        label: ['UX'],
        status: 'backlog'
      },

      {
        id: 3,
        title: "Kanban Presentation",
        description: "...",
        acceptanceCriteria: "...",
        tag: "Task",
        type: "task",
        assignee: ["Alina"],
        label: ['PO'],
        status: 'ready'
      },
      {
        id: 4,
        title: "Happieness Management",
        description: "...",
        acceptanceCriteria: "...",
        tag: "Epic",
        type: "experiment",
        assignee: ["Kobe"],
        label: ['Dog'],
        status: 'test'
      },
      {
        id: 5,
        title: "Kanban Setup Dev Environment",
        description: "...",
        acceptanceCriteria: "...",
        tag: "Task",
        type: "task",
        assignee: ["Max"],
        label: ['Dev'],
        status: 'progress'
      },
      {
        id: 6,
        title: "Kanban Development",
        description: "...",
        acceptanceCriteria: "...",
        tag: "Task",
        type: "task",
        assignee: ["Max"],
        label: ['Dev'],
        status: 'done'
      },
      {
        id: 7,
        title: "Create Kanban Board Taks",
        description: "...",
        acceptanceCriteria: "...",
        tag: "Subtask",
        type: "subtask",
        assignee: ["Alina"],
        label: ['PO'],
        status: 'test'
      },
      {
        id: 8,
        title: "Test Kanban",
        description: "...",
        acceptanceCriteria: "...",
        tag: "Test",
        type: "task",
        assignee: ["Carolin"],
        label: ['UX'],
        status: 'done'
      },
      {
        id: 9,
        title: "Organize Party",
        description: "...",
        acceptanceCriteria: "...",
        tag: "Task",
        type: "dates",
        assignee: ["Kobe"],
        label: ['Dog'],
        status: 'progress'
      },
      {
        id: 10,
        title: "Invite Guests to Party",
        description: "hallo",
        acceptanceCriteria: "...",
        tag: "Subtask",
        type: "subtask",
        assignee: ["Alina"],
        label: ['PO'],
        status: 'ready'
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
