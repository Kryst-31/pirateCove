import { Injectable } from '@angular/core';
import { recipe } from '../models/recipeModels/recipe';
import { environment } from 'src/environments/environment';
import { initializeApp } from "firebase/app";
import { collection, doc, getFirestore, getDocs, getDoc, QuerySnapshot, DocumentData } from 'firebase/firestore'



@Injectable({
  providedIn: 'root'
})
export class ItemListService {

  recipeList: recipe [] = [];
  recipeMap = new Map<string, recipe>;

  firebaseApp = initializeApp(environment.firebase);
  firestore = getFirestore(this.firebaseApp);
  menuItemsCollection = collection(this.firestore, "menuItems");
  menuItemsQuery: QuerySnapshot | null = null;

  constructor() {
    this.getMenuItems();
  }

  async getMenuItems() {
    this.recipeList = []
    this.menuItemsQuery = await getDocs(this.menuItemsCollection)
    this.menuItemsQuery.docs.map((doc) => {
      let newRecipe: recipe = doc.data() as recipe
      this.recipeList.push(newRecipe)
      this.recipeMap.set(newRecipe.id, newRecipe)
    })
  }

  async getRecipeItem(id: string): Promise<recipe> {
    let recipeDoc = doc(this.firestore, "menuItems", id);
    let recipeItem = await getDoc(recipeDoc);
    console.log(recipeItem.data() as recipe);
    return recipeItem.data() as recipe;
  }

}
