import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-event-binding',
  template: `
              <h1>Event Binding</h1>
              <button (click) = "onClick($event)"> greet</button> //assigned handler
              <button (click) = "greeting='Welcome Sweta'" > greet</button> // handler not assigned

              {{greeting}}
              <br/>

              <input #myInput type="text"> template reference variable
              <button (click)="logMessage(myInput.value)">log</button>

            `,
  styles: [``]
})
export class TestEventBindingComponent implements OnInit {

  public greeting ="";
  onClick(event: any){ //diretly event not passable. you need to infer its type
    this.greeting ="function called via interpollation";
    console.log(event);
    console.log(event.type);

  }

  logMessage(value : any){
      console.log(value);
      }

  constructor() { }

  ngOnInit(): void {
  }

}
