import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonalTrainerAddComponent} from "../personaltrainer/add-personaltrainer/add-personaltrainer.component";
import {PersonalTrainerDeleteComponent} from "../personaltrainer/delete-personaltrainer/delete-personaltrainer.component";
import {ClientAddComponent} from './add-client/add-client.component';
import {ClientDeleteComponent} from './delete-client/delete-client.component';

const routes: Routes = [
  {path: 'add-client', component: ClientAddComponent},
  {path: 'delete-client', component: ClientDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }