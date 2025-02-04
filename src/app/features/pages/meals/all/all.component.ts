import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AllMealsCatService } from '../../../../core/services/all-meals-cat.service';
import { Allmeals } from '../../../../IAllmeals';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all',
  imports: [],
  templateUrl: './all.component.html',
  styleUrl: './all.component.scss'
})
export class AllComponent implements OnInit,OnDestroy {
  
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
