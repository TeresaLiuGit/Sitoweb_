import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  urlUtente='https://webliu-dca79-default-rtdb.europe-west1.firebasedatabase.app/utente.json'


  urlMerce='https://appdocente-fa4a6-default-rtdb.europe-west1.firebasedatabase.app/merce'
  urlFattura='https://appdocente-fa4a6-default-rtdb.europe-west1.firebasedatabase.app/fattura'


  constructor(private http: HttpClient, private authService: AuthService) { }


  //UTENTE
  insertUtente(body:{}){
    return this.http.post(`${this.urlUtente}?auth=${this.authService.user.token}`, body)
  }

  getUtente(){
    return this.http.get(this.urlUtente)
  }

  deleteUtente( id:string){
    console.log(this.urlUtente+`/${id}.json`)
    return this.http.delete(this.urlUtente+`/${id}.json`)
  }
  
  patchUtente(id:string, body:{}){
    return this.http.patch(this.urlUtente+`/${id}.json`,body)
  }




  //MERCE

  insertAbbDonna(body:{}){
    return this.http.post(this.urlMerce+'/abbDonna.json',body)
  }

  insertAbbUomo(body:{}){
    return this.http.post(this.urlMerce+'/abbUomo.json',body)
  }

  insertMerce(body:{}){
    return this.http.post(this.urlMerce+'.json',body)
  }

  getMerce(){
    return this.http.get(this.urlMerce+'.json')
  }
  deleteMerce(id:string){
    console.log(this.urlMerce+`/${id}.json`)
    return this.http.delete(this.urlMerce+`/${id}.json`)
  }
  patchMerce(id:string, body:{}){
    return this.http.patch(this.urlMerce+`/${id}.json`,body)
  }




  //FATTURA
  insertFattura(body:{}){
    return this.http.post(this.urlFattura+'.json',body)
  }
  getFattura(){
    return this.http.get(this.urlFattura+'.json')
  }
  deleteFattura( id:string){
    console.log(this.urlFattura+`/${id}.json`)
    return this.http.delete(this.urlFattura+`/${id}.json`)
  }
  patchFattura(id:string, body:{}){
    return this.http.patch(this.urlFattura+`/${id}.json`,body)
  }



}
