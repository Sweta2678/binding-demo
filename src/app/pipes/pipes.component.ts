import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
  //pipes in String
  <h3>{{name | lowercase}}</h3>
  <h3>{{name | uppercase}}</h3>
  <h3>{{message | titlecase}}</h3>
  <h3>{{person | json}}</h3>
  <h3>{{name | slice:5:9}}</h3>
  <h3>{{name | slice:5}}</h3>
  
  //pipes in numbers and currency
  <h3>{{6.678 | number:'1.2-3'}}</h3>
  <h3>{{6.678 | number:'3.4-5'}}</h3>
  <h3>{{6.678 | number:'3.1-2'}}</h3>
  <h3>{{6.978 | number:'2.1-2'}}</h3>
  <h3>{{6.978 | number:'2.0-1'}}</h3>

  //percentage
  <h3>{{0.78 | percent }}</h3>

  currency -   curency symbol - by default US dollar.
  <h3>{{35 | currency}}</h3>
  Currency symbol for other region
  <h3>{{35 | currency : 'EUR'}}</h3>
  Currency code instead of currecny symbol
  <h3>{{35 | currency : 'EUR' : 'code'}}</h3>
  <h3>{{35 | currency : 'EUR' : 'EUR'}}</h3> //both are same

  //dates - there is medium and long parameter works same as short.
  <h3>{{date_}}</h3>
  <h3>{{date_ | date:'short'}}</h3>
  <h3>{{date_ | date:'shortDate'}}</h3>
  <h3>{{date_ | date:'shortTime'}}</h3>



  `,
  styleUrls: []
})
export class PipesComponent implements OnInit {

  public name="Swetakhatsuriya";
  public message ="Hello how are you doing?";

  public person= {
    "name":"Sweta",
    "surname":"Khatsuriya"
  }

  public date_ = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
