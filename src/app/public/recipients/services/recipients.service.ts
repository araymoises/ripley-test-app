import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment as env } from '@environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RecipientsService {

  constructor(
    private http: HttpClient,
  ) { }

  getBanks(): Observable<any> {
    return this.http.get('https://bast.dev/api/banks.php')
  }

  getAccountTypes(): Observable<any> {
    return this.http.get(env.url.apiEndpoint + 'accountTypes/list/')
  }

  saveRecipient(obj: any): Observable<any> {
    return this.http.post(env.url.apiEndpoint + 'recipients/new', obj);
  }
}
