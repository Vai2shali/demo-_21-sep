import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatButtonModule } from '@angular/material/button'
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ScrollSpyDirective } from './directive/scroll-spy.directive'
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { BookComponent } from './home/book/book.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { BookStepperComponent } from './home/utility/stepper/book-stepper/book-stepper.component';
 
const ngWizardConfig: NgWizardConfig = {
  theme: THEME.arrows
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ScrollSpyDirective,
    BookComponent,
    BookStepperComponent,
  ],
  entryComponents :[
    BookComponent,
    BookStepperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatStepperModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatIconModule,
    MatCardModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgbModule,
    NgWizardModule,
    FontAwesomeModule,
    CdkStepperModule,
    NgbDatepickerModule,
     

         
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
