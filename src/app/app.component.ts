import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MachineTest';
  expanded:boolean=false;

  toggle(){
    this.expanded=!this.expanded
  }
}
