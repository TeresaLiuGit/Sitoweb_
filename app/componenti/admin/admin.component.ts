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


  constructor(private database:DatabaseService){}

  //UTENTE

  onListaUtente(){
    this.database.getUtente().subscribe((data:any)=>{
      console.log(data)
    })
  }

  onDeleteUtente(){
    const utente = document.getElementById('idUtente') as HTMLInputElement
    this.database.deleteUtente(utente.value).subscribe(data=>{
      console.log(data)
    })
  }



    //MERCE

  onDeleteMerce(){
    const prodotto = document.getElementById('idProdotto') as HTMLInputElement
    this.database.deleteMerce(prodotto.value).subscribe(data=>{
      console.log(data)
    })

  }



    //ORDINE

  onDeleteOrdine(){
    const uidFattura=document.getElementById('idFattura') as HTMLInputElement
    this.database.deleteOrdine(uidFattura.value).subscribe(data=>{
      console.log(data)
    })
  }

}