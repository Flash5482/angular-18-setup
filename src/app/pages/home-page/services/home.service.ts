import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  getPortfolios(): Observable<null> {
    if (!environment.production) {
      return of(null);
    }


    return this.httpClient.get<null>(
      `test`
    );
  }
}
