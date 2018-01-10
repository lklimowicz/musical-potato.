import {Gym} from "../gym/gym";
import {Client} from "../client/client"

export class PersonalTrainer {
	trainerId: number;
	trainerName: string;
	trainerSurname: string;
	trainerPhone: string;
	client: Client;
	gym: Gym;	
	
constructor(trainerId: number, trainerName: string, trainerSurname: string, trainerPhone: string, client: Client, gym: Gym){
	this.trainerId = trainerId;
	this.trainerName = trainerName;
	this.trainerSurname = trainerSurname;
	this.trainerPhone = trainerPhone;
	this.client = client;
	this.gym = gym;
}
}