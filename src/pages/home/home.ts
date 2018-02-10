import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public btShuffleDisabled: boolean = false;
  public board: number[][] = [[1,2,3,4,5],
                              [6,7,8,9,10],
                              [11,12,13,14,15],
                              [16,17,18,19,20],
                               [21,22,23,24,25]];
  public array: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];


  constructor(public navCtrl: NavController) {

  }

  shuffle() {
    var currentIndex = this.array.length, temporaryValue, randomIndex;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = this.array[currentIndex];
        this.array[currentIndex] = this.array[randomIndex];
        this.array[randomIndex] = temporaryValue;
      }
      this.assignToBoard()
      alert(this.board)
  }

  assignToBoard() {
    var k = 0
    for(var i=0;i < this.board.length; i++) {
      for(var j=0; j< this.board[0].length; j++) {
        this.board[i][j] = this.array[k++]
      }
    }
  }

  tapButton(e, j) {
    alert('You clicked - ' + j + ' ! ')
  }
  getArray() {
    return this.array
  }

  startGame(event) {
    console.log(event)
    this.btShuffleDisabled = true
    // connect via grpc and send the board data to the server
  }
}
