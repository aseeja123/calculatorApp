import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculatorApp';
  str:string='';
  constructor() {

  }

  add() {
      const arr = JSON.stringify(this.str)

      let sum:any = 0;
      for(let i =0;i<arr.length;i++){
          sum =sum + arr[i]
      }
  }
}
