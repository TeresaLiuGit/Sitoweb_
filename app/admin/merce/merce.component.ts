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

  body:any
  bodyAbb:any
  descrizioneprodotto:any

  constructor(private database:DatabaseService){}


  onSubmit(form: NgForm){
    const id= form.value.id
    const descrizione= form.value.descrizione
    const costo= form.value.costo

    this.database.insertMerce({id:id, descrizione:descrizione, costo:costo}).subscribe(data=>{
      console.log(data)
      this.body=[id, descrizione,costo]
      console.log(this.body)

      })      

      form.reset()

  }
  

    onAbbDonna(form: NgForm){
      const id= form.value.id
      const descrizione= form.value.descrizione
      const costo= form.value.costo

    this.database.insertAbbDonna({id:id, descrizione:descrizione, costo:costo}).subscribe((data:any)=>{
      console.log(data)
      this.bodyAbb=[id, descrizione,costo]
      console.log(this.bodyAbb)


      })  
    }

    onAbbUomo(form: NgForm){
      const id= form.value.id
      const descrizione= form.value.descrizione
      const costo= form.value.costo
  
      this.database.insertAbbUomo({id:id, descrizione:descrizione, costo:costo}).subscribe((data:any)=>{
        console.log(data)
        this.bodyAbb=[id, descrizione,costo]
        console.log(this.bodyAbb)
  
        })
  

    }

}


