import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/servizi/database.service';

@Component({
  selector: 'app-ferramenta',
  templateUrl: './ferramenta.component.html',
  styleUrls: ['./ferramenta.component.css']
})
export class FerramentaComponent {
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

  constructor(private database: DatabaseService) {}
  
  ngOnInit(): void {
    this.database.getFerramenta().subscribe(data => {
      console.log(data);
  
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

        console.log('Part 1:', this.part1);
        console.log('Part 2:', this.part2);
        console.log('Part 3:', this.part3);
        console.log('Part 4:', this.part4);

        //PER OTTENERE GLI UID DEGLI ELEMENTI NELLE 4 COLONNE
        this.partUid=Object.keys(data)

        this.uidPart1= this.partUid.slice(0, partSize);
        this.uidPart2= this.partUid.slice(partSize, 2 * partSize);
        this.uidPart3= this.partUid.slice(2*partSize, 3 * partSize);
        this.uidPart4= this.partUid.slice(3 * partSize);

        console.log('uid 1:',this.uidPart1)
        console.log('uid 2:',this.uidPart2)
        console.log('uid 3:',this.uidPart3)
        console.log('uid 4:',this.uidPart4)

      });
  }


  aggiungi(uid:string, descrizione:string, costo:number) {
          this.database.fillOrdine(uid, descrizione, costo);
          console.log('uid',uid, 'descrizione', descrizione, 'costo', costo)
          
  }
}