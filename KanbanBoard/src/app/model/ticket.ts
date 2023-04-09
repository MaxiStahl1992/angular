export interface Ticket {
    id: number;
    title: string;
    description: string;
    acceptanceCriteria: string;
    tag: string;
    type: string;
    assignee: [];
    label: [];
    status: string;
}