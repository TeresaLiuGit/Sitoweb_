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
  punti=0
  quantity:1 | any

  ordine= this.database.ordine
  



constructor(private database:DatabaseService){}

  ngOnInit(): void {
    console.log(this.ordine)
    this.costoProdotto=[]


  for (let i = 0; i < this.ordine.length; i++) {
  this.costoProdotto.push(this.ordine[i][2]*this.quantity[i]);
  console.log(this.costoProdotto)
  }

  this.totale = this.costoProdotto.reduce((acc: any, costo: any) => acc + costo, 0);
  this.totale = +this.totale.toFixed(2);
  this.punti= this.totale/15
  this.punti=Math.floor(this.punti)

  }



inserimento(){
  const ordine= this.database.ordine
  const totale=this.totale
  this.database.insertOrdine({ordine,totale}).subscribe(data=>{
    console.log(data)
  })
}

onEmpty(){
  this.database.emptyOrdine()
}

}

