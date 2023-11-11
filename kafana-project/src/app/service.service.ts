import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './users/User';
import { Account } from './account/Account';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = "http://localhost:3000"
  constructor(private http: HttpClient) {}

  addUser(user:User ): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/adduser`, user);

  }
  getUser(data:any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/getuser`,data)
  }
  getUsertData(id: string):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/getuserid/${id}`)
  }
  updateUser( id: string, updatedUser: User): Observable<User>{
    return this.http.put<User>(`${this.apiUrl}/updateuser/${id}`, updatedUser);
  }
  deleteUser(id:string):Observable<any>{
    return this.http.delete(`${this.apiUrl}/deleteuser/${id}`);
  }
  addAccount(account:Account ): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/addaccount`, account);
  }
  getAccount(data:any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/getaccount`,data)
  }
  getAccounData(id: string):Observable<any>{{
    return this.http.get<any>(`${this.apiUrl}/getaccountid/${id}`)
  }}
  updateAccount( id: string, updatedAccount: Account): Observable<Account>{
    return this.http.put<Account>(`${this.apiUrl}/updateaccount/${id}`, updatedAccount);
  }
  deleteAccount(id:string):Observable<any>{
    return this.http.delete(`${this.apiUrl}/deleteaccount/${id}`);
  }
}


