import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private _Http:HttpClient) { }
  getData(){
    return this._Http.get("https://jsonplaceholder.typicode.com/posts");
  }
  private handleError(error:HttpErrorResponse){
    if (error.status === 0) {
      console.error("An error occurred" + error.error)
    }else{
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error
      )
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getConfig(){
    return this.getData().pipe(
      catchError(this.handleError)
    )
  }
}
