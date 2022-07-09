import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkiFormComponent } from './ski-form/ski-form.component';
import { TopComponent } from './top/top.component';
import { Step1Component } from './ski-form/step1/step1.component';
import { Step2Component } from './ski-form/step2/step2.component';
import { Step3Component } from './ski-form/step3/step3.component';
import { Step4Component } from './ski-form/step4/step4.component';
import { Step5Component } from './ski-form/step5/step5.component';
import { Step6Component } from './ski-form/step6/step6.component';
import { ChooseYourGearComponent } from './choose-your-gear/choose-your-gear.component';

@NgModule({
  declarations: [
    AppComponent,
    SkiFormComponent,
    TopComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    Step6Component,
    ChooseYourGearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
