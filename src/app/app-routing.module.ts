import { AppComponent } from './app.component';
import { WeekThreePageTwoComponent } from './week-three/pages/week-three-page-two/week-three-page-two.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeekTwoComponent } from './week-two/week-two.component';
import { WeekThreeComponent } from './week-three/week-three.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: WeekThreeComponent },
  { path: 'week-two', component: WeekTwoComponent },
  { path: 'week-three', component: WeekThreeComponent },
  { path: 'week-three-page-two', component: WeekThreePageTwoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
