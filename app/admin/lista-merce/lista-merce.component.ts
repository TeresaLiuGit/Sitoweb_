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


constructor(private database:DatabaseService){}


  ngOnInit(): void {
      this.database.getMerce().subscribe(data=>{
      console.log(data)

      this.listaMerce=data  
      this.array=[]

        for(this.chiave in this.listaMerce) {
        
          if(this.listaMerce.hasOwnProperty(this.chiave)) {
          this.valori = this.listaMerce[this.chiave]; 
          //console.log(this.valori)

          const uid= Object.keys(data)
          const id = this.valori.id;
          const descrizione = this.valori.descrizione;
          const costo = this.valori.costo;
  
          // Assuming you want to store the data for each item in an array
          this.array.push({ uid, id, descrizione, costo })         
 
        }
        }
    })
}}

