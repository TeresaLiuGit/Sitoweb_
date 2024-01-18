import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servizi/database.service';

@Component({
  selector: 'app-lista-fattura',
  templateUrl: './lista-fattura.component.html',
  styleUrls: ['./lista-fattura.component.css']
})
export class ListaFatturaComponent implements OnInit{

  listaFattura:[{}] | any
  valoriListaFattura:any
  chiave:any
  chiaviValoriListaFattura: any;
  attributi:any


  idfattura:any
  body=this.database.bodyFattura
fine:any

constructor(private database:DatabaseService){}

  ngOnInit(): void {
      this.database.getFattura().subscribe(data=>{
        console.log(data)
        this.listaFattura=data  
        this.valoriListaFattura=(Object.values(this.listaFattura));  
        console.log(this.valoriListaFattura)

        for(this.chiave in this.valoriListaFattura) {
          if(this.valoriListaFattura.hasOwnProperty(this.chiave)) {
          this.chiaviValoriListaFattura = this.valoriListaFattura[this.chiave];         
          console.log(this.chiaviValoriListaFattura)


          this.attributi=Object.entries(this.chiaviValoriListaFattura)
          console.log(this.attributi)


          this.fine=JSON.stringify(this.attributi)
          console.log(this.fine)
        }
      }

  

      })
    }
    

  

}
