import { Component } from '@angular/core';
import { NotesService } from 'src/app/notes.service';
import { Note } from 'src/app/note';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent {
  notes: Note[] = [];

  constructor(private notesService: NotesService) {};

  ngOnInit() {
    this.getNotes();
  }

  getNotes(): void {
    this.notesService.getNotes()
      .subscribe(notes => this.notes = notes);
  }
}
