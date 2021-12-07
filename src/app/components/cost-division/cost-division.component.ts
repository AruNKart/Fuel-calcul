import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-cost-division',
  templateUrl: './cost-division.component.html',
  styleUrls: ['./cost-division.component.css']
})
export class CostDivisionComponent implements OnInit {
@Input() per_head:number=0;
cost:any;
finalValue:any;
  constructor(private _service:ServiceService) { }

  ngOnInit(): void {
    
  }


onFinalCost(){
  this.cost=this._service.cost
    console.log(this.cost)
 this.finalValue =this.cost / this.per_head
}

reset(){
  this.finalValue=""
}


}
