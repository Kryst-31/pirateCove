import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DungeonDisplayComponent } from './components/dungeon-display/dungeon-display.component';

const routes: Routes = [
  {path: "", component: DungeonDisplayComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DungeonDisplayRoutingModule { }