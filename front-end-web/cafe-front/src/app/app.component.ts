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
  constructor(public cafeService: CafeService){
    
  }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    return this.cafeService.pegaTodasCapsulas().subscribe(qualquer => {
      this.capsulas = qualquer.json();
    });
  }

  addCapsule(){
    this.cafeService.criaCapsulas(this.capsula);
    this.capsula = new CoffeCapsule;
  }

  removeCapsula(capsula){
    this.cafeService.deletaCapsula(capsula);
  }

}
