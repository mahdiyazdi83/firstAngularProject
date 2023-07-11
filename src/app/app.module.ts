import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { ShowMenuComponent } from './Components/show-menu/show-menu.component';
import { AddFoodComponent } from './Components/add-food/add-food.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {NgForOf, NgIf} from "@angular/common";
import { DonPipe } from './Pipes/don.pipe';
import { TimeToServePipe } from './Pipes/time-to-serve.pipe';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import {showMenuGuard} from "./show-menu.guard";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShowMenuComponent,
    AddFoodComponent,
    DonPipe,
    TimeToServePipe,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  providers: [
    showMenuGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
