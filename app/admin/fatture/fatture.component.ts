import { Component } from '@angular/core';
import { User } from 'src/app/modelli/user.model';
import { DatabaseService } from 'src/app/servizi/database.service';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent {
  
  intestatario: User | undefined
  importo: number | undefined
  descrizione: string | undefined
  
  constructor(private database:DatabaseService){}

    //this.database.insertFattura('https://webliu-dca79-default-rtdb.europe-west1.firebasedatabase.app/utente.json',
    //{this.intestatario, this.i,import, this.descrizione}).subscribe((data)=>{
      //console.log(data)
    //})
  

}
