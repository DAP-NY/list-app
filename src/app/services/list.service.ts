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

   public getService(table: any) {
    console.log('getting');
    return this.http.post<any>('http://localhost:8080/retrieveData', table);
  }

  public postData(requestData: any) {
    console.log('posting');
    return this.http.post<any>('http://localhost:8080/insertData', requestData);
  }
}