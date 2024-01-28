import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { DatabaseService } from 'src/app/servizi/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn: 'root'
})

export class LoginComponent{

  isAuthenticated:boolean | any 
  listaUtente:[{}] | any
  chiave:any
  valori: any;
  array:any
  uidAdmin='admin@admin.com'



  constructor(private authservice: AuthService, private database:DatabaseService){}
  
  onSubmit(form: NgForm){
    const email= form.value.email
    const password= form.value.password

    this.authservice.signIn({email: email, password: password, returnSecureToken: true}).subscribe(data=>{
      console.log(data)
      this.isAuthenticated=true
    })


    this.database.getUtente().subscribe(data=>{
      this.listaUtente=data  
      this.array=[]

      for(this.chiave in this.listaUtente) {
            
        if(this.listaUtente.hasOwnProperty(this.chiave)) {
        this.valori = this.listaUtente[this.chiave]; 
        //console.log(this.valori)

        const uid: string = this.chiave;
        const email = this.valori.email;
        const password = this.valori.password;

        // Assuming you want to store the data for each item in an array
        this.array.push({ uid, email, password })    
        
        if(email===this.uidAdmin){
          this.authservice.admin=true
        }
      }
    }
      
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
