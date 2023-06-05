import { Component, OnInit } from '@angular/core';
import { shows } from '../constants';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
  public shows: string[] = shows;

  constructor() { }

  ngOnInit(): void {
  }

}
