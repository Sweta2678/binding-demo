import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url : string = "assets/data/emploees.json";

  constructor(private http : HttpClient) { }

  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
    //.pipe(
      //catchError(this.handleError ));
    // return [
    //   {"id":1,"name":"Sweta","age":24},
    //   {"id":2,"name":"Prachi","age":22},
    //   {"id":3,"name":"Prathmesh","age":20}
    // ]
  }
  handleError(handleError: any) {
    throw new Error('Method not implemented.');
  }
}
