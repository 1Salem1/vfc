import { Component, OnInit } from '@angular/core';
import { skis } from 'src/assets/jsons/skis';
import { DataServiceService } from '../data-service.service';
import { getDatabase, ref, set } from "firebase/database";




@Component({
  selector: 'app-ski-result',
  templateUrl: './ski-result.component.html',
  styleUrls: ['./ski-result.component.css']
})
export class SkiResultComponent implements OnInit {


database = getDatabase();
height : any = 185
weight : any  = 90
type_snow : any  = 'slush'
terrain_type : any  = 'touring-race'
ski_level : any = 'pro-guide'
ar : any 


  constructor(private dataService : DataServiceService ) { 

    


  }

  ngOnInit(): void {
    this.getHeight()
    this.getWeight()
    this.getTerrainType()
    this.getSnowType()
    this.CheckSki()
    this.getSkiLevel()
    
    if(this.ar.length != 0){
      this.writeUserData()
    }
    
  }

  getHeight(){
    this.dataService.height.subscribe(response => {
    
    
     if(response){
      this.height = response
      console.log(response)
    }
    });
  }
  getWeight(){
    this.dataService.weight.subscribe(response => {

  
      if(response){
        this.weight = response
        console.log(response)
      }
    });
  }
  getTerrainType(){
    this.dataService.terrain_type.subscribe(response => {
 

      
      if(response){
        this.terrain_type = response
        console.log(response)
      }
    });
  }
  getSnowType(){
    this.dataService.type_snow.subscribe(response => {
 

     
      if(response){
        this.type_snow = response
        console.log(response)
      }
    });
  }

  getSkiLevel(){
    this.dataService.ski_level.subscribe(response => {
 


      if(response){
        this.ski_level = response
        console.log(response)
      }
     
     
    });
  }


   writeUserData() {

    

    const db = getDatabase();
    set(ref(db, 'Ski-selectors/' + Date.now()), {
      todayDate : new Date().toISOString().slice(0, 10),
      recomanded_ski1 : this.ar[0],
      recomanded_ski2 : this.ar[1],
      recomanded_ski3 : this.ar[2]

    }).then(()=>{
      console.log("OK")
    });
  }






CheckSki(){



  //console.log(ski)
 /*  if (()    ){
       console.log(ski)
  } */


    this.ar =  skis.filter((ski)=>{
    return (this.height >= ski.min_height && this.height <= ski.max_height) && (this.weight >= ski.min_weight && this.weight <= ski.max_weight)
  })


  if (this.ar.length === 0) 
  { 
    this.ar =  skis.filter((ski)=>{
      return (this.height >= ski.min_height && this.height <= ski.max_height) 
    })
     
  }


    this.ar = this.ar.filter((ski : any )=>{
    return (ski.ski_level.includes(this.ski_level))
  })

   this.ar = this.ar.filter((ski : any )=>{
    return (ski.playground.includes(this.terrain_type))
  }) 



  if (this.ar.length === 0) 
  { 
    this.ar =  skis.filter((ski)=>{
      return (this.height >= ski.min_height && this.height <= ski.max_height  && ski.playground.includes(this.terrain_type ) )
    })
     
  } 







   if (this.ar.length === 0) 
  { 
    this.ar =  skis.filter((ski)=>{
      return (this.height >= ski.min_height && this.height <= ski.max_height &&  ski.snow.includes(this.type_snow ) )
    })
     
  } 




 this.ar = this.ar.filter((ski : any)=>{
    return (ski.snow.includes(this.type_snow))
  }) 


 

  console.log(this.ar)





}





  

}
