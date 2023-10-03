import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { MenuItemComponent } from './menu/components/menu-item/menu-item.component';
import { DungeonDisplayComponent } from './dungeon-display/dungeon-display.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "menu", component: MenuComponent},
  {path: "menu/:id", component: MenuItemComponent},
  {path: "dungeon-generator", component: DungeonDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
