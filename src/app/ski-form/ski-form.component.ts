import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ski-form',
  templateUrl: './ski-form.component.html',
  styleUrls: ['./ski-form.component.scss']
})
export class SkiFormComponent implements OnInit {

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