import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
    providedIn: 'root'
}
)
export class ListService {
  constructor(private http: HttpClient) {
    Object.assign(this,{http});
   }

   public getService() {
    console.log('getting');
    return this.http.get<any>('http://localhost:8080/gameData');
}
}