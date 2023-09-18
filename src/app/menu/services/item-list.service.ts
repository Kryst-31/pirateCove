import { Injectable } from '@angular/core';
import { recipe } from '../models/recipeModels/recipe';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {

  recipeList: recipe [] = []
  recipeMap = new Map<string, recipe>

  constructor() {
    this.dummryRecipe()
  }

  getRecipeItem(id: string): recipe {
    return this.recipeMap.get(id)!
  }

  dummryRecipe() { 
    let spaghetti: recipe = {
      name: "Spaghetti",
      cookTime: "30 Minutes",
      summary: "An easy to make spaghetti with spicy sausage and mushroom spaghetti sauce!",
      ingredients: [
        "Spaghetti Noodles",
        "Spaghetti Sauce",
        "Bob Evans Sausage"
      ],
      instructions: [
        "Heat a pot of water to a boil",
        "Add noodles and cook as instructed on box",
        "While cooking the noodles, brown the Bob Evans sausage",
        "Once the sausage and noodles are done cooking, add both contents to the same pot and add the spaghetti sauce!"
      ],
      image: "assets/MenuImages/Spaghetti.jpg",
      id: "spaghetti"
    }

    this.recipeList = [spaghetti]
    this.recipeMap.set(spaghetti.id, spaghetti)
  }

}
