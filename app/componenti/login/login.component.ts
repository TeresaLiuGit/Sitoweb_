import { Component, Injectable, OnInit } from '@angular/core';


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

  admin='-Nol12CGDJJSgzwYuWfv'
  isAuthenticated=false

  constructor(private authService:AuthService, private database:DatabaseService){}


    onSubmit(form: NgForm){
    console.log(this.isAuthenticated)
    const email= form.value.email
    const password= form.value.password
    
    this.database.insertUtente({email:email, password:password}).subscribe((data:any)=>{
      console.log(data)

      const uid= Object.keys(data)[0]
      console.log(uid)
    })

    this.isAuthenticated=true

    form.reset()

  }

}




  





