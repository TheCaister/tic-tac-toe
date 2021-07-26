import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  // Squares representing the board
  squares: any[];
  // Determine who is the next player
  xIsNext: boolean;
  // The winner will either be X or O
  winner: string;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  // Creating a new game by generating an empty array
  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = "";
    this.xIsNext = true;
  }

  // Returns the current player
  get player(){
    return this.xIsNext ? 'X': 'O';
  }

  makeMove(idx: number){
    // If the square hasn't been used already, replace it with either 'X' or 'O' and toggle the next player
    if(!this.squares[idx]){
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    // Then, calculate if there is a winner
    this.winner = this.calculateWinner();
  }

  // Function for calculating the winner
  calculateWinner() {
    // List of possible winning lines
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      // Getting 3 points of a line
      const [a, b, c] = lines[i];
      // If there is a value in squares[a] and it's equal to squares[b] and squares[c], return squares[a], which is the winner
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
