export const TICKETS: any = {
    0: {
        id: 0,
        title: "Create Kanban Board",
        tag: "Epic",
        type: "Experiment",
        assignee: ["Max", "Alina", "Carolin", "Kobe"],
        label: ['Dev', 'UX', 'PO', 'Dog'],
        status: 'backlog'
    },
    1: {
        id: 1,
        title: "Kanban Design",
        tag: "Task",
        type: "Design",
        assignee: ["Carolin"],
        label: ['UX'],
        status: 'backlog'
    },
    2: {
        id: 2,
        title: "Kanban Presentation",
        tag: "Task",
        type: "Task",
        assignee: ["Alina"],
        label: ['PO'],
        status: 'design'
    },
    3: {
        id: 3,
        title: "Happieness Management",
        tag: "Epic",
        type: "Experiment",
        assignee: ["Kobe"],
        label: ['Dog'],
        status: 'build'
    },
    4: {
        id: 4,
        title: "Kanban Setup Dev Environment",
        tag: "Task",
        type: "Task",
        assignee: ["Max"],
        label: ['Dev'],
        status: 'signOff'
    },
    5: {
        id: 5,
        title: "Kanban Development",
        tag: "Task",
        type: "Task",
        assignee: ["Max"],
        label: ['Dev'],
        status: 'build'
    },
    6: {
        id: 6,
        title: "Create Kanban Board Taks",
        tag: "Subtask",
        type: "Subtask",
        assignee: ["Alina"],
        label: ['PO'],
        status: 'done'
    },
    7: {
        id: 7,
        title: "Test Kanban",
        tag: "Test",
        type: "Task",
        assignee: ["Carolin"],
        label: ['UX'],
        status: 'done'
    },
    8: {
        id: 8,
        title: "Organize Party",
        tag: "Task",
        type: "Date",
        assignee: ["Kobe"],
        label: ['Dog'],
        status: 'signOff'
    },
    9: {
        id: 9,
        title: "Invite Guests to Party",
        tag: "Subtask",
        type: "Subtask",
        assignee: ["Alina"],
        label: ['PO'],
        status: 'design'
    },
};

export const TEAMMEMBERS: any = {
    0: {
        id: 0,
        name: "Max",
    },
    1: {
        id: 1,
        name: "Alina",
    },
    2: {
        id: 2,
        name: "Carolin",
    },
    3: {
        id: 3,
        name: "Kobe",
    },
}