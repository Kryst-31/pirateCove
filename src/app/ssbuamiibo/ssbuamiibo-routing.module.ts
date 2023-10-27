import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SSBUAmiiboHomeComponent } from './components/ssbuamiibo-home/ssbuamiibo-home.component';
import { RegisterAmiiboComponent } from './components/register-amiibo/register-amiibo.component';

const routes: Routes = [
  {path: "", component: SSBUAmiiboHomeComponent},
  {path: "register", component: RegisterAmiiboComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SSBUAmiiboRoutingModule { }
