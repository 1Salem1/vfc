import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseYourGearComponent } from './choose-your-gear/choose-your-gear.component';
import { SkiFormComponent } from './ski-form/ski-form.component';
const routes: Routes = [
  { path: '', component: ChooseYourGearComponent },
  { path: 'ski', component: SkiFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
