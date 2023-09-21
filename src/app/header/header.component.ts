import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2) { }
  header:string = 'header-black'
  public isCollapsed = true;
  currentSection = 'home';
  ngOnInit(): void {
    this.renderer.listen(window.document.getElementById('services'), 'scroll', (event) => {
      // Do something with 'event'
      console.log(window.document.getElementById('services').scrollTop);
    });
  }

  testIt(){
    console.log("About event triggered");
  }

  @HostListener('window:scroll', ['$event']) 
    scrollHandler(event) {
      //console.log("Scroll event..",event);
      //const scrollTop = event.target.scrollTop;
      //const parentOffset = event.target.offsetTop;
      //console.debug("In scrolling...",scrollTop,parentOffset)
      //console.debug("scrolltop..."+this.currentSection)
      //window.document.getElementById("about").addEventListener("focusin",this.testIt);      
      //console.debug("offettop..",window.document.getElementById("pricing").offsetTop)
     if(window.document.documentElement.scrollTop > 70 ){
      this.header = "header-white" //css class from main.css
     }else{
       this.header = "header-black";
     }
    }
}
