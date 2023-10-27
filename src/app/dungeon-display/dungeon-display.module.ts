import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DungeonDisplayComponent } from './components/dungeon-display/dungeon-display.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BannerModule } from '../banner/banner.module';
import { DungeonDisplayRoutingModule } from './dungeon-display-routing.module';



@NgModule({
  declarations: [
    DungeonDisplayComponent
  ],
  imports: [
    CommonModule,
    DungeonDisplayRoutingModule,
    BannerModule,
    ReactiveFormsModule
  ]
})
export class DungeonDisplayModule { }
