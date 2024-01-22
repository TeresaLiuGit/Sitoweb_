import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { DatabaseService } from 'src/app/servizi/database.service';



@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent {

  inserito:boolean | undefined 
  listaUtente:[{}] | any
  chiave:any
  valori: any;
  array:any



  constructor(private authservice: AuthService, private database:DatabaseService){}

  onSubmit(form: NgForm){
    const nuovaEmail= form.value.email
    const nuovaPassword= form.value.password
    this.inserito=true

    console.log(nuovaEmail, nuovaPassword)

    this.database.getUtente().subscribe(data=>{
      this.listaUtente=data  
      this.array=[]

        for(this.chiave in this.listaUtente) {
        
          if(this.listaUtente.hasOwnProperty(this.chiave)) {
          this.valori = this.listaUtente[this.chiave]; 

          const uid= Object.keys(data)[0]
          const email = this.valori.email;
          const password = this.valori.password;
  
          this.array.push({ uid, email, password })      
          

          if(nuovaEmail== this.array.email){
            console.log('EMAIL GIA ESISTENTE')
          }

          break
        }
    }
  })

          this.database.insertUtente({email:nuovaEmail, password:nuovaPassword}).subscribe((data:any)=>{
             console.log(data)
          })

        
        }
      }
    
//NON FUNZIONA, AGGIUSTARE

