import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MealsCatService } from '../../../../core/services/meals-cat.service';
import { MealsCat } from '../../../../IMeals-cat';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chicken',
  imports: [],
  templateUrl: './chicken.component.html',
  styleUrl: './chicken.component.scss'
})
export class ChickenComponent implements OnInit,OnDestroy{
  private readonly mealsCatService = inject(MealsCatService);


  mealsCat:MealsCat[] = [];
  subMeal:Subscription = new Subscription;

  getmealsCatData():void {
    
    this.subMeal = this.mealsCatService.getMealsCat("chicken").subscribe({
      next:(res)=>{
        this.mealsCat = res.meals ;
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{},
    })

  }

  ngOnInit(): void {
    this.getmealsCatData();
  }

  ngOnDestroy(): void {
    this.subMeal.unsubscribe();

  }


}
