import { Component, OnInit } from '@angular/core';
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
  constructor(private authservice: AuthService){}

  ngOnInit(): void{

  }

  onSubmit(form: NgForm){
    const email= form.value.email
    const password= form.value.password
    this.inserito=true

    this.authservice.signUp({email: email, password: password, returnSecureToken: true}).subscribe(data=>{
      console.log(data)
    })

 

  }
}
