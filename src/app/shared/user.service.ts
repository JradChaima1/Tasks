import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly ROOT_URL;
  selectedUser: User = {
    fullName: '',
    email: '',
    password: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000/users';
   }

  //HttpMethods

  postUser(user: User){
    return this.http.post(`${this.ROOT_URL}/register`,user,this.noAuthHeader);
  }

  login(authCredentials) {
    return this.http.post(`${this.ROOT_URL}/authenticate`,authCredentials,this.noAuthHeader);
  }

  getUserProfile() {
    return this.http.get(`${this.ROOT_URL}/userProfile`);
  }


  //Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
