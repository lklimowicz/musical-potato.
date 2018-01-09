import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientAddComponent } from './add-client/add-client.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ClientDeleteComponent } from './delete-client/delete-client.component';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ClientAddComponent, ClientDeleteComponent]
})
export class ClientModule { }