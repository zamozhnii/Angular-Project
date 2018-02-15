import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('A Test Resipe',
                 'This is simply a test', 
                'https://rms.knorrwhatsfordinner.co.za/images/defaults/recipe.jpg',
                [
                    new Ingredient('Meat', 1),
                    new Ingredient('French Fries', 20)
                ]),
        new Recipe('Another Test Resipe', 
        'This is simply a test', 
          'https://rms.knorrwhatsfordinner.co.za/images/defaults/recipe.jpg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 2)
        ])
      ];

    constructor(private slService: ShoppingListService) {}  
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}