import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { games, statusTypes } from '../constants';
import { ListService } from '../services/list.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
    })
export class ListsContentComponent implements OnInit {
    public games: any[];
    public myListService: ListService;
    public showInputs: boolean = false;
    public gameNameFormControl: FormControl;
    public rankFormControl: FormControl;
    public gameStatusFormControl: FormControl;
    public statusTypes: SelectItem[] = statusTypes;
    public activatedRoute: ActivatedRoute;
    public tableToLoad: string | undefined;
    public listName: string;

    constructor( activatedRoute: ActivatedRoute, private router: Router, myListService: ListService) {
    Object.assign(this, { activatedRoute, myListService });
    }

    ngOnInit(): void {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      console.log(this.activatedRoute);
      const RouteParams = this.activatedRoute.snapshot.params
      this.listName = RouteParams['listName'] as string;
      this.tableToLoad = RouteParams['listName'] as string;
      this.myListService.getService({table: this.tableToLoad.toLowerCase()}).subscribe(data => {
        this.games = data;
    });
        this.gameNameFormControl = new FormControl({ value: '', disabled: false }, Validators.required);
        this.rankFormControl = new FormControl({ value: '', disabled: false }, Validators.required);
        this.gameStatusFormControl = new FormControl({ value: '', disabled: false }, Validators.required);
    }

    /* Decide which color to show entry as depending on status */
    public processColor(gameStatus: string): string {
    switch(gameStatus) {
        case 'COMPLETED':
        return 'green';
        case 'STARTED':
        return 'orange';
        case 'NOTSTARTED':
        return 'red';
        default:
        return ''
    }
    }

  public refreshData(): void {
    this.myListService.getService({table:'games'}).subscribe(data => {
      this.games = data;
  });
  }

  public toggleInputs(): void {
    this.showInputs = true;
  }

  /* Takes value from input formControls and stores it as object, sends object via POST call*/
  public addToList(): void {
    const requestData = {
      name: this.gameNameFormControl.value,
      rank: parseInt(this.rankFormControl.value),
      status: this.gameStatusFormControl.value
    };
    this.myListService.postData(requestData).subscribe(res => {
      if(res.message.includes('successfully')) {
        this.refreshData();
      }
    });
  }

}
