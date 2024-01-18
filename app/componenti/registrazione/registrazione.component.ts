import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { DatabaseService } from 'src/app/servizi/database.service';



@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit{
  inserito:boolean | undefined 
  utente: any;
  form: any;
  listaUtenti:[{}] | any

  constructor(private authservice: AuthService, private database:DatabaseService){}

  ngOnInit(): void{

  }

  onSubmit(form: NgForm){
    const email= form.value.email
    const password= form.value.password
    this.inserito=true

    this.authservice.signUp({email: email, password: password, returnSecureToken: true}).subscribe((data:any)=>{
      console.log(data)

      const expirationDate= new Date(new Date().getTime() + data.expiresIn*1000)
      //la somma tra l'ora di adesso più la data di quando scaderà moltiplicato per mille
      //perchè l'ora di adesso è espresso in millisecondi mentre l'altra in secondi -> abbiamo eseguito una conversione
    

      this.authservice.creaUtente(data.email, data.localId, data.idToken,  expirationDate)
    
      localStorage.setItem('user', JSON.stringify(this.authservice.user))
      console.log(this.authservice.user)

      this.database.insertUtente({email}).subscribe((data:any)=>{
        console.log(data)
      })


    


    })



 

  }
}

