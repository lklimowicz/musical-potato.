import { Component, OnInit } from '@angular/core';
import {Client} from "../client";
import {ClientService} from "../client.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css']
})
export class DeleteClientComponent implements OnInit {
	ClientForm: FormGroup;
	clients: Client[];

  constructor(private clientService: ClientService,
  private router: Router) { }

  ngOnInit() {
	  this.getClients();
  }
  getClients(){
	  this.clientService.findClient().subscribe(
	  cl => { this.clients = cl;}, error => {console.log(error);}
	  );

}
	deleteClient(clientid: number){
		this.clientService.deleteClient(clientid).subscribe();
	location.reload();}
}
