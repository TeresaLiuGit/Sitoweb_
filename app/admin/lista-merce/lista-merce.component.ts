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
  
  constructor(private database:DatabaseService, private admin:AdminComponent, private merce:MerceComponent){}

  ngOnInit(): void {
    this.database.getMerce().subscribe(data=>{
      console.log(data)
      this.listaMerce= data
      })
    }
  
  
  
}