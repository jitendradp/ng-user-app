import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../shared/model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  create(user: User): Observable<any> {
    return this.http.post(`${this.url}users`, user);
  }

  list(): Observable<any> {
    return this.http.get(`${this.url}users`);
  }

  get(id: number): Observable<User> {
    return this.http.get(`${this.url}users\\${id}`).pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }

  edit(user: User): Observable<any> {
    return this.http.put(`${this.url}users\\${user.id}`, user);
  }

  delete(id: number): Observable<any>{
    return this.http.delete(`${this.url}users\\${id}`);
  }

}
