import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/servizi/database.service';

@Component({
  selector: 'app-lista-ordine',
  templateUrl: './lista-ordine.component.html',
  styleUrls: ['./lista-ordine.component.css']
})
export class ListaOrdineComponent {
  listaOrdine:[{}] | any
  array:any
  arrayUid:any
  uidOrdini: any
  length:boolean | any
  singoliOrdini:any

  
constructor(private database:DatabaseService){}



  ngOnInit(): void {
      this.array=[]
      this.arrayUid=[]

      this.database.getOrdine().subscribe(data=>{
      this.listaOrdine=data  //array grande


        this.uidOrdini= Object.keys(data)

        for(let i in this.uidOrdini){
          const uid= this.uidOrdini[i]
          console.log(uid)
        }


       for(let i in this.listaOrdine){
        console.log(this.listaOrdine[i])    //singoli ordini
        this.singoliOrdini= this.listaOrdine[i]




        const prodotto= this.singoliOrdini.ordine
        const totale= this.singoliOrdini.totale


        this.array.push({ prodotto, totale})



        console.log('length:', this.array.length)
        if(this.array.length!=0){
          this.length=true
        }
        
       }



})
}
}
