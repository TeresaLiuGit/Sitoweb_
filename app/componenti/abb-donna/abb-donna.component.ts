import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servizi/database.service';

@Component({
  selector: 'app-abb-donna',
  templateUrl: './abb-donna.component.html',
  styleUrls: ['./abb-donna.component.css']
})
export class AbbDonnaComponent implements OnInit{

  listaMerce: {}[] | any;
  chiave: any;
  valori: any;
  array: any;
  left: any;
  right: any;
  middle: any;
  
  constructor(private database: DatabaseService) {}
  
  ngOnInit(): void {
    this.database.getMerceDonna().subscribe(data => {
      console.log(data);
  
      this.listaMerce = data;
      this.array = [];
  
      // Iterate over the array and push elements into this.array
      Object.keys(this.listaMerce).forEach(chiave => {

        const uid= Object.keys(data)
        const valori = this.listaMerce[chiave];
        const titolo = valori.titolo;
        const descrizione = valori.descrizione;
        const costo = valori.costo;
  
        this.array.push({ uid , titolo, descrizione, costo });
      });
  
      // Calculate the middle index after pushing elements into this.array
      this.middle = Math.floor(this.array.length / 2);
      this.left = this.array.slice(0, this.middle);
      this.right = this.array.slice(this.middle);
    });
  }
}  