import { Injectable } from '@angular/core';
import { recipe } from '../models/recipeModels/recipe';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  cart: Map<string, number> = new Map<string, number>()
  itemObservable = new Subject<any>();

  constructor() { }

  public addToCart(item: recipe) {
    let amount = this.cart.get(item.name)
    if (amount) {
      amount += 1;
      this.cart.set(item.name, amount);
    } else {
      this.cart.set(item.name, 1)
    }
    this.itemObservable.next(item)
  }

  public removeItem(name: string) {
    let amount = this.cart.get(name)
    switch(amount) {
      case undefined:
        break;
      case 1:
        this.cart.delete(name);
        break
      default:
        this.cart.set(name, amount - 1)
        console.log("default")
    }
    
    this.itemObservable.next(name)
  }
}
