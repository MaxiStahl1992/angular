import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TicTacToe';

  cells=['', '', '', '', '', '', '', '', '']
  whosTurn = 'x';
  winnerFound = false;
  gameEnded = false;
  roundCounter = 0;


  playTurn(index: number) {
    //check if cell includes a value 
    if(this.cells[index] === 'x' || this.cells[index] === 'o'){
      alert("You can't play this field!")
    } else {
      //add playerItem to field
      if(this.whosTurn === 'x') {
        this.cells[index] = 'x';
      } else {
        this.cells[index] = 'o';
      }
      //check if win condition is met
      if(this.winConditionMet()) {
        this.gameEnded = true;
        this.winnerFound = true;
      } else {
        //switch turn
        this.whosTurn === 'x' ? this.whosTurn = 'o' : this.whosTurn = 'x';  
      }
      
      this.roundCounter++
      //checkforDraw
      if(this.roundCounter === 9 && this.winnerFound === false) {
        this.gameEnded = true;
      }
    }
  }

  winConditionMet(): boolean {
    //row
    if(
      this.cells[0] === this.whosTurn && this.cells[1] === this.whosTurn && this.cells[2] === this.whosTurn ||
      this.cells[3] === this.whosTurn && this.cells[4] === this.whosTurn && this.cells[5] === this.whosTurn ||
      this.cells[6] === this.whosTurn && this.cells[7] === this.whosTurn && this.cells[8] === this.whosTurn
      ) {
        return true;
    }
    //column
    else if (
      this.cells[0] === this.whosTurn && this.cells[3] === this.whosTurn && this.cells[6] === this.whosTurn ||
      this.cells[1] === this.whosTurn && this.cells[4] === this.whosTurn && this.cells[7] === this.whosTurn ||
      this.cells[2] === this.whosTurn && this.cells[5] === this.whosTurn && this.cells[8] === this.whosTurn
    ) {
      return true;
    }
    //diagonal
    else if (
      this.cells[0] === this.whosTurn && this.cells[4] === this.whosTurn && this.cells[8] === this.whosTurn ||
      this.cells[2] === this.whosTurn && this.cells[4] === this.whosTurn && this.cells[6] === this.whosTurn
    ) {
      return true
    }

    return false;
  }

  restart() {
    this.cells=['', '', '', '', '', '', '', '', '']
    this.whosTurn = 'x';
    this.winnerFound = false;
    this.gameEnded = false;
    this.roundCounter = 0;
  }

}
