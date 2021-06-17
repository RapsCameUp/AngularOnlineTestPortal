import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { candidate } from '../models/ICandidate';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateuserService {

_candidates: Array<candidate> = [];
  constructor(private _httpClient:HttpClient) { }

  getAllUsers(): Observable<candidate[]>{
    return this._httpClient.get<candidate[]>(`http://localhost:3000/candidates/`);
  }

  RegisterNewUser(_candidate:candidate): Observable<candidate>{
    return this._httpClient.post<candidate>(`http://localhost:3000/candidates`,_candidate);
  }

  checkIfUserIsLoggedIn(){
    let user = sessionStorage.getItem('Username')
    return !(user === null)
  }

   getTheUserLoggedIn():string{
        let user = sessionStorage.getItem('Username');
        if(!(user === null)){
          return user;
        }
        else{
               return "Empty";
        }
  }

 LogUserOut(){
   sessionStorage.removeItem('Username')
 }

}
