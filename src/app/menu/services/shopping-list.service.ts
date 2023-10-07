import { Injectable } from '@angular/core';
import { recipe } from '../models/recipeModels/recipe';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  itemsInCart: recipe[] = [];
  itemObservable = new Subject<recipe>();

  constructor() { }

  addToCart(item: recipe) {
    this.itemsInCart.push(item);
    this.itemObservable.next(item);
  }
}
