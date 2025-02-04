import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MealsCatService } from '../../../../core/services/meals-cat.service';
import { MealsCat } from '../../../../IMeals-cat';

@Component({
  selector: 'app-pork',
  imports: [],
  templateUrl: './pork.component.html',
  styleUrl: './pork.component.scss'
})
export class PorkComponent implements OnInit,OnDestroy {

  private readonly mealsCatService = inject(MealsCatService);


  mealsCat:MealsCat[] = [];
  subMeal:Subscription = new Subscription;

  getmealsCatData():void {
    
    this.subMeal = this.mealsCatService.getMealsCat("pork").subscribe({
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

