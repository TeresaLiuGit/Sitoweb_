import { Component, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
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

export class LoginComponent {
  constructor(private authservice: AuthService, private database:DatabaseService){}
  isAuthenticated: boolean | any

  ngOnInit(): void{



  }

  onSubmit(form: NgForm){
    const email= form.value.email
    const password= form.value.password

    console.log(email, password)

    this.authservice.signIn({email: email, password: password, returnSecureToken: true}).subscribe((data:any)=>{
      console.log(data)
    
      })




      this.isAuthenticated=true
      
 
  }

}




  





