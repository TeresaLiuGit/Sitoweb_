import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servizi/database.service';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit {
  utente:any
  id:string | any

  constructor(private database:DatabaseService){}


  ngOnInit(){

    this.database.getUtente().subscribe((data:any)=>{
      this.utente= Object.keys(data).map((key) => {return data[key]})
      console.log(this.utente)
      this.id=this.utente.key
      console.log("id", this.id)
    })
  
  }
    onGetUtenti(){
      this.database.getUtente().subscribe((data:any)=>{
        this.utente= Object.keys(data).map((key) => {return data[key]})
        console.log(this.utente)
        this.id=this.utente.key
        console.log("id", this.id)
      })
  
    }

    onDeleteUtente(){
    this.database.deleteUtente(this.id).subscribe((data: any)=>{
      console.log(data)
    })
  }



}


