import { Component, Input, OnInit ,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template: `
  
    <h2>Hello {{parentData}}</h2>
    <h2>Hello {{name}}</h2> //assign it to name variable

    //child to parent -- tst to app component
    <button (click)="fireEvent()">clik here</button>

  `,
  styles: []
})
export class ComponentInteractionComponent implements OnInit {

  @Input() public parentData : any;
  @Input('parentData') public name : any; //assign it to name variable

  @Output() public childEvent  = new EventEmitter();

  fireEvent(){
    this.childEvent.emit('Hey there');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
