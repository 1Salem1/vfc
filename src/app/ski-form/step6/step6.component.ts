import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.css']
})
export class Step6Component implements OnInit {


  hidden : any ;
  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
   // this.getData()
  }


  checkCheckBoxvalue1(event : any ){

    this.checkchecked(event.target.value)
  }

  checkchecked( x : any ){
    if(x){
      this.hidden = true
    }
    else {
      this.hidden = false
    }
  } 

  sendNewData(data: any) {
    this.dataService.sendData3(data);
  }
}
