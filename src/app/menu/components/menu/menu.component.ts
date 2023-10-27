import { Component } from '@angular/core';
import { recipe } from '../../models/recipeModels/recipe';
import { ItemListService } from '../../services/item-list.service';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items: recipe[] = []

  constructor(private itemListService: ItemListService, private shoppingListService: ShoppingListService) {
    this.getMenuItems();
  }

  private getMenuItems() {
    this.items = this.itemListService.recipeList
  }

  public addToCart(item: recipe) {
    this.shoppingListService.addToCart(item)
  }
}
