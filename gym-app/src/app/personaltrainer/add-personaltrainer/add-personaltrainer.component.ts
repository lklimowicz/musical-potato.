import { Component, OnInit } from '@angular/core';
import {PersonalTrainerService} from "../personaltrainer.service";
import {PersonalTrainer} from "../personaltrainer";
import {Gym} from "../../gym/gym";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-add-personaltrainer',
  templateUrl: './add-personaltrainer.component.html',
  styleUrls: ['./add-personaltrainer.component.css'],
   providers: [PersonalTrainerService]
})
export class AddPersonaltrainerComponent implements OnInit {
	
	personalTrainerForm: FormGroup;
	gyms: Gym[]
	clients: Client[]

  constructor(private personalTrainerService: PersonalTrainerService,
	private router: Router) { }

  ngOnInit() {
	  this.getGyms();
	  this.getClients();
	  this.personalTrainerForm = new FormGroup({
		  trainerName: new FormControl('', Validators.required),
		  trainerSurname: new FormControl('', Validators.required),
		  trainerPhone: new FormControl('', Validators.required),
		  gym: new FormControl('', Validators.required),
	  client: new FormControl('', Validators.required))}
  }
  
   onSubmit() {
    if (this.personalTrainerForm.valid) {
      let personalTrainer:  PersonalTrainer = new PersonalTrainer(
        null,
        this.sprzetForm.controls['trainerName'].value,
        this.sprzetForm.controls['trainerSurname'].value,
        this.sprzetForm.controls['trainerPhone'].value,
        this.sprzetForm.controls['gym'].value,
		this.sprzetForm.controls['client'].value);
		
      this.PersonalTrainerService.addPersonalTrainer(personalTrainer).subscribe();
      this.personalTrainerForm.reset();
      this.router.navigate(['/']);
    }
  }
  getGym() {
    this.PersonalTrainerService.findGym().subscribe(
      gy => {
        this.gyms = gy;
      },
      error => {
        console.log(error);
      }
    );
  }
  
   getClient() {
    this.PersonalTrainerService.findClient().subscribe(
      c => {
        this.clients = c;
      },
      error => {
        console.log(error);
      }
    );
  }


}
