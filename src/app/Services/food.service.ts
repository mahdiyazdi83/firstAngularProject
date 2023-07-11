import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MenuInterface} from "../menu-interface";

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  url: string = "http://localhost:3000/"

  constructor(private http: HttpClient) {
  }

  getMenu(): Observable<object> {
    return this.http.get(this.url + "foods")
  }

  postToMenu(addMenu: MenuInterface): Observable<object> {
    return this.http.post(this.url + "foods", addMenu)
  }
}
