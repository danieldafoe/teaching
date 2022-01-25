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
import { ContainerComponent1 } from './week-three/lab-one/container/container.component';
import { PresentationalComponent1 } from './week-three/lab-one/presentational/presentational.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    PresentationalComponent,
    WeekTwoComponent,
    WeekThreeComponent,
    WeekThreePageTwoComponent,
    LabOneComponent,
    ContainerComponent1,
    PresentationalComponent1,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
