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


  ngOnInit():void{
    this.database.getUtente()
    .subscribe(data=>{
      this.utente=data
      console.log(this.utente)
    })
  
  }


  onGetUtenti(){
  }

    onDeleteUtente(){
    this.database.deleteUtente(this.id).subscribe((data: any)=>{
      console.log(data)
    })
  }



}


