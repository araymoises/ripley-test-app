import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment as env } from '@environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CheckAuthService {
  constructor(private http: HttpClient) { }

  check(): Observable<any> {
    return this.http.get(env.url.apiEndpoint + 'checkAuth/')
  }
}
