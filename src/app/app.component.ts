import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  colorSelection: string[] = [
    'red',
    'yellow',
    'green',
    'blue',
    'grey',
    'salmon',
    'brown',
  ]
  colors: string[];
  getColor(){
    let retArr: string[] = [];
    for (var i = 0; i < 15; i++) {
      retArr.push(
        this.colorSelection[Math.floor(Math.random()*this.colorSelection.length)]
      ); 
    }
    return retArr;
  }

  ngOnInit() {
    this.colors = this.getColor();
    console.log(this.colors);
  }
}
