import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CateringComponent } from './catering/catering.component';
import { BookingComponent } from './booking/booking.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

// Routes for the components and views
const routes: Routes = [
  { path: 'catering', component: CateringComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
