import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AllMealsCatService } from '../../../core/services/all-meals-cat.service';
import { Allmeals } from '../../../IAllmeals';

@Component({
  selector: 'app-display',
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss'
})
export class DisplayComponent implements OnInit,OnDestroy {
  
  AllMeals:Allmeals[] = [];
  subMeal:Subscription = new Subscription;
  
  private readonly allMealsCatService = inject(AllMealsCatService);


  getAllmealsData():void{
    this.subMeal = this.allMealsCatService.getAllMeals().subscribe({
      next:(res) => {
        this.AllMeals = res.meals ;
      },
      error:(err) => {
        console.log(err);
      },
      complete:()=> {},
    })

  }

  ngOnInit(): void {
    this.getAllmealsData();
  }

  ngOnDestroy(): void {
    this.subMeal.unsubscribe();
  }

}
