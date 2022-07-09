import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {

  height : any = "Slide me";
  weight : any = "Slide me";


 constructor() { }

 ngOnInit(
  

 ): void {
 }

 
 HeightChanged(e : any ) {
   this.height = e.target.value +" cm"
 }


 WeightChanged(e : any ) {
   this.weight = e.target.value + "Kg"
 }


}