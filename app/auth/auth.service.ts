import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modelli/user.model';
import { Router } from '@angular/router';
import { LoginComponent } from '../componenti/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  admin:boolean | any
  urlLogin='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBiliEhIkv-rMt2e9I7v135lMTViBjkNyQ'
  urlRegistrazione='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBiliEhIkv-rMt2e9I7v135lMTViBjkNyQ'
  user: User | any

  constructor(private http: HttpClient, private router:Router) { }
  
  signUp(body:{}){
    return this.http.post(this.urlRegistrazione, body)
  }

  signIn(body:{}){
    return this.http.post(this.urlLogin, body)
  }

  
  creaUtente(email:string, id:string, token:string, expirationDate:Date){
    this.user= new User(email, id, token, expirationDate )

  }

  getEmail(url:string){
    return this.http.get(`/${url}?auth=${this.user.email}`)
  }


  logout(valore:boolean){
    this.admin=valore
    this.router.navigate(['/login'])
  }

  setAdmin(valore:boolean){
    this.admin=valore
  }
}
