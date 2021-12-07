import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.css']
})
export class DistanceComponent implements OnInit {
@Input() distance:any;
@Input() value:any;
@Input() Fuel: number=0;
valueNum: number=0.00;
fuelUsed: any;
cost: number=0;
  constructor(private _costDivision:ServiceService) { }

  ngOnInit(): void {
  }

onDistanceChange()
{
  console.log(this.valueNum);
  this.fuelUsed = this.valueNum/ this.value;
}
onCost(){
  console.log(this.fuelUsed)
this.cost=this.fuelUsed*this.Fuel;
this._costDivision.cost =this.cost
}

}
