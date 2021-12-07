import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripTypeComponent } from './components/trip-type/trip-type.component';
import { DistanceComponent } from './components/distance/distance.component';
import { CostDivisionComponent } from './components/cost-division/cost-division.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './components/services/service.service';


@NgModule({
  declarations: [
    AppComponent,
    TripTypeComponent,
    DistanceComponent,
    CostDivisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
