import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { DatabaseService } from 'src/app/servizi/database.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-merce',
  templateUrl: './merce.component.html',
  styleUrls: ['./merce.component.css']
})



export class MerceComponent {

  nome:string | undefined 
  descrizione:string | any
  costo:number | any

  constructor(private database:DatabaseService){}


  















  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [...ELEMENT_DATA];



  @ViewChild(MatTable) table: MatTable<PeriodicElement> | any;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();


    //this.database.insertMerce('https://webliu-dca79-default-rtdb.europe-west1.firebasedatabase.app/utente.json',
    //{this.nome, this.descrizione, this.costo}).subscribe((data)=>{
      //console.log(data)
    //})
  
  
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
}



