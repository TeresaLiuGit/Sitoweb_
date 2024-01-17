import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { DatabaseService } from 'src/app/servizi/database.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  value: any
  prodotto: any;
  fattura: any;
  labelPosition: 'before' | 'after' = 'after';
  utente: HTMLInputElement | undefined;

  constructor(private database:DatabaseService){}

  stopPropagation(event: { stopPropagation: () => void; }){
    event.stopPropagation();
  }

  onListaUtente(){
    this.database.getUtente().subscribe(data=>{
      console.log(data)
    })
  }

  onDeleteUtente(){
    this.utente = document.getElementById('idUtente') as HTMLInputElement
    this.database.deleteMerce(this.utente.value).subscribe(data=>{
          console.log(data)
    })
  }



  onListaMerce(){
    this.database.getMerce().subscribe(data=>{
      console.log(data)
    })
  }

  onDeleteMerce(){
    this.prodotto = document.getElementById('idProdotto') as HTMLInputElement
    this.database.deleteMerce(this.prodotto.value).subscribe(data=>{
          console.log(data)
    })
  }




  onListaFatture(){
    this.database.getFattura().subscribe(data=>{
      console.log(data)
    })
  }

  onDeleteFatture(){
    this.fattura = document.getElementById('idFattura') as HTMLInputElement
    this.database.deleteFattura(this.fattura.value).subscribe(data=>{
      console.log(data)
    })
  }
}