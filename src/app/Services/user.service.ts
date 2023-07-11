import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MenuInterface} from "../menu-interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = "http://localhost:3000/"

  constructor(private http: HttpClient) {

  }

  getUser(): Observable<object> {
    return this.http.get(this.url + "users")
  }
}
