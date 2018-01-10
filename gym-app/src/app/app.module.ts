import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ClientModule} from "./client/client.module";
import {HttpModule} from "@angular/http";
import {PersonaltrainerModule} from "./personaltrainer/personaltrainer.module";
import {GymModule} from "./gym/gym.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientModule,
    PersonaltrainerModule,
	GymModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }