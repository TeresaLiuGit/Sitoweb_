import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseService } from 'src/app/servizi/database.service';

@Component({
  selector: 'app-form-fattura',
  templateUrl: './form-fattura.component.html',
  styleUrls: ['./form-fattura.component.css']
})
export class FormFatturaComponent {
 
  fattura: any

  constructor(private database:DatabaseService){}

  onSubmit(form: NgForm){
    const id= form.value.id
    const descrizione= form.value.descrizione
    const importo= form.value.importo

    console.log({id, descrizione, importo})
    this.database.patchFattura(id, {descrizione, importo})
    .subscribe((data:any)=>{
      this.fattura=data
      console.log(this.fattura)
      })
    
      form.reset()

    }

}
