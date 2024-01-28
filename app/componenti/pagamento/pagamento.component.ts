import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent{

  constructor(private router: Router){}
  
  okk:boolean | undefined

  ok(){
    this.okk=true

  }

  navigateToNewRoute(): void {
    setTimeout(() => {
      this.router.navigate(['/homepage']);
    }, 1000); 
  }
  
}
