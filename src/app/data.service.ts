import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Model} from './model';
import {HttpClient, HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import {token} from './authToken'

@Injectable()
export class DataService {
  private API_URL = 'api/heores';

  dataChange: BehaviorSubject<Model[]> = new BehaviorSubject<Model[]>([]);
  dialogData: any;

  constructor (private httpClient: HttpClient) {}

  get data(): Model[] {
    return this.dataChange.value;
  }
    reqHeader = new HttpHeaders({ 
    'Authorization': 'Bearer ' + token,
 });
  getData() {
    return this.dialogData;
  }
  getAllData(): void {
    this.httpClient.get<Model[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
      });
  }

  // addData (model: Model): void {

  //  this.httpClient.post(this.API_URL, model, {headers: this.reqHeader}).subscribe(data => {
  //   this.dialogData = data;
  //   });
  // }

  // updateData (model: Model): void {
  //   this.httpClient.put(this.API_URL +'/'+ model.id, model, {headers: this.reqHeader}).subscribe(data => {
  //     this.dialogData = data; });
  // }

  addData (model: Model): void {

     this.dialogData = model;
  
   }
 
   updateData (model: Model): void {
     
       this.dialogData = model;
   }
 
   deleteData (id: number): void {
     this.httpClient.delete(this.API_URL + id, {headers: this.reqHeader}).subscribe(data => {
       console.log(data['']);
       },
       (err: HttpErrorResponse) => {
       }
     );
   }
  
}

