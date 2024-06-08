import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string="http://localhost:5000/api/auth";
  constructor(private _http:HttpClient) {

   }

   registerUser(userObj:any):any{
    return this._http.post(`${this.url}/register`,userObj)
   }

   loginUser(userObj:any):any{
    return this._http.post(`${this.url}/login`,userObj)
   }


}
