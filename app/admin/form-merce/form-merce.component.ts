import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/servizi/database.service';

@Component({
  selector: 'app-form-merce',
  templateUrl: './form-merce.component.html',
  styleUrls: ['./form-merce.component.css']
})
export class FormMerceComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialogRef: MatDialogRef<FormMerceComponent>, private database:DatabaseService) { }


  onSubmit(form: NgForm) {
    const uidProdotto= this.data.uidProdotto
    const reparto= this.data.reparto

    var titolo= this.data.titolo
    var descrizione= this.data.descrizione
    var costo= this.data.costo
    var immagine= this.data.immagine


    titolo = form.value.id || titolo; // Keep the original value if form value is falsy
    descrizione = form.value.descrizione || descrizione;
    costo = form.value.costo ? form.value.costo.toFixed(2) : costo; // Keep the original value if form value is falsy
    

    this.database.patchMerce(uidProdotto,reparto, {uidProdotto,titolo, descrizione,costo, immagine}).subscribe((data:any)=>{
      console.log(data)
    })

    form.reset()
  }


  closeDialog(): void {
    this.dialogRef.close(); 
  }

  }
