import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

   endpoint = 'http://localhost:8080/api/customers';
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  addProduct (product): Observable<any> {
  console.log(product.userText);
  let response =  this.http.get<any>(this.endpoint+"/"+product.userText);
  console.log(response);
  return response;
}

getProduct (): Observable<any> {
  let response = this.http.get(this.endpoint);
  console.log(response);
  return response;
}
}
