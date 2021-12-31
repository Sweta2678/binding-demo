import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding-demo';
  public name = 'Sweta Bhavsar'; //it is working fine, after removing public
  public message ="";
}
