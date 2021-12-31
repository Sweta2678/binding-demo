import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <input [(ngModel)]="name" type="text"> //two way binding - [] class to template , () tempate to class. [()] - banana in box.
    {{name}}

    `,
  styles: []
})
export class TwoWayBindingComponent implements OnInit {

  constructor() { }
  public name="";

  ngOnInit(): void {
  }

}
