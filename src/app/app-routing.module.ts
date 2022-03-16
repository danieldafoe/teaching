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
import { WeekSixComponent } from './week-six/week-six.component';
import { WeekSevenComponent } from './week-seven/week-seven.component';
import { LabTwoComponent } from './lab-two/lab-two.component';
import { WeekNineComponent } from './week-nine/week-nine.component';
import { AssignmentTwoComponent } from './assignment-two/assignment-two.component';
import { WeekTenComponent } from './week-ten/week-ten.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: WeekTenComponent },
  { path: 'assignment-one', component: AssignmentOneComponent },
  { path: 'assignment-two', component: AssignmentTwoComponent },
  { path: 'lab-one', component: LabOneComponent },
  { path: 'lab-two', component: LabTwoComponent },
  { path: 'week-two', component: WeekTwoComponent },
  { path: 'week-three', component: WeekThreeComponent },
  { path: 'week-three-page-two', component: WeekThreePageTwoComponent },
  { path: 'week-four', component: WeekFourComponent },
  { path: 'week-five', component: WeekFiveComponent },
  { path: 'week-six', component: WeekSixComponent },
  { path: 'week-seven', component: WeekSevenComponent },
  { path: 'week-nine', component: WeekNineComponent },
  { path: 'week-ten', component: WeekTenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
