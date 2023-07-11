import {Component, OnChanges, OnInit} from '@angular/core';
import {UserService} from "../../Services/user.service";
import {Router} from "@angular/router";
import {MenuInterface} from "../../menu-interface";
import {FoodService} from "../../Services/food.service";
import {AuthService} from "../../Services/auth.service";

@Component({
  selector: 'app-show-menu',
  templateUrl: './show-menu.component.html',
  styleUrls: ['./show-menu.component.scss']
})
export class ShowMenuComponent implements OnInit {
   foodData: any;
  newFoodObject: MenuInterface= {
    id: 0,
    foodName: "",
    DoN: 0,
    price: 0,
    timeToServe: 0
  }
  showAddButton: boolean = true

  constructor(private userService: UserService, private route: Router, private foodService: FoodService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.getFoodData()
    console.log(this.foodData)
  }

  getFoodData(): void {
    this.foodService.getMenu().subscribe(
      response => this.foodData = response
    );
  }

  onShowForm(isShow: boolean) {
    this.showAddButton = isShow
    this.getFoodData()
  }

  onAddFood(foodObject: MenuInterface) {
    this.newFoodObject = foodObject
    console.log(this.newFoodObject)
    this.foodService.postToMenu(this.newFoodObject).subscribe(res => {
      this.getFoodData()
    })
  }

  onLogout() {
    this.authService.setIsLoginUser(false)
    this.route.navigate(['/login'])
  }
}
