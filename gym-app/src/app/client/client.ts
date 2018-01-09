
export class Client {
  clientId: number;
  clientName: string;
  clientSurname: string;
  clientPhone: string;
 

  constructor(clientId: number, clientName: string, clientSurame: string, clientPhone: string){
    this.clientId = clientId;
    this.clientName= clientName;
    this.clientSurame= clientSurame;
    this.clientPhone= clientPhone;
  }
}