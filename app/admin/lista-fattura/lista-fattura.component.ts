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

      for(this.chiave in this.listaFattura) {
        
        if(this.listaFattura.hasOwnProperty(this.chiave)) {
        this.valori = this.listaFattura[this.chiave]; 

        const uid= Object.keys(data)
        const email = this.valori.email;
        const password = this.valori.password;

        this.array.push({ uid, email, password })          
      }
      }        
    })
}}
