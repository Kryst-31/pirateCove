import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ItemListService } from '../../services/item-list.service';
import { recipe } from '../../models/recipeModels/recipe';
import { ActivatedRoute } from '@angular/router';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements AfterViewInit {

  recipeItem: recipe | undefined = undefined

  constructor(
    private itemlistService: ItemListService,
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    ) {

  }

  ngAfterViewInit(): void {
    this.getItem()
  }

  async getItem() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.recipeItem = await this.itemlistService.getRecipeItem(id);
  }

  addToCart(): void {
    if (this.recipeItem) this.shoppingListService.addToCart(this.recipeItem)
  }

}
