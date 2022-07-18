import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {

 

  type_snow : any = []
  show1: boolean = false;
  show2: boolean = false;
  show3: boolean = false;
  show4!: boolean;
  show5!: boolean;

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.getData()
  }

  arrayRemove(arr : any , value : any) { 
    
    return arr.filter(function(ele : any){ 
        return ele != value; 
    });
}


sendNewData(data: any) {
  this.dataService.sendData2(data);
}

  checkCheckBoxvalue1(event : any ){
   if (event.target.checked){
    console.log(event.target.value)
   if (!this.type_snow.includes(event.target.value)){
    this.type_snow.push(event.target.value)
   } 
   }
   else {
    if (this.type_snow.includes(event.target.value)){
     this.type_snow = this.arrayRemove(this.type_snow,event.target.value)
     }
 
   }

  
   console.log(this.type_snow)
   this.sendNewData(this.type_snow)
   this.getData()

  }

getData(){
  this.dataService.data.subscribe(response => {
    console.log(response);  // you will receive the data from sender component here.
     this.type_snow = []
    this.checkShow(response)
  });
}






  checkShow (e : any ){
    if (e == 'touring-back-mountain'){
      this.show1 = true
    }
    else {
     this.show1 = false
    }
    if (e == 'touring-front-mountain'){
      this.show2 = true
    }
    else {
     this.show2 = false
    }
    if (e == 'touring-race'){
      this.show3 = true
    }
    else {
     this.show3 = false
    }
    if (e == 'touring-mountaineering'){
      this.show4 = true
    }
    else {
      this.show4 = false
    }
    if (e == 'all-mountain'){
      this.show5 = true
    }
    else {
     this.show5 = false
    }
  }


}
