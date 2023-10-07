import { Component } from '@angular/core';
import { ShoppingListService } from '../../services/shopping-list.service';
import { recipe } from '../../models/recipeModels/recipe';

@Component({
  selector: 'app-menu-shopping',
  templateUrl: './menu-shopping.component.html',
  styleUrls: ['./menu-shopping.component.css']
})
export class MenuShoppingComponent {

  itemsInCart: recipe [] = [];

  constructor(private shoppingListService: ShoppingListService) {
    this.shoppingListService.itemObservable.subscribe((item) => this.itemsInCart = this.shoppingListService.itemsInCart)
    this.itemsInCart = this.shoppingListService.itemsInCart
  }



}
