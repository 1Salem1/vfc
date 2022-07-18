import { Component, OnInit } from '@angular/core';

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


 constructor() { }

 ngOnInit(
  

 ): void {
 }

 
 HeightChanged(e : any ) {
   this.height = e.target.value +" cm"
   this.tr1 = true 
 }


 WeightChanged(e : any ) {
   this.weight = e.target.value + "Kg"
   this.tr2 = true
 }


verif(){
  return this.tr1 && this.tr2
}


}