import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private dataSource: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  data: Observable<any> = this.dataSource.asObservable();


  
  private dataSource2: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  data2: Observable<any> = this.dataSource2.asObservable();

  constructor() { }
  sendData(data: string) {
    this.dataSource.next(data);
  }
  sendData2(data: string) {
    this.dataSource2.next(data);
  }
}
