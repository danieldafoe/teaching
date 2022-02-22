import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './week-two/container/container.component';
import { PresentationalComponent } from './week-two/presentational/presentational.component';
import { WeekTwoComponent } from './week-two/week-two.component';
import { WeekThreeComponent } from './week-three/week-three.component';
import { WeekThreePageTwoComponent } from './week-three/pages/week-three-page-two/week-three-page-two.component';
import { LabOneComponent } from './week-three/lab-one/lab-one.component';
import { WeekFourComponent } from './week-four/week-four.component';
import { AccountBalanceComponent } from './week-four/account-balance/account-balance.component';
import { AccountDetailsComponent } from './week-four/account-details/account-details.component';
import { WeekFiveComponent } from './week-five/week-five.component';
import { AssignmentOneComponent } from './assignment-one/assignment-one.component';
import { WeekSixComponent } from './week-six/week-six.component';
import { WeekSevenComponent } from './week-seven/week-seven.component';
import { LabTwoComponent } from './lab-two/lab-two.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    LabOneComponent,
    PresentationalComponent,
    WeekTwoComponent,
    WeekThreeComponent,
    WeekThreePageTwoComponent,
    WeekFourComponent,
    AccountBalanceComponent,
    AccountDetailsComponent,
    WeekFiveComponent,
    AssignmentOneComponent,
    WeekSixComponent,
    WeekSevenComponent,
    LabTwoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
