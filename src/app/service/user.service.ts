import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = environment.apiUrl;
  constructor(private readonly http: HttpClient) { }

  getUsers() {
    return this.http.get(`${ this.apiUrl }/users`);
  }
}
