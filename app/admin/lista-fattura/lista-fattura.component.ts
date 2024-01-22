import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servizi/database.service';

@Component({
  selector: 'app-lista-fattura',
  templateUrl: './lista-fattura.component.html',
  styleUrls: ['./lista-fattura.component.css']
})
export class ListaFatturaComponent implements OnInit{

  listaFattura:[{}] | any
  chiave:any
  valori: any;
  array:any

constructor(private database:DatabaseService){}

  ngOnInit(): void {
      this.database.getFattura().subscribe(data=>{
      console.log(data)

      this.listaFattura=data  
      this.array=[]

      Object.keys(this.listaFattura).forEach(chiave => {
        
          if(this.listaFattura.hasOwnProperty(this.chiave)) {
          this.valori = this.listaFattura[this.chiave]; 

          const uid= Object.keys(data)
          const id = this.valori.id;
          const intestatario= this.valori.intestatario;
          const descrizione = this.valori.descrizione;
          const importo = this.valori.importo;
  
          // Assuming you want to store the data for each item in an array
          this.array.push({ uid, id, intestatario, descrizione, importo })          
        }
        })
    })
}}
