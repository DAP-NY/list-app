import { Component, OnInit } from '@angular/core';
import { games } from '../constants';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  public games: any[];
  public myListService: ListService;
  public showInputs: boolean = false;

  constructor( myListService: ListService) {
    Object.assign(this, { myListService });
   }

  ngOnInit(): void {
    this.myListService.getService().subscribe(data => {
      this.games = data;
  });
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

  public serviceCall(): any {
    this.myListService.getService().subscribe(data => {
      console.log(data);
  });
    //console.log(this.myListService.getService());
  }

  public toggleInputs(): void {
    this.showInputs = true;
  }

  public addToList(): void {
    console.log('added');
  }

}
