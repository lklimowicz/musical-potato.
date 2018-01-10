import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddPersonaltrainerComponent} from "../personaltrainer/add-personaltrainer/add-personaltrainer.component";
import {DeletePersonaltrainerComponent} from "../personaltrainer/delete-personaltrainer/delete-personaltrainer.component";
import {AddClientComponent} from './add-client/add-client.component';
import {DeleteClientComponent} from './delete-client/delete-client.component';

const routes: Routes = [
  {path: 'add-client', component: AddClientComponent},
  {path: 'delete-client', component: DeleteClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }