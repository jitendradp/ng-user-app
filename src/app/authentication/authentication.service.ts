import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  login(user): Observable<any> {
    return this.http.post(`${this.url}login`, user).pipe(
      map((auth: { token: string }) => {
        localStorage.setItem('ACCESS_TOKEN', auth.token);
        return auth;
      })
    );
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
