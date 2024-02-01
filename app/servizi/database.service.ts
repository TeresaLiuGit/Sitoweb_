import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  url='https://webliu-dca79-default-rtdb.europe-west1.firebasedatabase.app/'
  ordine: any[] = []  //array i cui salveremo tutti gli articoli inseriti nel carrello
  risultato: any;

  setRisultato(data: any) {
    this.risultato = data;
  }



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

  insertMerce(body:{}, sottocategoria:string){
    return this.http.post(this.url+'merce/'+sottocategoria+'.json',body)
  }

  getMerce(sottocategoria:string){
    return this.http.get(this.url+'merce/'+sottocategoria+'.json')
  }

  deleteMerce(id: string) {
    return this.http.delete(this.url +'merce'+ `/${id}.json`);
  }

  patchMerce(id:string, body:{}, url:string){
    return this.http.patch(this.url+'merce'+`/${id}.json`,body)
  }




  //CARRELLO

  fillOrdine(uid:string, descrizione:string, costo:number, immagine:any){                       //PER INSERIRE NEL CARRELLO
    this.ordine.push([uid, descrizione, costo, immagine])
  }

  deleteItemFromArray(item: any) {
    this.ordine = this.ordine.filter(existingItem => existingItem !== item);      //PER CANCELLARE UN PRODOTTO DALL'ORDINE
  }
  
  emptyOrdine(){                                                                     //PER SVUOTARE IL CARRELLO ALLA FINE DI OGNI ORDINE (si procede al pagamento o si annulla)
    this.ordine = [];
  }

  obtainOrdine(){
    return this.ordine
  }
  insertOrdine(body:{}){
    return this.http.post(this.url+'ordine.json', body)
  }
  getOrdine(){
    return this.http.get(this.url+'ordine.json')
  }

  deleteOrdine( id:string){
    console.log(this.url+'utente'+`/${id}.json`)
    return this.http.delete(this.url+'utente'+`/${id}.json`)
  }



}
