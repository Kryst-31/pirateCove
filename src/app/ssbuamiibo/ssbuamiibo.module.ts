import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SSBUAmiiboRoutingModule } from './ssbuamiibo-routing.module';
import { SSBUAmiiboHomeComponent } from './components/ssbuamiibo-home/ssbuamiibo-home.component';
import { BannerModule } from '../banner/banner.module';


@NgModule({
  declarations: [
    SSBUAmiiboHomeComponent
  ],
  imports: [
    CommonModule,
    BannerModule,
    SSBUAmiiboRoutingModule
  ]
})
export class SSBUAmiiboModule { }
