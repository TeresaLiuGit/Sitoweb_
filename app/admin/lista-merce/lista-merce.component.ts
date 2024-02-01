import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servizi/database.service';
import { AdminComponent } from 'src/app/componenti/admin/admin.component';
import { MerceComponent } from '../merce/merce.component';


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
  length:any

constructor(private database:DatabaseService){}


  ngOnInit(): void {
      this.database.getMerce('').subscribe(data=>{

      this.listaMerce=data  
      this.array=[]


      const reparto= Object.keys(this.listaMerce)

      for(let i in this.listaMerce){
        const uid= this.listaMerce[i]
       // console.log(uid)
        for(let y in uid){
          const prodotto= uid[y]
          console.log(prodotto)

          const costo= Object.values(prodotto)[0]
          console.log(costo)

          const descrizione=Object.values(prodotto)[1]
          console.log(descrizione)

          const immagine= Object.values(prodotto)[2]
          console.log(immagine)

          const titolo=Object.values(prodotto)[3]
          console.log(titolo)


          this.array.push({reparto, titolo, descrizione, immagine, costo })
          console.log(this.array)
                  if(this.array.length!=0){
          this.length=true
        }


        }
      }











      })
    }
  }