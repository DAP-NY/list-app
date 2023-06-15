import { Component, OnInit } from '@angular/core';
import { lists } from '../constants';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  public listsArray: any[];
  public myListService: ListService;

  constructor(myListService: ListService) {
    Object.assign(this, { myListService });
   }

  ngOnInit(): void {
    this.myListService.getService({table: 'lists'}).subscribe(data => {
      this.listsArray = data;
    });
  }
}
