import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private common:CommonService,
    private renderer: Renderer2) { }
  currentSection = "";
  name = "Tulip Skin Clinic"
  color1="#E01CA4"
  degree1="0%"
  color2="#53FDCE"
  degree2="30%"
  color3="#51ECA5"
  degree3="100%" 
  degree = "135deg"
  opacity1="0.55"
  //    linear-gradient(135deg, #2f1ce0 0%, #53a0fd 30%, #51eca5 100%)

  services:any[] = [
    {header:"Chemical Peeling",details:"To take care of your skin",image:"./assets/images/banner/why-choose.png"},
    {header:"Chemical Peeling",details:"To take care of your skin",image:"./assets/images/icon/alarm.png"},
    {header:"Chemical Peeling",details:"To take care of your skin",image:"./assets/images/icon/phone-device-64.png"},
    {header:"Chemical Peeling",details:"To take care of your skin",image:"./assets/images/icon/piggy-bank.png"}
  ];
  aboutUs:any[] = [
    {header:"Dr. Smita Patil, MBBS, DAV, with 15+ years of experience has cured more than 5000+ patients in last 5 years successfully."
        ,image:"./assets/images/aboutus/kapild.jpeg"}
    ,{header:"Dr. Smita Patil, MBBS, DAV, with 15+ years of experience has cured more than 5000+ patients in last 5 years successfully."
        ,image:"./assets/images/aboutus/kapil2.jpeg"}
  ];
  phone = "918080924768";
  WA_CONTACT_URL = ""
  TG_CONTACT_URL = ""
  WA_URL = "https://wa.me/send";//?phone="918080924768&text=I%20am%20interested%20to%20know%20more%20about%20iDigitalClinic"
  TG_URL = "https://telegram.me/";
  TG_ID = "idigitalclinic";
  contactMessage = "I am interested to know more";
  ngOnInit(): void {
    this.WA_CONTACT_URL = this.WA_URL+"?phone="+this.phone+"&text="+window.encodeURIComponent(this.contactMessage);
    this.TG_CONTACT_URL = this.TG_URL+this.TG_ID;
    this.renderer.listen(window.document.getElementById('services'), 'scroll', (event) => {
      // Do something with 'event'
      console.log(window.document.getElementById('services').scrollTop);
    });
  }

  test(event){
    console.log("event-->",event,"-----source=");
  }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
    console.log("current section..",this.currentSection);
    this.common.activeSectionLoaded(sectionId);

  }
}
