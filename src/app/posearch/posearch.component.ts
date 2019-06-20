import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { PurchaseOrder } from '../model/purchaseorder';
import { ResultList,Result } from '../model/resultobj';
@Component({
  selector: 'app-posearch',
  templateUrl: './posearch.component.html',
  styleUrls: ['./posearch.component.scss']
})
export class PosearchComponent implements OnInit {

  resultList: ResultList[];
  result:Result
  ngOnInit() {

  }
  constructor(public booking: BookingService) { }

  poNumber: string;

  
  searchPO() {

    this.booking.getPO(this.poNumber).subscribe(data => {
    //  this.op = JSON.parse(JSON.stringify(result));
    this.result= JSON.parse(JSON.stringify(data));
    this.resultList=this.result.resultList;
     console.log("ResultList"+ this.resultList[0].deliveryDate);
    });
  }

}
