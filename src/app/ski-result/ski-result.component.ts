import { Component, OnInit } from '@angular/core';
import { skis } from 'src/assets/jsons/skis';
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-ski-result',
  templateUrl: './ski-result.component.html',
  styleUrls: ['./ski-result.component.css']
})
export class SkiResultComponent implements OnInit {

height : any = 185
weight : any  = 90
type_snow : any  = 0
terrain_type : any  = 0



  constructor(private dataService : DataServiceService) { }

  ngOnInit(): void {
    this.getHeight()
    this.getWeight()
    this.getTerrainType()
    this.getSnowType()
    this.CheckSki()
  }

  getHeight(){
    this.dataService.height.subscribe(response => {
    
     console.log(response)
     
    });
  }
  getWeight(){
    this.dataService.weight.subscribe(response => {
      console.log(response)
      
    });
  }
  getTerrainType(){
    this.dataService.terrain_type.subscribe(response => {
 
      console.log(response)
     
    });
  }
  getSnowType(){
    this.dataService.type_snow.subscribe(response => {
 
      console.log(response)
     
    });
  }









CheckSki(){


for(var ski of skis){
  //console.log(ski)
  if ((this.height >= ski.min_height && this.height <= ski.max_height) && (this.weight >= ski.min_weight && this.weight <= ski.max_weight)    ){
       console.log(ski)
  }


}

}





  

}
