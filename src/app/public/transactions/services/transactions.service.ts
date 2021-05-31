import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment as env } from '@environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(
    private http: HttpClient,
  ) { }

  getBanks(): Observable<any> {
    return this.http.get('https://bast.dev/api/banks.php')
  }

  getRecipients(): Observable<any> {
    return this.http.get(env.url.apiEndpoint + 'recipients/list/')
  }

  getAccountTypes(): Observable<any> {
    return this.http.get(env.url.apiEndpoint + 'accountTypes/list/')
  }

  saveTransaction(obj: any): Observable<any> {
    return this.http.post(env.url.apiEndpoint + 'transactions/new', obj);
  }
}
