import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SSBUAmiiboRoutingModule } from './ssbuamiibo-routing.module';
import { SSBUAmiiboHomeComponent } from './components/ssbuamiibo-home/ssbuamiibo-home.component';
import { BannerModule } from '../banner/banner.module';
import { RegisterAmiiboComponent } from './components/register-amiibo/register-amiibo.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SSBUAmiiboHomeComponent,
    RegisterAmiiboComponent
  ],
  imports: [
    CommonModule,
    BannerModule,
    SSBUAmiiboRoutingModule,
    ReactiveFormsModule
  ]
})
export class SSBUAmiiboModule { }
