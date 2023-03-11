import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor(private notesService: NotesService) {}

  ngOnInit() {

  }
}
