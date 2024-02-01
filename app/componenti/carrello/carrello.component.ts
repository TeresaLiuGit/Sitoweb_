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
  cliccked:any
  ordineok: any[] = []
  length:any
  ordine= this.database.ordine
  
  imageUrl: string = '';
  arrayImmagini:any


constructor(private database:DatabaseService){}

  ngOnInit(): void {
  
    this.arrayImmagini=[]

    console.log(this.ordine)


    for(let i of this.ordine){
      this.imageUrl= i[3]
      console.log(this.imageUrl)
      this.arrayImmagini.push(this.imageUrl)
    }


    if(this.ordine.length!=0){
      this.length=true
    }
    

    this.costoProdotto=[]


  for (let i = 0; i < this.ordine.length; i++) {
  this.costoProdotto.push(this.ordine[i][2]);
  }

  this.totale = this.costoProdotto.reduce((acc: any, costo: any) => acc + costo, 0);
  this.totale = +this.totale.toFixed(2);
  this.punti= this.totale/15
  this.punti=Math.floor(this.punti)

  }


  onDelete(item:{}){
    var ordine= this.database.ordine
    console.log(item)
    const newArray = ordine.filter(object => object !== item);
    console.log(newArray)

    ordine = [];
    

    ordine.push(newArray)

    this.ordineok.push(newArray)
    this.cliccked=true
  }


inserimento(){
  const ordine= this.database.ordine
  const totale=this.totale

    this.database.insertOrdine({ordine, totale}).subscribe(data=>{
      console.log(data)
    })


}

onEmpty(){
  this.database.emptyOrdine()
}

}

