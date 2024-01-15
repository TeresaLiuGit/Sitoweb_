import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  url='https://webliu-dca79-default-rtdb.europe-west1.firebasedatabase.app/'


  constructor(private http: HttpClient, private authService: AuthService) { }


  //UTENTE
  insertUtente(body:{}){
    return this.http.post(`${this.url}+'merce.json'?auth=${this.authService.user.token}`, body)
    //return this.http.post(`${this.url}+'utente.json'?auth=${this.authService.user.token}`,body)
  }
  getUtente(){
    return this.http.get(this.url+'utente.json')
  }
  deleteUtente( id:string){
    console.log(this.url+`/${id}.json`)
    return this.http.delete(this.url+`/${id}.json`)
  }
  patchUtente(id:string, body:{}){
    return this.http.patch(this.url+`/${id}.json`,body)
  }




  //MERCE
  insertMerce(body:{}){
    return this.http.post(`${this.url}+'merce.json'?auth=${this.authService.user.token}`,body)
  }
  getMerce(){
    return this.http.get(this.url+'merce.json')
  }
  deleteMerce( id:string){
    console.log(this.url+`/${id}.json`)
    return this.http.delete(this.url+`/${id}.json`)
  }
  patchMerce(id:string, body:{}){
    return this.http.patch(this.url+`/${id}.json`,body)
  }




  //FATTURA
  insertFattura(body:{}){
    return this.http.post(`${this.url}+'fattura.json'?auth=${this.authService.user.token}`,body)
  }
  getFattura(){
    return this.http.get(this.url+'utente.json')
  }
  deleteFattura( id:string){
    console.log(this.url+`/${id}.json`)
    return this.http.delete(this.url+`/${id}.json`)
  }
  patchFattura(id:string, body:{}){
    return this.http.patch(this.url+`/${id}.json`,body)
  }



}
