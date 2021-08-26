import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { BookingComponent } from './booking/booking.component';
import { BusComponent } from './booking/bus/bus.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { CateringComponent } from './catering/catering.component';
import { WeddingComponent } from './catering/wedding/wedding.component';
import { FuneralComponent } from './catering/funeral/funeral.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    BusComponent,
    AboutUsComponent,
    ContactUsComponent,
    AuthComponent,
    SignupComponent,
    SigninComponent,
    CateringComponent,
    WeddingComponent,
    FuneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
