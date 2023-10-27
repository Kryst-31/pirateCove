import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SSBUAmiiboRoutingModule } from './ssbuamiibo-routing.module';
import { SSBUAmiiboHomeComponent } from './components/ssbuamiibo-home/ssbuamiibo-home.component';


@NgModule({
  declarations: [
    SSBUAmiiboHomeComponent
  ],
  imports: [
    CommonModule,
    SSBUAmiiboRoutingModule
  ]
})
export class SSBUAmiiboModule { }
