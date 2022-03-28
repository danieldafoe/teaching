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
import { WeekNineComponent } from './week-nine/week-nine.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AssignmentTwoComponent } from './assignment-two/assignment-two.component';
import { WeekTenComponent } from './week-ten/week-ten.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreDataEffects } from './store/effects/storage.effects';
import { WeekElevenComponent } from './week-eleven/week-eleven.component';
import { ReactiveFormsModule } from '@angular/forms';

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
    LabTwoComponent,
    WeekNineComponent,
    AssignmentTwoComponent,
    WeekTenComponent,
    WeekElevenComponent
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
    // The forRoot() method accepts an object that gives a name
    // for the root Store and then the main reducer that will
    // handle all changes to the Store.
    StoreModule.forRoot({ desn3037: appReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    //
    EffectsModule.forRoot([StoreDataEffects]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
