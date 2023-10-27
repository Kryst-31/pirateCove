import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MenuShoppingComponent } from './components/menu-shopping/menu-shopping.component';
import { MatIconModule } from '@angular/material/icon';
import { BannerModule } from '../banner/banner.module';



@NgModule({
  declarations: [
    MenuComponent,
    MenuItemComponent,
    MenuShoppingComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatIconModule,
    BannerModule
  ]
})
export class MenuModule { }
