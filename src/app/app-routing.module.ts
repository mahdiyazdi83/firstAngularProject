import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./Components/login/login.component";
import {ShowMenuComponent} from "./Components/show-menu/show-menu.component";
import {AddFoodComponent} from "./Components/add-food/add-food.component";
import {showMenuGuard} from "./show-menu.guard";
import {NotFoundComponent} from "./Components/not-found/not-found.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'showMenu', component: ShowMenuComponent ,canActivate: [ showMenuGuard ], children: [
      {path: 'addFood', component: AddFoodComponent}]
  },
  {path: '404', component: NotFoundComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
