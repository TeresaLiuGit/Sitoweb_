import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  url='https://webliu-dca79-default-rtdb.europe-west1.firebasedatabase.app/'
  bodyFattura:any


  constructor(private http: HttpClient, private authService: AuthService) { }


  //UTENTE
  insertUtente(body:{}){
    return this.http.post(`${this.url}+'utente.json'?auth=${this.authService.user.token}`, body)
  }

  getUtente(){
    return this.http.get(this.url+'utente.json')
  }

  deleteUtente( id:string){
    console.log(this.url+'utente.json'+`/${id}.json`)
    return this.http.delete(this.url+`/${id}.json`)
  }
  
  patchUtente(id:string, body:{}){
    return this.http.patch(this.url+'utente.json'+`/${id}.json`,body)
  }




  //MERCE

  insertAbbDonna(body:{}){
    return this.http.post(this.url+'merce'+'/abbDonna.json',body)
  }

  insertAbbUomo(body:{}){
    return this.http.post(this.url+'merce'+'/abbUomo.json',body)
  }

  insertMerce(body:{}){
    return this.http.post(this.url+'merce.json',body)
  }

  getMerce(){
    return this.http.get(this.url+'merce.json')
  }

  deleteMerce(id:string){
    console.log(this.url+'merce'+`/${id}.json`)
    return this.http.delete(this.url+'merce'+`/${id}.json`)
  }
  patchMerce(id:string, body:{}){
    return this.http.patch(this.url+'merce'+`/${id}.json`,body)
  }




  //FATTURA
  insertFattura(body:{}){
    return this.http.post(this.url+'fattura.json',body)
  }
  getFattura(){
    return this.http.get(this.url+'fattura.json')
  }
  deleteFattura( id:string){
    console.log(this.url+'fattura'+`/${id}.json`)
    return this.http.delete(this.url+'fattura'+`/${id}.json`)
  }
  patchFattura(id:string, body:{}){
    return this.http.patch(this.url+'fattura'+`/${id}.json`,body)
  }



}
