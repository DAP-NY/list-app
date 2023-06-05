import { Component, OnInit } from '@angular/core';
import { movies } from '../constants';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public movies: string[] = movies;

  constructor() { }

  ngOnInit(): void {
  }

}
