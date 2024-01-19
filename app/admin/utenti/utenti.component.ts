import { Component, Injectable, OnInit } from '@angular/core';
import { RegistrazioneComponent } from 'src/app/componenti/registrazione/registrazione.component';
import { DatabaseService } from 'src/app/servizi/database.service';


@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit {

  listaUtenti:[{}] | any
  valoriListaUtenti:any
  chiave:any
  chiaviValoriListaUtenti: any;
  attributi:any
  fine:any


constructor(private database:DatabaseService){}


  ngOnInit(): void {
      this.database.getUtente().subscribe(data=>{
      console.log(data)

      this.listaUtenti=data  


        this.valoriListaUtenti=(Object.values(this.listaUtenti));  
      //  console.log(this.valoriListaUtenti)

        for(this.chiave in this.listaUtenti) {
          if(this.listaUtenti.hasOwnProperty(this.chiave)) {
          this.chiaviValoriListaUtenti= this.listaUtenti[this.chiave];    
          this.fine=((Object.entries(this.chiaviValoriListaUtenti
        )))
          console.log('ID:'+this.chiave+' VALORI:'+this.fine)

          }
            

          }

        

    })
    
  
}}

