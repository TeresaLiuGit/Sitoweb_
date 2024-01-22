import { Component, Injectable, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { DatabaseService } from 'src/app/servizi/database.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  prodotto: any;
  fattura: any;
  labelPosition: 'before' | 'after' = 'after';
  utente: HTMLInputElement | undefined;
  listaMerce:[{}] | any

  constructor(private database:DatabaseService){}

  stopPropagation(event: { stopPropagation: () => void; }){
    event.stopPropagation();
  }


      //UTENTE

  onListaUtente(){
    this.database.getUtente().subscribe((data:any)=>{
      console.log(data)
    })
  }

  onDeleteUtente(){
    this.utente = document.getElementById('idUtente') as HTMLInputElement
    console.log(this.utente)
    this.database.deleteUtente(this.utente.value).subscribe(data=>{
      console.log(data)
    })
  }


  

    //MERCE

  onDeleteMerce(){
    this.prodotto = document.getElementById('idProdotto') as HTMLInputElement
    this.database.deleteMerce(this.prodotto.value).subscribe(data=>{
          console.log(data)
    })
  }


    //FATTURE

  onDeleteFatture(){
    this.fattura = document.getElementById('idFattura') as HTMLInputElement
    this.database.deleteFattura(this.fattura.value).subscribe(data=>{
      console.log(data)
    })
  }

  attributi(){
    this.fattura = document.getElementById('idFattura') as HTMLInputElement
    console.log(this.fattura.values)

  }
}