import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "./Services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RestaurantProject';

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
  }
}
