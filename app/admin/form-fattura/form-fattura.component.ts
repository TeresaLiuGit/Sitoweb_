import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseService } from 'src/app/servizi/database.service';

@Component({
  selector: 'app-form-fattura',
  templateUrl: './form-fattura.component.html',
  styleUrls: ['./form-fattura.component.css']
})
export class FormFatturaComponent {
 
  constructor(private database:DatabaseService){}

  onSubmit(form: NgForm){
    const id= form.value.id
    const intestatario= form.value.intestatario
    const descrizione= form.value.descrizione
    const importo= form.value.importo

    console.log({id, intestatario, descrizione, importo})
    this.database.patchFattura(id, {intestatario, descrizione, importo})
    .subscribe((data:any)=>{
      console.log(data)
      })
    
      form.reset()

    }

}
