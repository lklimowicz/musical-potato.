import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaltrainerRoutingModule } from './personaltrainer-routing.module';
import { AddPersonaltrainerComponent } from './add-personaltrainer/add-personaltrainer.component';
import { DeletePersonaltrainerComponent } from './delete-personaltrainer/delete-personaltrainer.component';

@NgModule({
  imports: [
    CommonModule,
    PersonaltrainerRoutingModule
  ],
  declarations: [AddPersonaltrainerComponent, DeletePersonaltrainerComponent]
})
export class PersonaltrainerModule { }
