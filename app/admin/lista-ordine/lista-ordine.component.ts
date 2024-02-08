import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/servizi/database.service';

@Component({
  selector: 'app-lista-ordine',
  templateUrl: './lista-ordine.component.html',
  styleUrls: ['./lista-ordine.component.css']
})
export class ListaOrdineComponent {
  listaOrdine:[{}] | any
  length:boolean | any
  prodotti:any
  totale=0

  uidOrdini: any
  user:any

constructor(private database:DatabaseService){}


    ngOnInit(): void {
  
      this.database.getOrdine().subscribe(data=>{
      this.listaOrdine=data  //array grande
        this.uidOrdini= Object.keys(data)


        for(let chiave in this.listaOrdine) {
          if(this.listaOrdine.hasOwnProperty(chiave)) {

          const valori = this.listaOrdine[chiave]; 

          this.prodotti= valori.prodotti
          this.totale= valori.totale
          this.user= valori.user
        }
      }      


        if(this.listaOrdine.length!=0){
          this.length=true
        }
        
      })

  }

  onDelete(uid:string){

      this.database.deleteOrdine(uid).subscribe(data=>{
        console.log(data)
      })
  }
}
