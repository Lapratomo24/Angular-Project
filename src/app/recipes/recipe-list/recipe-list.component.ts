import { Component, OnInit } from '@angular/core';
import { Recipe } from '../data/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Masala pasta", "Test recipe", "https://vismaifood.com/storage/app/uploads/public/7b2/49e/d12/thumb__1200_0_0_0_auto.jpg"),
    new Recipe("Beef noodle soup", "Test recipe 2", "https://www.thespruceeats.com/thmb/ABkIbUeYTsxUQZYiFdJTzIK_r9s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/taiwanese-beef-noodle-soup-4777014-hero-01-e06a464badec476684e513cad44612da.jpg")
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
