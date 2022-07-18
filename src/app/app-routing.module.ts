import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseYourGearComponent } from './choose-your-gear/choose-your-gear.component';
import { SkiFormComponent } from './ski-form/ski-form.component';
import { SplitFormComponent } from './split-form/split-form.component';
import { HomeComponent } from './home/home.component';
import { SkiResultComponent } from './ski-result/ski-result.component';




const routes: Routes = [
  { path: 'choose-your-gear', component: ChooseYourGearComponent },
  { path: 'recommanded-skis', component: SkiResultComponent },
  { path: 'ski', component: SkiFormComponent },
  { path: 'splitboard', component: SplitFormComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
