import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  //public activeElement = "home";

  private activeSectionCheck = new Subject<object>();
  public activeSectionCheckEvent = this.activeSectionCheck.asObservable();
  
  public activeSectionLoaded(section){
    console.log("Subscription check loaded..")
    this.activeSectionCheck.next({name:section});
  }
}
