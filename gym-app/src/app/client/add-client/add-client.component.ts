import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ClientService} from "../client.service";
import {Client} from "../client";
import {Router} from "@angular/router";


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

	clientForm: FormGroup;

  constructor(private clientService: ClientService,
	private router: Router) { }

  ngOnInit() {
	  this.clientForm = new FormGroup({
		  name: new FormControl('', Validators.required),
		  surname: new FormControl('', Validators.required),
		  phone: new FormControl('', Validators.required)
		    });

  }
	onSubmit() {
    if (this.clientForm.valid) {
      let client: Client = new Client(
        null,
        this.clientForm.controls['name'].value,
        this.clientForm.controls['surname'].value,
        this.clientForm.controls['phone'].value,
      );
      this.clientService.addClient(client).subscribe();
      this.clientForm.reset();
      this.router.navigate(['/']);
    }

	}}


