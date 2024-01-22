import { Component} from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { DatabaseService } from 'src/app/servizi/database.service';


@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent {

  listaFatture: [] | any

  constructor(private database:DatabaseService){}

  onSubmit(form: NgForm){
    const id= form.value.id
    const intestatario= form.value.intestatario
    const descrizione= form.value.descrizione
    const importo= form.value.importo
 
    this.database.insertFattura({id,intestatario, descrizione,importo}).subscribe(data=>{
      console.log(data)

      })      
      form.reset()

  }

}
