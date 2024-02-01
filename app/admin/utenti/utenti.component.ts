import { Component, Injectable, OnInit } from '@angular/core';
import { RegistrazioneComponent } from 'src/app/componenti/registrazione/registrazione.component';
import { DatabaseService } from 'src/app/servizi/database.service';


@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit {

  listaUtente:[{}] | any
  chiave:any
  valori: any;
  array:any
  length:any

constructor(private database:DatabaseService){}

  ngOnInit(): void {
      this.database.getUtente().subscribe(data=>{
      console.log(data)

      this.listaUtente=data  
      this.array=[]

        for(this.chiave in this.listaUtente) {
        
          if(this.listaUtente.hasOwnProperty(this.chiave)) {
          this.valori = this.listaUtente[this.chiave]; 

          const uid= Object.keys(data)
          const email = this.valori.email;
          const password = this.valori.password;
  
          this.array.push({ uid, email, password })        
          
          if(this.array.length!=0){
            this.length=true
          }
          
  
        }
        }
    })
}
}
