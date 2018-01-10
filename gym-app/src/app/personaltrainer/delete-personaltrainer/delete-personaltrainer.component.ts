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
	
	personalTrainerForm: formGroup;
	personaltrainers: PersonalTrainer[];
	
   constructor(private personalTrainerService: PersonalTrainerService,
	private router: Router) { }
	
  ngOnInit() {
	  this.getTrainer();
  }
  
  getTrainer(){
	   this.PersonalTrainerService.findTrainer().subscribe(
      t => {
        this.sprzets = t;
      },
      error => {
        console.log(error);
      }
    );}
	
	deletePersonalTrainer(trainerId: numer){
		this.PersonalTrainerService.deleteTrainer(trainerId).subscribe();
		location.reload();
	}
}
