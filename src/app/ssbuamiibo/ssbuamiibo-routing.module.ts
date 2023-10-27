import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SSBUAmiiboHomeComponent } from './components/ssbuamiibo-home/ssbuamiibo-home.component';

const routes: Routes = [
  {path: "", component: SSBUAmiiboHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SSBUAmiiboRoutingModule { }
