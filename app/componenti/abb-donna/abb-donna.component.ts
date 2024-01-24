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



  part1:any
  part2: any 
  part3: any 
  part4:any 

  partUid:[] | any
  uidPart1:[] | any
  uidPart2:[] | any
  uidPart3:[] | any
  uidPart4:[] | any

  matchingEntry:any
  combinedData:any

  constructor(private database: DatabaseService) {}
  
  ngOnInit(): void {
    this.database.getMerceDonna().subscribe(data => {
      //console.log(data);
  
      this.listaMerce = data;
      this.array = [];

      Object.keys(this.listaMerce).forEach(chiave => {

        const uid= Object.keys(data)
        const valori = this.listaMerce[chiave];
        const titolo = valori.titolo;
        const descrizione = valori.descrizione;
        const costo = valori.costo;
  
        this.array.push({ uid , titolo, descrizione, costo });

      });

        // SI E' DIVISO L'ARRAY CONTENETE IL NUMERO DEI PRODOTTI PER 4
        const partSize = Math.ceil(this.array.length / 4);

        //PER OTTENERE 4 COLONNE
        this.part1 = this.array.slice(0, partSize);
        this.part2 = this.array.slice(partSize, 2 * partSize);
        this.part3 = this.array.slice(2 * partSize, 3 * partSize);
        this.part4 = this.array.slice(3 * partSize);

        //PER OTTENERE GLI UID DEGLI ELEMENTI NELLE 4 COLONNE

        this.partUid=Object.keys(data)  //array di uid

        
        this.uidPart1= this.partUid.slice(0, partSize);
        this.uidPart2= this.partUid.slice(partSize, 2 * partSize);
        this.uidPart3= this.partUid.slice(2*partSize, 3 * partSize);
        this.uidPart4= this.partUid.slice(3 * partSize);

      });
  }


  aggiungi(uid:string, descrizione:string, costo:number) {
    this.database.fillOrdine(uid, descrizione, costo);
    console.log('uid',uid, 'descrizione', descrizione, 'costo', costo)
    
}
}