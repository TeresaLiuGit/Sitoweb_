import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { DatabaseService } from 'src/app/servizi/database.service';

@Component({
  selector: 'app-merce',
  templateUrl: './merce.component.html',
  styleUrls: ['./merce.component.css']
})



export class MerceComponent {

  constructor(private database:DatabaseService){}

  onSubmit(form: NgForm){
    const id= form.value.id
    const descrizione= form.value.descrizione
    const costo= form.value.costo

    this.database.insertMerce({id:id, descrizione:descrizione, costo:costo}).subscribe(data=>{
      console.log(data)
      })

  }
  

    onAbbDonna(form: NgForm){
      const id= form.value.id
      const descrizione= form.value.descrizione
      const costo= form.value.costo

    this.database.insertAbbDonna({id:id, descrizione:descrizione, costo:costo}).subscribe((data:any)=>{
      console.log(data)
      })
  
    }

    onAbbUomo(form: NgForm){
      const id= form.value.id
      const descrizione= form.value.descrizione
      const costo= form.value.costo
  
      this.database.insertAbbUomo({id:id, descrizione:descrizione, costo:costo}).subscribe((data:any)=>{
        console.log(data)
        })
  

    }





}


