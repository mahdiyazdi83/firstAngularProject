import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoginUser: boolean = false
  constructor() { }
  setIsLoginUser(input:boolean) {
    this.isLoginUser = input
  }
  isAuthentication():Promise<boolean> {
    console.log(this.isLoginUser)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.isLoginUser)
      }, 1000)
    })
  }
}
