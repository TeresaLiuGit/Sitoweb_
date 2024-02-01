import { Component, Injectable, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseService } from 'src/app/servizi/database.service';


export interface categorie {
  value: string;
  viewValue: string;
}

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-merce',
  template: `
  <div *ngFor="let cat of categoria">
    {{ cat.value }}
  </div>
`,
  templateUrl: './merce.component.html',
  styleUrls: ['./merce.component.css']
})



export class MerceComponent {

  listaMerce:[] | any
  imageUrl: string | ArrayBuffer | null | undefined 

  constructor(private database:DatabaseService){}


  categoria: categorie[] = [
    {value: 'abbDonna', viewValue: 'Abbigliamento Donna'},
    {value: 'abbUomo', viewValue:  'Abbigliamento Uomo'},
    {value: 'telefonia', viewValue: 'Telefonia'},
    {value: 'pulizia', viewValue: 'Pulizia'},
    {value: 'arredamento', viewValue: 'Arredamento'},
    {value: 'ferramenta', viewValue: 'Ferramenta'},
  ];
  selectedCategory: string = '';



  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      this.readImage(file);
    }
  }

  readImage(file: File): void {
    const reader = new FileReader();

    reader.onload = (e) => {
      this.imageUrl = e.target?.result;
    };

    reader.readAsDataURL(file);
  }


  onSubmit(form: NgForm){
    const titolo= form.value.id
    const descrizione= form.value.descrizione
    const costo= form.value.costo
    const immagine= this.imageUrl
  

    this.database.insertMerce({titolo, descrizione,costo, immagine}, this.selectedCategory).subscribe(data=>{
      console.log(data)
      })  
          
      form.reset()

  }
  



}


