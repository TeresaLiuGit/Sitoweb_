import { Component, Injectable, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseService } from 'src/app/servizi/database.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-merce',
  templateUrl: './merce.component.html',
  styleUrls: ['./merce.component.css']
})



export class MerceComponent {

  listaMerce:[] | any

  constructor(private database:DatabaseService){}


  onSubmit(form: NgForm){
    const titolo= form.value.id
    const descrizione= form.value.descrizione
    const costo= form.value.costo

    this.database.insertMerce({titolo, descrizione,costo}).subscribe(data=>{
      console.log(data)

      })      
      form.reset()

  }
  

    onAbbDonna(form: NgForm){
      const titolo= form.value.id
      const descrizione= form.value.descrizione
      const costo= form.value.costo

      this.database.insertAbbDonna({titolo, descrizione,costo}).subscribe((data:any)=>{
        console.log(data)
        })  
    }



    onAbbUomo(form: NgForm){
      const titolo= form.value.id
      const descrizione= form.value.descrizione
      const costo= form.value.costo
  
      this.database.insertAbbUomo({titolo, descrizione,costo}).subscribe((data:any)=>{
        console.log(data)
        })
    }

}


