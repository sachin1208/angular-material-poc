import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'
import { map } from 'rxjs/operators';
import { User } from './app-types';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private httpClient: HttpClient) { }

  fetchData(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:3000/users').pipe(
      catchError(this.handleError));

  }

  deleteElement(element: any): Observable<any> {
    // return this.httpClient.post<User[]>('./assets/sample.json', element).pipe(
    //   catchError(this.handleError));
    const url = `http://localhost:3000/users/${element.id}`; // DELETE api/heroes/42
    return this.httpClient.delete(url)
      .pipe(
        catchError(this.handleError)
      );

  }

  updateElement(element: any) {
    // return this.httpClient.put<User[]>('./assets/sample.json', element).pipe(
    //   catchError(this.handleError));
    return this.httpClient.post('http://localhost:3000/users', element);

  }

  // Error Handling code
  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return Observable.throw(err.error() || 'Server error');
  }
}
