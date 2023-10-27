import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "menu", loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)},
  {path: "dungeon-generator", loadChildren: () => import('./dungeon-display/dungeon-display.module').then(m => m.DungeonDisplayModule)},
  {path: "**", pathMatch: "full", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
