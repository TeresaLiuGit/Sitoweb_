import { Component, OnInit } from '@angular/core';
import { RegistrazioneComponent } from 'src/app/componenti/registrazione/registrazione.component';
import { DatabaseService } from 'src/app/servizi/database.service';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit {

  listaUtenti:[{}] | any

constructor(private database:DatabaseService, private registrazione:RegistrazioneComponent){}

  ngOnInit(): void {

    this.database.getUtente().subscribe(data=>{
      console.log(data)
    })

    }




}


