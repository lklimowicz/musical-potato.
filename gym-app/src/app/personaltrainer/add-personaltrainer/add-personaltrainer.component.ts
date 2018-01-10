import { Component, OnInit } from '@angular/core';
import {PersonalTrainerService} from "../personaltrainer.service";
import {PersonalTrainer} from "../personaltrainer";
import {Gym} from "../../gym/gym";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Client} from "../../client/client";


@Component({
  selector: 'app-add-personaltrainer',
  templateUrl: './add-personaltrainer.component.html',
  styleUrls: ['./add-personaltrainer.component.css'],
   providers: [PersonalTrainerService]
})
export class AddPersonaltrainerComponent implements OnInit {

	personalTrainerForm: FormGroup;
	gyms: Gym[];
	clients: Client[];

  constructor(private personalTrainerService: PersonalTrainerService,
	private router: Router) { }

  ngOnInit() {
	  this.getGym();
	  this.getClient();
	  this.personalTrainerForm = new FormGroup({
		  trainerName: new FormControl('', Validators.required),
		  trainerSurname: new FormControl('', Validators.required),
		  trainerPhone: new FormControl('', Validators.required),
		  gym: new FormControl('', Validators.required),
	  client: new FormControl('', Validators.required) })
  }

   onSubmit() {
    if (this.personalTrainerForm.valid) {
      let personalTrainer:  PersonalTrainer = new PersonalTrainer(
        null,
        this.personalTrainerForm.controls['trainerName'].value,
        this.personalTrainerForm.controls['trainerSurname'].value,
        this.personalTrainerForm.controls['trainerPhone'].value,
        this.personalTrainerForm.controls['gym'].value,
		this.personalTrainerForm.controls['client'].value);

      this.personalTrainerService.addTrainer(personalTrainer).subscribe();
      this.personalTrainerForm.reset();
      this.router.navigate(['/']);
    }
  }
  getGym() {
    this.personalTrainerService.findGym().subscribe(
      gy => {
        this.gyms = gy;
      },
      error => {
        console.log(error);
      }
    );
  }

   getClient() {
    this.personalTrainerService.findClient().subscribe(
      c => {
        this.clients = c;
      },
      error => {
        console.log(error);
      }
    );
  }


}
