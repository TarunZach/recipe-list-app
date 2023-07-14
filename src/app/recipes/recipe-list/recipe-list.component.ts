import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://i.pinimg.com/originals/70/09/19/7009193184270fbdef1d81ee0a55a3ba.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://i.pinimg.com/originals/70/09/19/7009193184270fbdef1d81ee0a55a3ba.jpg'
    ),
  ];

  constructor() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  ngOnInit() {}
}
