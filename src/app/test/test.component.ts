import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>
              Hello {{name}}
            </h2>
            <h2>{{2+2}}</h2>
            <h2>{{"Hello " + name}}</h2>
            <h2>{{name.length}}</h2>
            <h2>{{name.toUpperCase()}}</h2>
            <h2>{{greetUser()}}</h2>
            <h2>{{url_}}</h2>
            <input [id]="myId" type="text" value="HP"> //propert binding
            <input id="{{myId}}" type="text" value="HP"> //Interpolation only work with the string
            <input [disabled]="false" type="text" value="HP"> //binding with boolean data type
            <input [disabled]="isDisabled" type="text" value="HP"> //binding with boolean data type
            <input bind-disabled="isDisabled" type="text" value="HP"> //bind property with hyphen

            //Class Bindinggg::::::
            <h2 class="text-success">Sweta Khatsuriya</h2>
            <h2 [class]="successClass">Sweta Khatsuriya</h2>

            <h2 class="text-special" [class]="successClass">Sweta Khatsuriya</h2> //can't apply both. class binding is execute.
            //I can able to apply both. not sure how.
            <h2 [class.text-danger] = "hasError" >Prachi</h2> //class binding based on conditional true and false apply on single class.
            <h2 [ngClass] = "multiClasses" >Prachi Khatsuriya</h2> //multiple class binding


            //Style Bindingggg - similar to class binding
            <h2 [style.color] = "'orange'">Style Binding</h2>
            <h2 [style.color] = "hasError ? 'red' : 'green'">Style Binding</h2> //conditional
            <h2 [style.color] = "styleDesign">Style Binding 2</h2> //style binding 
            <h2 [ngStyle] = "multiStyle">Style Binding 3</h2> //multi style binding 

            `,
  styles: [
    `
    .text-success{
      color:green;
    }
    .text-danger{
      color:Red;
    }
    .text-warning{
      color:yellow;
    }
    .text-special{
      font-style:italic;
    }
    `
  ]
})
export class TestComponent implements OnInit {

  public name ="Swetaaa";
  public url_ = window.location.href;
  public myId ="testId";
  public isDisabled = true;
  public successClass="text-success";
  public hasError =true;
  public styleDesign ="orange";
  public multiStyle ={
    color:"blue",
    fontStyle:"italic"
  }

  public multiClasses={
    "text-success" : !this.hasError,
    "text-danger":this.hasError,
    "text-special":this.hasError
  }

  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hellow" + this.name
  }

}
