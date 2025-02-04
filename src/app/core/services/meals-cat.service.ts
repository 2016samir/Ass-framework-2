import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsCatService {

  constructor(private httpClient:HttpClient) { }

  getMealsCat(type:string):Observable<any>{
    return this.httpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${type}`)
  }
  
}
