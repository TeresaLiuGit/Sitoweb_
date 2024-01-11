import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private authService: AuthService){}

  //userEmail= this.authService.user.email
  isLoggedIn= this.authService.isLoggedIn;
  isAdmin= this.authService.isAdmin


  ngOnInit(): void {
    
  }

  onLogout(){
    this.authService.logout()
  }

  
}


