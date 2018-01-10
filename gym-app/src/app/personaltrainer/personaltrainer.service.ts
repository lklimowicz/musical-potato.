import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {PersonalTrainer} from "./personaltrainer";
import {Gym} from "../gym/gym";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import {Client} from "../client/client";



@Injectable()
export class PersonalTrainerService {

  private apiUrladdTrainer = "http://localhost:8080/addPersonalTrainer"
  private apiUrldeleteTrainer = "http://localhost:8080/deletePersonalTrainer"
  private apiUrlfindGym = "http://localhost:8080/findGym"
  private apiUrlfindClient = "http://localhost:8080/findClient"
  private apiUrlfindTrainer = "http://localhost:8080/findPersonalTrainer"


  constructor(private http: Http) { }

  addTrainer(personaltrainer: PersonalTrainer): Observable<PersonalTrainer>{
      return this.http.post(this.apiUrladdTrainer, personaltrainer)
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

    deleteTrainer(trainerId: number): Observable<boolean>{
      return this.http.delete(this.apiUrldeleteTrainer + '/' + trainerId)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  findTrainer(): Observable<PersonalTrainer[]>{
      return this.http.get(this.apiUrlfindTrainer)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));


  }

    findGym(): Observable<Gym[]> {
      return this.http.get(this.apiUrlfindGym)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
	findClient(): Observable<Client[]> {
      return this.http.get(this.apiUrlfindClient)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


}
