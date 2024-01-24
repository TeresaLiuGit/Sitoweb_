import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { DatabaseService } from 'src/app/servizi/database.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit{

  listaOrdine: {}[] | any;
  chiave:any
  valori: any;
  array:any
  costoProdotto:any
  totale=0

  ordine= this.database.ordine
  



constructor(private database:DatabaseService){}

  ngOnInit(): void {
    console.log(this.ordine)
    this.costoProdotto=[]


  for (let i = 0; i < this.ordine.length; i++) {
  this.costoProdotto.push(this.ordine[i][2]);
  console.log(this.costoProdotto)
  }

  this.totale = this.costoProdotto.reduce((acc: any, costo: any) => acc + costo, 0);
  this.totale = +this.totale.toFixed(2);
  console.log(this.totale)

  }



inserimento(){
  const ordine= this.database.ordine
  const totale=this.totale
  this.database.insertOrdine({ordine,totale})
}





onEmpty(){
  this.database.emptyOrdine()
}

}

