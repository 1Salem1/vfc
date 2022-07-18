import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  ski_level = new FormControl('');
  contentEditable: boolean = false ;


  constructor(private  dataService: DataServiceService) { }

  ngOnInit(): void {
  }


  toggleEditable(event : any) {
    if ( event.target.checked ) {
        this.contentEditable = true;
        //console.log(event.target.value)
        this.sendSkiLevel(event.target.value)
   }
}

sendSkiLevel(data: any) {
  this.dataService.sendData3(data);
}


}
