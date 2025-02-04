import { Component, inject } from '@angular/core';
import { AllMealsCatService } from '../../../core/services/all-meals-cat.service';
import { Allmeals } from '../../../IAllmeals';
import { MealsCat } from '../../../IMeals-cat';
import { MealsCatService } from '../../../core/services/meals-cat.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-meals',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss'
})
export class MealsComponent {



}
