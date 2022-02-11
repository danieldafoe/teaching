import { AppComponent } from './app.component';
import { WeekThreePageTwoComponent } from './week-three/pages/week-three-page-two/week-three-page-two.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeekTwoComponent } from './week-two/week-two.component';
import { WeekThreeComponent } from './week-three/week-three.component';
import { LabOneComponent } from './week-three/lab-one/lab-one.component';
import { WeekFourComponent } from './week-four/week-four.component';
import { WeekFiveComponent } from './week-five/week-five.component';
import { AssignmentOneComponent } from './assignment-one/assignment-one.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: WeekFiveComponent },
  { path: 'assignment-one', component: AssignmentOneComponent },
  { path: 'lab-one', component: LabOneComponent },
  { path: 'week-two', component: WeekTwoComponent },
  { path: 'week-three', component: WeekThreeComponent },
  { path: 'week-three-page-two', component: WeekThreePageTwoComponent },
  { path: 'week-four', component: WeekFourComponent },
  { path: 'week-five', component: WeekFiveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
