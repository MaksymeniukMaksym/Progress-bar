import { CountdownComponent } from './countdown/countdown.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  counterProgress:number = 0;
  totalCountdown:number = 15;

  updateProgress($event){
    this.counterProgress = (this.totalCountdown - $event)/this.totalCountdown * 100;
  }

  CountdownFinished(){
    console.log("countdown has finished");
  }

  title = 'Project';
}
