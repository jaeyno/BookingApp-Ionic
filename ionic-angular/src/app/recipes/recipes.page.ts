import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Apple Pie',
      imageUrl: 'https://www.inspiredtaste.net/wp-content/uploads/2019/10/Homemade-Apple-Pie-Recipe-6-1200.jpg',
      ingredients: ['Apple', 'Flour', 'Sugar', 'Honey']
    },
    {
      id: 'r2',
      title: 'Fried Rice',
      imageUrl: 'https://therecipecritic.com/wp-content/uploads/2019/07/easy_fried_rice.jpg',
      ingredients: ['Rice', 'Egg', 'Sugar', 'Salt']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
