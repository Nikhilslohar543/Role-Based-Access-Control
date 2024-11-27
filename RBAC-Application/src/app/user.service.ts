import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/api/users";

  getUsers():Observable<any>{

    return this.http.get(this.url);

  }

  getUserById(id:string):Observable<any>{

    return this.http.get(`${this.url}/${id}`,{responseType:'text'});

  }

  addUser(user: any):Observable<any>{

    return this.http.post(this.url,user,{responseType:'text'});

  }

  updateUser(id:any, user:any):Observable<any>{

    return this.http.put(`${this.url}/${id}`,user,{responseType:'text'});

  }

  deleteUser(id:any):Observable<any>{

    return this.http.delete(`${this.url}/${id}`,{responseType:'text'});

  }

}
