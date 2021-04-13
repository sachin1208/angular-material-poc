import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { map } from 'rxjs/operators';
import { PeriodicElement } from './app-types';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private httpClient: HttpClient) { }

  fetchData():Observable<PeriodicElement[]>{
      return this.httpClient.get<PeriodicElement[]>('./assets/sample.json').pipe(
        catchError(this.handleError));
  
  }

  deleteElement(element:any):Observable<PeriodicElement[]>{
    return this.httpClient.post<PeriodicElement[]>('./assets/sample.json', element).pipe(
      catchError(this.handleError));

}

  // Error Handling code
  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return Observable.throw(err.error() || 'Server error');
}
}
