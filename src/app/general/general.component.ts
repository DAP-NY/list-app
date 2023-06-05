import { Component, OnInit } from '@angular/core';
import { items } from '../constants';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  public items: string[] = items;

  constructor() { }

  ngOnInit(): void {
  }

}
