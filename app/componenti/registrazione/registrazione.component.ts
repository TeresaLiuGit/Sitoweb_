import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
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
  email: string = '';
  password: string = '';


  constructor(private authservice: AuthService, private router: Router, private database:DatabaseService){}

  navigateToNewRoute(): void {
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000); 
  }
  

  onSubmit(form: NgForm){
    const email= form.value.email
    const password= form.value.password

    this.authservice.signUp({email: email, password: password, returnSecureToken: true}).subscribe(data=>{
      console.log(data)
      this.inserito=true
    })

    this.database.insertUtente({email, password}).subscribe(data=>{
      console.log(email, password)
    })
    
    if (this.isEmailValid(email)==false) {
      window.alert('Inserire una email valida: utente@gmail.com');
    }

    if (this.isPasswordValid(password)==false) {
      window.alert('La password deve essere lunga almeno 6 caratteri e contenere un carattere speciale.');
    }
  }

  isEmailValid(email: string): boolean {
    // Regular expression for a basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  isPasswordValid(password: string): boolean {
    // Password must be at least 6 characters long and contain a special symbol
    const passwordRegex = /^(?=.*[A-Za-z0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
  }


    
}
