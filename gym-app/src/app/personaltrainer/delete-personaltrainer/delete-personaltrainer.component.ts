import { Component, OnInit } from '@angular/core';
import {PersonalTrainerService} from "../personaltrainer.service";
import {PersonalTrainer} from "../personaltrainer";
import {Gym} from "../../gym/gym";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-delete-personaltrainer',
  templateUrl: './delete-personaltrainer.component.html',
  styleUrls: ['./delete-personaltrainer.component.css'],
  providers: [PersonalTrainerService]
})
export class DeletePersonaltrainerComponent implements OnInit {

	personalTrainerForm: FormGroup;
	personaltrainers: PersonalTrainer[];
	sprzets: PersonalTrainer[];

   constructor(private personalTrainerService: PersonalTrainerService,
	private router: Router) { }

  ngOnInit() {
	  this.getTrainer();
  }

  getTrainer(){
	   this.personalTrainerService.findTrainer().subscribe(
      t => {
        this.sprzets = t;
      },
      error => {
        console.log(error);
      }
    );}

	deletePersonalTrainer(trainerId: number){
		this.personalTrainerService.deleteTrainer(trainerId).subscribe();
		location.reload();
	}
}
