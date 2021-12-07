import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-trip-type',
  templateUrl: './trip-type.component.html',
  styleUrls: ['./trip-type.component.css']
})
export class TripTypeComponent implements OnInit {
  get:any;
  num:any;
  FuelPrice:number=0;
  Person:number=0;
  constructor() { }

  ngOnInit(): void {
    
  }

  reset(){
    this.FuelPrice=0;
    
    this.Person=0;
    this.get=""
    this.num=""
  }
}
