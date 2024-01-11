import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLogged:boolean | undefined
  constructor(private authservice: AuthService){}

  ngOnInit(): void{

  }

  onSubmit(form: NgForm){
    const email= form.value.email
    const password= form.value.password
    this.isLogged=true

    console.log(email, password)
    this.authservice.signIn({email: email, password: password, returnSecureToken: true}).subscribe((data:any)=>{
      console.log(data)
      const expirationDate= new Date(new Date().getTime() + data.expiresIn*1000)
      //la somma tra l'ora di adesso più la data di quando scaderà moltiplicato per mille
      //perchè l'ora di adesso è espresso in millisecondi mentre l'altra in secondi -> abbiamo eseguito una conversione
    
        this.authservice.creaUtente(data.email, data.localId, data.idToken,  expirationDate)
    
        localStorage.setItem('user', JSON.stringify(this.authservice.user))
        console.log(this.authservice.user)
      })
    
    
 
  }

}




  





