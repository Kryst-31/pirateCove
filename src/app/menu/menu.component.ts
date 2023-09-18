import { Component } from '@angular/core';
import { recipe } from './models/recipeModels/recipe';
import { ItemListService } from './services/item-list.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  items: recipe[] = []

  constructor(private itemListService: ItemListService) {
    this.getMenuItems();
  }

  private getMenuItems() {
    this.items = this.itemListService.recipeList
  }

}
