import { Component, Injectable, OnInit } from '@angular/core';


import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn: 'root'
})

export class LoginComponent{

  isAuthenticated=false



  onSubmit(form: NgForm){
    console.log(this.isAuthenticated)
    const email= form.value.email
    const password= form.value.password

    console.log(email, password)
    this.isAuthenticated=true
    console.log(this.isAuthenticated)

  }

}




  





