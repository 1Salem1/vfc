import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {
 check : any 
 type_terrain : any 
 tr : any 
  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
  }


    
   arrayRemove(arr : any , value : any) { 
    
    return arr.filter(function(ele : any){ 
        return ele != value; 
    });
}

sendNewData(data: any) {
  this.dataService.sendData4(data);
}

  checkCheckBoxvalue(event : any ){
   if (event.target.checked){
    this.tr = true ;
      console.log(event.target.value)
 }
 else {
  this.tr = false ;
 }
 this.sendNewData(event.target.value)
  }
  
  
  


}
