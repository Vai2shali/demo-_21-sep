import { Component, OnInit, Input } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-book-stepper',
  templateUrl: './book-stepper.component.html',
  styleUrls: ['./book-stepper.component.css'],
  providers: [{ provide: CdkStepper, useExisting: BookStepperComponent }],
})
export class BookStepperComponent extends CdkStepper {
  @Input()
  activeClass = '';//'active';

  @Input()
  stepClass = 'checked';

  myJson:any=JSON;

  isNextButtonHidden() {
    return !(this.steps.length === this.selectedIndex + 1);
    
  }
}