import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servizi/database.service';

@Component({
  selector: 'app-abb-donna',
  templateUrl: './abb-donna.component.html',
  styleUrls: ['./abb-donna.component.css']
})
export class AbbDonnaComponent implements OnInit{

  listaAbbigliamento:[{}] | any
  valoriListaMerce:any
  chiave:any
  chiaviValoriListaMerce: any;
  attributi:any
  fine:any


  constructor(private database:DatabaseService){}


  ngOnInit(): void {
    this.database.getMerceDonna().subscribe((data:any)=>{
    console.log(data)

    this.listaAbbigliamento=data

    this.valoriListaMerce=(Object.values(this.listaAbbigliamento));  
    //  console.log(this.valoriListaMerce)

      for(this.chiave in this.listaAbbigliamento) {
        if(this.listaAbbigliamento.hasOwnProperty(this.chiave)) {
        this.chiaviValoriListaMerce = this.listaAbbigliamento[this.chiave];    
        this.fine=((Object.entries(this.chiaviValoriListaMerce)))
        console.log('ID:'+this.chiave+' VALORI:'+this.fine)

        }
          

        }

      

  })
  

}}

