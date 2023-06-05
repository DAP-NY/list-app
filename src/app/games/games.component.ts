import { Component, OnInit } from '@angular/core';
import { games } from '../constants';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  public games: any[] = games;

  constructor() { }

  ngOnInit(): void {
  }

  public processColor(gameStatus: string): string {
    switch(gameStatus) {
      case 'Completed':
        return 'green';
      case 'Started':
        return 'orange';
      case 'Not Started':
        return 'red';
      default:
        return ''
    }
  }

}
