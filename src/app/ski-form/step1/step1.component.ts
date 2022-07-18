import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {

  height : any = "Slide me";
  weight : any = "Slide me";
  tr1 : any = false ;
  tr2 : any = false ;


 constructor (private  dataService: DataServiceService) { }

 ngOnInit(
  

 ): void {
 }

 
 HeightChanged(e : any ) {
   this.height = e.target.value +" cm"
   this.tr1 = true 
   this.sendHeight(e.target.value)
 }


 WeightChanged(e : any ) {
   this.weight = e.target.value + "Kg"
   this.tr2 = true
   this.sendWeight(e.target.value)
 }


verif(){
  return this.tr1 && this.tr2
}


sendHeight(data: any) {
  this.dataService.sendData(data);
}


sendWeight(data: any) {
  this.dataService.sendData2(data);
}



}
