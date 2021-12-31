import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  template: `

  //ngFor
  <div *ngFor= "let color of colors; index as i">
    <h1>{{i}} {{color}}</h1>
  </div>

  //first
  //last
  //even 
  //odd

  <div *ngFor= "let color of colors; odd as i">
  <div>{{i}} {{color}}</div>
</div>
  
  <br>
  <br>
  <br>
  
  //ngSwitch
  <div [ngSwitch] ="color">
    <div *ngSwitchCase="'red'">You picked color Red</div>
    <div *ngSwitchCase="'blue'">You picked color blue</div>
    <div *ngSwitchCase="'green'">You picked color green</div>
    <div *ngSwitchDefault>Pick Again</div>
  </div>

  <br>
  <br>
  <br>

  //ngIf
  <h2 *ngIf="displayName; else elseBlock">
    Harry Potter
  </h2>

  <ng-template #elseBlock>
    <h2>
      DisplayName is Hidden.
    </h2>
  </ng-template>

  <br>
  <br>
  <br>

  <h2 *ngIf="displayName; then thenBlock; else elseBlockk"></h2>

  <ng-template #thenBlock>
    <h2>Then Block!</h2>
  </ng-template>
  <ng-template #elseBlockk>
    <h2>Else Block</h2>
  </ng-template>
  
  `,
  styles: []
})
export class StructuralDirectivesComponent implements OnInit {

  public color="orange";

  public colors = ["blue","red","white","yellow"];

  public displayName = false;
  //public displayName_ = false;


  constructor() { }

  ngOnInit(): void {



  }

}
