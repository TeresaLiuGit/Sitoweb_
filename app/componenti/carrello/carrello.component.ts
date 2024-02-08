import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servizi/database.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit{

  array:any
  costoProdotto:any
  totale=0
  punti=0
  cliccked:any
  length:any
  ordine= this.database.ordine
  user= this.database.user
  email= this.database.user[0]
  roundedTotal=0
  
  imageUrl: string = '';
  arrayImmagini:any


constructor(private database:DatabaseService, private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
  
    this.arrayImmagini=[]
    this.costoProdotto=[]


    for(let i of this.ordine){
      this.imageUrl= i[3]
      this.arrayImmagini.push(this.imageUrl)
    }


    if(this.ordine.length!=0){
      this.length=true
    }
    

    for (let i = 0; i < this.ordine.length; i++) {
    this.costoProdotto.push(parseFloat(this.ordine[i][2]))
    }


    this.totale = this.costoProdotto.reduce((acc: any, costo: any) => acc + costo, 0).toFixed(2);
   
    this.punti= this.totale/15
    this.punti=Math.floor(this.punti)

  }

  onDelete(item:{}){
    console.log('prima:', this.database.ordine)
    this.database.deleteItemFromArray(item)
    console.log('dopo:',this.database.ordine)
        this.cdr.detectChanges();

  }

  onRefresh(){
    this.cdr.detectChanges();

  }


inserimento(){
  const ordine= this.database.ordine
  const totale=this.totale
  const email= this.database.user[0]

    this.database.insertOrdine({prodotti:ordine, totale, user:email}).subscribe(data=>{
      console.log(data)
    })
}

onEmpty(){
  this.database.emptyOrdine()
}

}

