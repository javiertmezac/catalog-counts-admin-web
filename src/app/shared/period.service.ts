import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HandleHttpClientError } from './handle-error';

@Injectable({
  providedIn: 'root',
})
export class PeriodService {
  baseUri = environment.baseUri;
  periodUri = `${this.baseUri}/v1/period`;

  constructor(
    private httpClient: HttpClient,
    private handleError: HandleHttpClientError
  ) {}

  getPeriods(): Observable<any> {
    console.log('blah');
    return this.httpClient.get(this.periodUri).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError.handleError)
    );
  }
}
