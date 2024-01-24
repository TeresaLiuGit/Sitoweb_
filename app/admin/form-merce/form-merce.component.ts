import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseService } from 'src/app/servizi/database.service';

@Component({
  selector: 'app-form-merce',
  templateUrl: './form-merce.component.html',
  styleUrls: ['./form-merce.component.css']
})
export class FormMerceComponent {

  urlMerce='https://webliu-dca79-default-rtdb.europe-west1.firebasedatabase.app/merce'
  urlAbbDonna='https://webliu-dca79-default-rtdb.europe-west1.firebasedatabase.app/abbDonna'
  urlAbbUomo='https://webliu-dca79-default-rtdb.europe-west1.firebasedatabase.app/abbUomo'


  constructor(private database:DatabaseService){}

  onSubmit(form: NgForm){

    const id= form.value.id
    const descrizione= form.value.descrizione
    const costo= form.value.costo
      
    console.log({id, descrizione, costo})

    this.database.patchMerce(id, {descrizione, costo}, this.urlMerce).subscribe((data:any)=>{
      console.log(data)
    })
    
    this.database.patchMerce(id, {descrizione, costo}, this.urlAbbDonna).subscribe((data:any)=>{
      console.log(data)
    })

    this.database.patchMerce(id, {descrizione, costo}, this.urlAbbUomo).subscribe((data:any)=>{
      console.log(data)
    })
      
      form.reset()

    }
  }
