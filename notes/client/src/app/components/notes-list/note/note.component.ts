import { Component, Input, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Note } from 'src/app/note';
import { NotesService } from 'src/app/notes.service';



@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() selectedNote: Note = {id: 0, date: '', headline: 'add new note', text: ''}

  constructor(private notesService: NotesService) {}

  ngOnInit() {}


}
