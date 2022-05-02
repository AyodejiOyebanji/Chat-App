import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegStepOneComponent } from './reg-step-one/reg-step-one.component';
import { RegStepTwoComponent } from './reg-step-two/reg-step-two.component';
import { SignupComponent } from './signup/signup.component';
import { StepThreeComponent } from './step-three/step-three.component';

const routes: Routes = [

  {path:"", component:LandingPageComponent},
  {path:"signup", component:SignupComponent},
  {path: "stepone", component:RegStepOneComponent},
  {path: "steptwo", component:RegStepTwoComponent},
  {path: "stepthree", component:StepThreeComponent},
  {path:"dashboard", component:DashboardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
