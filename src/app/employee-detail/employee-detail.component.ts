import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h4>
      <div *ngFor="let employee of employee_details">
        <li>{{employee.name}} - {{employee.age}}</li>
      </div>
    </h4>  
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  public employee_details = [] as any;

  constructor(private _employeeService : EmployeeService) { }

  ngOnInit(): void {
    // this.employee_details = this._employeeService.getEmployees();
    this._employeeService.getEmployees().subscribe(data => this.employee_details = data);
  }

}
