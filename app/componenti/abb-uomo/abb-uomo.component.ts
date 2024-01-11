import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-abb-uomo',
  templateUrl: './abb-uomo.component.html',
  styleUrls: ['./abb-uomo.component.css']
})
export class AbbUomoComponent {
  constructor(private authService: AuthService){}
  onLogout(){
    this.authService.logout()
  }


}
