import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servizi/database.service';
import { AdminComponent } from 'src/app/componenti/admin/admin.component';
import { MerceComponent } from '../merce/merce.component';
import { MatDialog } from '@angular/material/dialog';
import { FormMerceComponent } from '../form-merce/form-merce.component';


@Component({
  selector: 'app-lista-merce',
  templateUrl: './lista-merce.component.html',
  styleUrls: ['./lista-merce.component.css']
})
export class ListaMerceComponent implements OnInit{

  listaMerce:[{}] | any
  chiave:any
  valori: any;
  array:any
  arrayImmagini:any
  length:any
  uids:any
  constructor(private database:DatabaseService, public dialog: MatDialog){}


  ngOnInit(): void {
      this.database.getMerce('').subscribe(data=>{

        this.listaMerce=data  
        this.array=[]
        this.arrayImmagini=[]
        this.uids=[]

        for(let i in this.listaMerce){
          const uid= this.listaMerce[i]

          const uidProdotto= Object.keys(uid)         //uid dei prodotti, separati in reparti
          this.uids = this.uids.concat(uidProdotto); //insieme degli uid dei prodotti  


          for(let y in uid){
            const prodotto= uid[y]
            const costo= Object.values(prodotto)[0]
            
            const descrizione=Object.values(prodotto)[1]
            const immagine= Object.values(prodotto)[2]
            this.arrayImmagini.push(immagine)

            const reparto=Object.values(prodotto)[3]
            const titolo=Object.values(prodotto)[4]


            this.array.push({uidProdotto, titolo, descrizione, costo, reparto, immagine})

            if(this.array.length!=0){
            this.length=true
            }
          }
       }

      })
    }


      onDelete(uid:string, reparto: string){

        this.database.deleteMerce(uid, reparto).subscribe(data=>{
          console.log(uid, reparto, data)
        })
    }
  
    //MODIFICA
    openFormDialog(uidProdotto:string, titolo:string, descrizione:string, costo:number, reparto:string, immagine: File): void {
      const dialogRef = this.dialog.open(FormMerceComponent, {
        width: '400px', 
        data: {uidProdotto, titolo, descrizione, costo, reparto, immagine} 
      });
    
      dialogRef.afterClosed().subscribe(result => {
        console.log('The form was closed', result);
      });
    }
    

     //INSERIMENTO
    onDialogInsert(): void { 
      const dialogRef = this.dialog.open(MerceComponent, {
        width: '600px', 
        height: '600px',
        data: {} 
      });
    
      dialogRef.afterClosed().subscribe(result => {
        console.log('The form was closed', result);
      });
    }

}