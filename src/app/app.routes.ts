import { Routes } from '@angular/router';
import { MealsComponent } from './features/pages/meals/meals.component';
import { IngredientsComponent } from './features/pages/ingredients/ingredients.component';
import { AreaComponent } from './features/pages/area/area.component';
import { NotfoundComponent } from './features/additional/notfound/notfound.component';
import { AllComponent } from './features/pages/meals/all/all.component';
import { BeefComponent } from './features/pages/meals/beef/beef.component';
import { BreakfastComponent } from './features/pages/meals/breakfast/breakfast.component';
import { ChickenComponent } from './features/pages/meals/chicken/chicken.component';
import { DessertComponent } from './features/pages/meals/dessert/dessert.component';
import { GoatComponent } from './features/pages/meals/goat/goat.component';
import { LambComponent } from './features/pages/meals/lamb/lamb.component';
import { MiscellaneousComponent } from './features/pages/meals/miscellaneous/miscellaneous.component';
import { PastaComponent } from './features/pages/meals/pasta/pasta.component';
import { PorkComponent } from './features/pages/meals/pork/pork.component';
import { SeafoodComponent } from './features/pages/meals/seafood/seafood.component';
import { SideComponent } from './features/pages/meals/side/side.component';
import { StarterComponent } from './features/pages/meals/starter/starter.component';
import { VeganComponent } from './features/pages/meals/vegan/vegan.component';
import { VegetarianComponent } from './features/pages/meals/vegetarian/vegetarian.component';
import { DisplayComponent } from './features/pages/display/display.component';

export const routes: Routes = [
    {path:'', redirectTo:'meals',pathMatch:'full',title:"meals"},
    {path:'meals', component:MealsComponent,title:"meals",children:[
        {path:'',redirectTo:'All',pathMatch:'full'},
        {path:'All',component:AllComponent,title:'All'},
        {path:'Beef',component:BeefComponent,title:'Beef'},
        {path:'Breakfast',component:BreakfastComponent,title:'Breakfast'},
        {path:'Chicken',component:ChickenComponent,title:'Chicken'},
        {path:'Dessert',component:DessertComponent,title:'Dessert'},
        {path:'Goat',component:GoatComponent,title:'Goat'},
        {path:'Lamb',component:LambComponent,title:'Lamb'},
        {path:'Miscellaneous',component:MiscellaneousComponent,title:'Miscellaneous'},
        {path:'Pasta',component:PastaComponent,title:'Pasta'},
        {path:'Pork',component:PorkComponent,title:'Pork'},
        {path:'Seafood',component:SeafoodComponent,title:'Seafood'},
        {path:'Side',component:SideComponent,title:'Side'},
        {path:'Starter',component:StarterComponent,title:'Starter'},
        {path:'Vegan',component:VeganComponent,title:'Vegan'},
        {path:'Vegetarian',component:VegetarianComponent,title:'Vegetarian'},
    ]},
    {path:'ingredients', component:IngredientsComponent,title:"ingredients"},
    {path:'area', component:AreaComponent,title:"area"},
    {path:'display', component:DisplayComponent,title:"display"},
    {path:'**',component:NotfoundComponent,title:"notfound"}
];
