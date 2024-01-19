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
  utente: any;
  form: any;
  errore:string | any


  constructor(private authservice: AuthService, private database:DatabaseService){}

  onSubmit(form: NgForm){
    const email= form.value.email
    const password= form.value.password
    this.inserito=true

      this.database.insertUtente({email:email, password:password}).subscribe((data:any)=>{
        console.log(data)
      })
      form.reset()

  }
}

