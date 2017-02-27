import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  timeToReach = 'Time to reach: ';

  seconds;
  hours;
  days;
  years;
  millionYears;

  yCoord = 1;
  goingDown = true;

  resultSeconds;
  resultHours;
  resultDays;
  resultYears;

  constructor () {
    this.seconds = 0;
    this.hours = 0;
    this.days = 0;
    this.years = 0;
    this.yCoord = 7;

    setInterval(() => { this.changePosition(this) }, 5);

  }

  changePosition(tempThis: any) {
    // console.log('Going: ', tempThis.goingDown, tempThis.yCoord);
    if (tempThis.goingDown) {
      tempThis.yCoord += 0.1;
      if (tempThis.yCoord > 50) {
        tempThis.goingDown = false;
      }
    } else {
      tempThis.yCoord -= 0.1;      
      if (tempThis.yCoord < 1) {
        tempThis.goingDown = true;
      }
    }

  }

  populateFromSeconds(seconds) {
    this.seconds = seconds;
    this.hours = seconds / 3600;
    this.days = this.hours / 24;
    this.years = this.days / 365;
    this.millionYears = this.years / 1000000;
    this.calcTime();
  }

  populateResultFromHours(hours) {
    this.resultSeconds = hours *3600;
    this.resultDays = hours / 24;
    this.resultYears = this.resultDays / 365;
  }

  populateFromYears(years) {
    this.populateFromSeconds(years * 365 * 24 * 3600);
  }

  calcTime() {
this.resultHours = Math.sqrt(this.hours);
this.populateResultFromHours(this.resultHours);
  }

}
