import { Component } from '@angular/core';
import { ItemListService } from '../../services/item-list.service';
import { recipe } from '../../models/recipeModels/recipe';
import { ActivatedRoute } from '@angular/router';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {

  recipeItem: recipe | undefined = this.getItem()

  constructor(
    private itemlistService: ItemListService,
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    ) {

  }

  getItem(): recipe {
    const id = String(this.route.snapshot.paramMap.get('id'));
    return this.itemlistService.getRecipeItem(id);
  }

  addToCart(): void {
    if (this.recipeItem) this.shoppingListService.addToCart(this.recipeItem)
  }

}
