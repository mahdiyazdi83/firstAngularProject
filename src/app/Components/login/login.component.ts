import {Component, OnInit} from '@angular/core';
import {UserService} from "../../Services/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../../Services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  userData: any;
  isAuthentication: boolean = false

  constructor(private userService: UserService, private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      response => this.userData = response
    )
  }

  checkIsAuthentication(): void {
    if (this.isAuthentication) {
      this.authService.setIsLoginUser(true)
      alert("successfully")
      this.router.navigate(['/showMenu'])
    } else {
      alert("Username or password is not correct")
    }
  }

  Authentication(): void {
    for (let i: number = 0; i < (this.userData).length; i++) {
      if (this.username === (this.userData[i]).username && this.password === (this.userData[i]).password) {
        this.isAuthentication = true
      }
    }
    this.checkIsAuthentication()
  }
}
