import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private authService: AuthService){}


  ngOnInit(): void {
    
  }

  onLogout(){
    this.authService.logout()
  }

}
