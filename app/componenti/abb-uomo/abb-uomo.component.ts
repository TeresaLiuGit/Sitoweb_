import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { DatabaseService } from 'src/app/servizi/database.service';

@Component({
  selector: 'app-abb-uomo',
  templateUrl: './abb-uomo.component.html',
  styleUrls: ['./abb-uomo.component.css']
})
export class AbbUomoComponent {
  listaMerce: {}[] | any;
  chiave: any;
  valori: any;
  array: any;
  left: any;
  right: any;
  middle: any;
  
  constructor(private database: DatabaseService) {}
  
  ngOnInit(): void {
    this.database.getMerceUomo().subscribe(data => {
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