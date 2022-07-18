
import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {

 
  hidden : any  = null;
  type_snow : any = null
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
  this.dataService.sendDataT(data);
}

  checkCheckBoxvalue1(event : any ){

    this.checkchecked(event.target.value)

    if (event.target.checked){
 
      this.type_snow = event.target.value
      console.log(this.type_snow)
     } 
     
  
  
     
   
    

    this.getData()  
  // console.log(this.type_snow)
  this.sendNewData(this.type_snow)

  }

getData(){
  this.dataService.terrain_type.subscribe(response => {
//  console.log(response);  // you will receive the data from sender component here.
  
    this.checkShow(response)
   
  });
}



checkchecked( x : any ){
  if(x){
    this.hidden = true
  }
  else {
    this.hidden = false
  }
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
