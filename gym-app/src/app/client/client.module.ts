import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import {AddClientComponent} from './add-client/add-client.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DeleteClientComponent} from './delete-client/delete-client.component';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AddClientComponent, DeleteClientComponent]
})
export class ClientModule { }