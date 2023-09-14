import { Component } from '@angular/core';
import { recipe } from './models/recipeModels/recipe';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  items: recipe[] = []

  constructor() {
    this.generateMenuItems();
  }

  private generateMenuItems() {
    let spaghetti: recipe = {
      name: "Spaghetti",
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

    this.items.push(spaghetti);
    this.items.push(spaghetti);
    this.items.push(spaghetti);
  }

}
