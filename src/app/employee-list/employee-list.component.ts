import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h4>
        <div *ngFor="let employee of employees">
          <li>{{employee.name}}</li>
        </div>
    </h4>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employees = [] as any;

  constructor(private _employeeService : EmployeeService) { }

  ngOnInit(): void {
    //this.employees = this._employeeService.getEmployees();
    this._employeeService.getEmployees().subscribe(data => this.employees = data);

  }

}
