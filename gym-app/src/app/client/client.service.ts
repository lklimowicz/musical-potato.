import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Client} from "./client";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ClientService {

	private apiUrladdClient = "http://localhost:8080/addClient";
  private apiUrlfindClient = "http://localhost:8080/findClient";
  private apiUrldeleteClient = "http://localhost:8080/deleteClient";

  constructor(private http: Http) { }

  addClient(client:Client): Observable<Client>{
    return this.http.post(this.apiUrladdClient, client)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteClient(clientid: number): Observable<boolean>{
    return this.http.delete(this.apiUrldeleteClient + '/' + clientid)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  findClient(): Observable<Client[]>{
    return this.http.get(this.apiUrlfindClient)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }


}
