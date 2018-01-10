import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddPersonaltrainerComponent} from "./add-personaltrainer/add-personaltrainer.component"
import {DeletePersonaltrainerComponent} from "./delete-personaltrainer/delete-personaltrainer.component"
const routes: Routes = [
	{path: 'add-personaltrainer', component: AddPersonaltrainerComponent},
	{path: 'delete-personaltrainer', component: DeletePersonaltrainerComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaltrainerRoutingModule { }
