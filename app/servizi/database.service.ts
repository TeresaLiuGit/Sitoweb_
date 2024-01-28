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
  deleteMerce(id: string) {
    return this.http.delete(this.url +'merce'+ `/${id}.json`);
  }
  patchMerce(id:string, body:{}, url:string){
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


  //CARRELLO

  fillOrdine(uid:string, descrizione:string, costo:number){                       //PER INSERIRE NEL CARRELLO
    this.ordine.push([uid, descrizione, costo])
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


  //ACCESSORI TELEFONO

  insertAccessorio(body:{}){
    return this.http.post(this.url+'accessoriTelefono.json', body)
  }
  getAccessorio(){
    return this.http.get(this.url+'accessoriTelefono.json')
  }
  deleteAccessorio( id:string){
    console.log(this.url+'accessoriTelefono'+`/${id}.json`)
    return this.http.delete(this.url+'accessoriTelefono'+`/${id}.json`)
  }
  patchAccessorio(id:string, body:{}){
    return this.http.patch(this.url+'accessoriTelefono'+`/${id}.json`,body)
  }

    //PULIZIA CASA

    insertPulizia(body:{}){
      return this.http.post(this.url+'pulizia.json', body)
    }
    getPulizia(){
      return this.http.get(this.url+'pulizia.json')
    }
    deletePulizia( id:string){
      console.log(this.url+'pulizia'+`/${id}.json`)
      return this.http.delete(this.url+'pulizia'+`/${id}.json`)
    }
    patchPulizia(id:string, body:{}){
      return this.http.patch(this.url+'pulizia'+`/${id}.json`,body)
    }

      //ACCESSORI TELEFONO

  insertFerramenta(body:{}){
    return this.http.post(this.url+'ferramenta.json', body)
  }
  getFerramenta(){
    return this.http.get(this.url+'ferramenta.json')
  }
  deleteFerramenta( id:string){
    console.log(this.url+'ferramenta'+`/${id}.json`)
    return this.http.delete(this.url+'ferramenta'+`/${id}.json`)
  }
  patchFerramenta(id:string, body:{}){
    return this.http.patch(this.url+'ferramenta'+`/${id}.json`,body)
  }

  
}
