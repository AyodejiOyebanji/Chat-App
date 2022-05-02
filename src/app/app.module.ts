import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupComponent } from './signup/signup.component';
import { UserServiceService } from './user-service.service';
import { RegStepOneComponent } from './reg-step-one/reg-step-one.component';
import { RegStepTwoComponent } from './reg-step-two/reg-step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignupComponent,
    RegStepOneComponent,
    RegStepTwoComponent,
    StepThreeComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
