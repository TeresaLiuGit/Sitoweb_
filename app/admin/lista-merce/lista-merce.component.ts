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
  valoriListaMerce:any
  chiave:any
  chiaviValoriListaMerce: any;
  attributi:any
  fine:any


constructor(private database:DatabaseService){}


  ngOnInit(): void {
      this.database.getMerce().subscribe(data=>{
      console.log(data)

      this.listaMerce=data  


        this.valoriListaMerce=(Object.values(this.listaMerce));  
      //  console.log(this.valoriListaMerce)

        for(this.chiave in this.listaMerce) {
          if(this.listaMerce.hasOwnProperty(this.chiave)) {
          this.chiaviValoriListaMerce = this.listaMerce[this.chiave];    
          this.fine=((Object.entries(this.chiaviValoriListaMerce)))
          console.log('ID:'+this.chiave+' VALORI:'+this.fine)

          }
            

          }

        

    })
    
  
}}

