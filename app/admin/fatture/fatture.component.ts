import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/modelli/user.model';
import { DatabaseService } from 'src/app/servizi/database.service';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent {
  
  fattura: any
  
  constructor(private database:DatabaseService){}

  onSubmit(form: NgForm){
    const id= form.value.id
    const descrizione= form.value.descrizione
    const importo= form.value.importo

    console.log({id, descrizione, importo})
    this.database.insertFattura({id, descrizione, importo})
    .subscribe((data:any)=>{
      this.fattura=data
      console.log(this.fattura)
      })
    
      //form.reset()

    }
    
  

}
