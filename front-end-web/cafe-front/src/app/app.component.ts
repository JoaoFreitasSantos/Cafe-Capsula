import { Http } from '@angular/http';
import { CoffeCapsule } from './../Cafe';

import { CafeService } from './cafe.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: "app";
  capsulas: Array<CoffeCapsule>;
  capsula: CoffeCapsule;
  //marca: string = "";
  //sabor: string = "";
  constructor(public cafeService: CafeService){
  }


  ngOnInit() {
    this.getAll();
    this.capsula = new CoffeCapsule;
  }

  getAll(){
    return this.cafeService.pegaTodasCapsulas().subscribe(qualquer => {
      this.capsulas = qualquer.json();
    });
  }

  removeCapsula(capsula){
    this.capsula = capsula;
    this.cafeService.deletaCapsula(capsula).subscribe(saida => {
      this.capsulas.slice(capsula,1);
      //this.capsulas.slice(capsula);
      this.getAll();
    });
//    this.getAll();
  }

  addCapsule(){
    //this.capsula = new CoffeCapsule();
    this.cafeService.criaCapsulas(this.capsula).subscribe(saida => {
      this.capsulas.push(<CoffeCapsule>saida);
      this.capsula = new CoffeCapsule();
      this.getAll();
    });
    console.log(this.capsula);
    this.getAll();
  }

  

}
