import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private authService: AuthService, private login: LoginComponent){}

  isAdmin= this.authService.isAdmin
  autenticato= this.login.isAuthenticated


  ngOnInit(): void {
    
  }

  onLogout(){
    this.login.isAuthenticated= false
    this.authService.logout()
  }

  
}


