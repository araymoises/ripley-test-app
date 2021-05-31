import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment as env } from '@environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(
    private http: HttpClient,
  ) { }

  getTransactions(): Observable<any> {
    return this.http.get(env.url.apiEndpoint + 'transactions/list/')
  }
}
