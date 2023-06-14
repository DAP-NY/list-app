import { Component, OnInit } from '@angular/core';
import { games, statusTypes } from '../constants';
import { ListService } from '../services/list.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss']
    })
export class GamesComponent implements OnInit {
    public games: any[] = games;
    public myListService: ListService;
    public showInputs: boolean = false;
    public gameNameFormControl: FormControl;
    public rankFormControl: FormControl;
    public gameStatusFormControl: FormControl;
    public statusTypes: SelectItem[] = statusTypes;

    constructor( myListService: ListService) {
    Object.assign(this, { myListService });
    }

    ngOnInit(): void {
    //   this.myListService.getService().subscribe(data => {
    //     this.games = data;
    // });
        this.gameNameFormControl = new FormControl({ value: '', disabled: false }, Validators.required);
        this.rankFormControl = new FormControl({ value: '', disabled: false }, Validators.required);
        this.gameStatusFormControl = new FormControl({ value: '', disabled: false }, Validators.required);
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
    console.log(this.gameNameFormControl.value);
    console.log(this.rankFormControl.value);
    console.log(this.gameStatusFormControl.value);
  }

}
