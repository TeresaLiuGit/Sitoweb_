import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit{

  constructor(private login:LoginComponent){}

  ngOnInit(): void {
  console.log(this.login.isAuthenticated)
  }


}
