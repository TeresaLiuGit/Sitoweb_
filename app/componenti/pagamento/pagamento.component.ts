import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/servizi/database.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent{

  constructor(private router: Router, private database:DatabaseService){}
  
  okk:boolean | undefined

  ok(){
    this.okk=true
    this.database.emptyOrdine()

  }

  navigateToNewRoute(): void {
    setTimeout(() => {
      this.router.navigate(['/homepage']);
    }, 1000); 
  }
  
}
