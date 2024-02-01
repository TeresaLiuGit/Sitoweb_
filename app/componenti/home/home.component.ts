import { Component, Injectable, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { LoginComponent } from '../login/login.component';
import { DatabaseService } from 'src/app/servizi/database.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor(private authService: AuthService, private login: LoginComponent, private database:DatabaseService){}


  autenticato= this.login.isAuthenticated
  listaMerce:[{}] | any
  chiave:any
  valori: any;
  array:any
  risultato:any
  trovato:boolean | any
  nonTrovato:boolean | any
  uid:any
  descrizione:any
  costo:any
  id:any
  immagine:any


  onSearch(form:NgForm){
    const prodotto= form.value.prodotto
    console.log(prodotto)
      
        this.database.getMerce('').subscribe(data=>{
          this.listaMerce=data  
          this.array=[]
    
            for(this.chiave in this.listaMerce) {
            
              if(this.listaMerce.hasOwnProperty(this.chiave)) {
              this.valori = this.listaMerce[this.chiave]; 
              //console.log(this.valori)
    
              const uid: string = this.chiave;
              const id = this.valori.id;
              const descrizione = this.valori.descrizione;
              const costo = this.valori.costo;
              const immagine= this.valori.immagine
      
              // Assuming you want to store the data for each item in an array
              this.array.push({ uid, id, descrizione, costo, immagine })         
              
              if(uid===prodotto){
                this.uid=uid
                this.descrizione=descrizione
                this.costo=costo
                this.immagine= immagine

                this.risultato= this.array.pop({uid, id, descrizione, costo, immagine})               
                console.log(this.risultato.value)
                this.trovato=true
                console.log(this.trovato)
                }else{
                  this.nonTrovato=true
                }
              }
    
        }
      })
  }



  aggiungi(uid:string, descrizione:string, costo:number, immagine:any) {
    this.database.fillOrdine(uid, descrizione, costo, immagine);
    console.log('uid',uid, 'descrizione', descrizione, 'costo', costo)
    
}


  onLogout(){
    this.login.isAuthenticated= false
    this.authService.logout()
  }

  
}


