import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../Services/user.service";
import {MenuInterface} from "../../menu-interface";
import {Router} from "@angular/router";


@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})
export class AddFoodComponent {
  @Output() onShowForm = new EventEmitter<boolean>()
  @Output() sendNewFoodData = new EventEmitter<MenuInterface>()
  DoN: string = "";
  addFoodForm: FormGroup = new FormGroup({
    nameFood: new FormControl<string>('', Validators.required),
    foodPrice: new FormControl<number>(0, Validators.required),
    foodServeTime: new FormControl<number>(0, Validators.required),
  })
  nameFood: string = ''
  foodPrice: number = 0
  foodServeTime: number = 0
  addFoodObjectPost: MenuInterface = {
    id: 0,
    foodName: "",
    DoN: 0,
    price: 0,
    timeToServe: 0
  }

  constructor(private userService: UserService, private router: Router) {
  }

  onSubmit() {
    this.nameFood = this.addFoodForm.controls['nameFood'].value
    this.foodPrice = +this.addFoodForm.controls['foodPrice'].value
    this.foodServeTime = +this.addFoodForm.controls['foodServeTime'].value

    if (this.nameFood !== "" && this.foodPrice !== 0 && this.foodServeTime !== 0 && this.DoN !== "") {
      this.addFoodObjectPost.foodName = this.nameFood
      this.addFoodObjectPost.DoN = +this.DoN
      this.addFoodObjectPost.price = this.foodPrice
      this.addFoodObjectPost.timeToServe = this.foodServeTime
      alert("successfully")
      this.onShowForm.emit(true)
      this.sendNewFoodData.emit(this.addFoodObjectPost)
    } else {
      alert("All of the fields is not complete")
    }
  }

}
