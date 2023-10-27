import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MenuComponent } from './components/menu/menu.component';


const routes: Routes = [
  {path: "", component: MenuComponent},
  {path: ":id", component: MenuItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }