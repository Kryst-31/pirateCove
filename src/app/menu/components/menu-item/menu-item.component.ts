import { Component } from '@angular/core';
import { ItemListService } from '../../services/item-list.service';
import { recipe } from '../../models/recipeModels/recipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {

  recipeItem: recipe | undefined = undefined

  constructor(private itemlistService: ItemListService, private route: ActivatedRoute) {
    this.getItem()
  }

  getItem(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.recipeItem = this.itemlistService.getRecipeItem(id);
  }

}
