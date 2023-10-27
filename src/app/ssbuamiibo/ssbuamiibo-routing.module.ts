import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SSBUAmiiboHomeComponent } from './components/ssbuamiibo-home/ssbuamiibo-home.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: SSBUAmiiboHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SSBUAmiiboRoutingModule { }
