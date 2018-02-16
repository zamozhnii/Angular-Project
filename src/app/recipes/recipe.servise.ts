import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel',
                 'This is super-tasty Schnitzel', 
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDFf4DSvi75kW-9727_1KanVzIkiAcpEQp34lUXr45ehMcJ7EO',
                [
                    new Ingredient('Meat', 1),
                    new Ingredient('French Fries', 20)
                ]),
        new Recipe('Burger', 
        'Big Fat Burger', 
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFC4IxrwZLvSFmkk2yr2gOduli10OyfBmhYiURBSKe7ayibFJM',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 2)
        ])
      ];

    constructor(private slService: ShoppingListService) {}  

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}