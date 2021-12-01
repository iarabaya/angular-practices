import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthResponse, User } from '../interfaces/interfaces';
import { catchError, map, of, tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _user!: User;

  get user(){
    return {...this._user};
  }

  constructor( private http : HttpClient ) { }


  login( email: string, password:  string ){
    const url = `${this.baseUrl}/auth`;
    const body = { email, password }
    return this.http.post<AuthResponse>(url, body).pipe( 
        tap( resp => { 
          // console.log(resp)
          if( resp.ok ){
            localStorage.setItem('token', resp.token! );
            this._user = {
              name: resp.name!,
              uid: resp.uid!
            }
          }
         }),
        map( valid => valid.ok),
        catchError( res => of(res.error.msg) )
      );
  }

  validateToken() : Observable<boolean>{
    const url= `${this.baseUrl}/auth/renew`;
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '')
    return this.http.get(url, { headers });
  }
}
