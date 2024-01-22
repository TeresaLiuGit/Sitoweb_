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
    return this.http.post(this.url+'utente.json', body)
  }

  getUtente(){
    return this.http.get(this.url+'utente.json')
  }

  deleteUtente( id:string){
    console.log(this.url+'utente'+`/${id}.json`)
    return this.http.delete(this.url+'utente'+`/${id}.json`)
  }
  
  patchUtente(id:string, body:{}){
    return this.http.patch(this.url+'utente'+`/${id}.json`,body)
  }




  //MERCE

  insertAbbDonna(body:{}){
    return this.http.post(this.url+'abbDonna.json',body)
  }

  insertAbbUomo(body:{}){
    return this.http.post(this.url+'abbUomo.json',body)
  }

  insertMerce(body:{}){
    return this.http.post(this.url+'merce.json',body)
  }

  getMerceDonna(){
    return this.http.get(this.url+'abbDonna.json')
  }

  getMerceUomo(){
    return this.http.get(this.url+'abbUomo.json')
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
    return this.http.post(this.url+'fattura.json', body)
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
