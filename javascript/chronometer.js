class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(printTime) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      printTime();
    }, 1000);
  }

  getMinutes() {
    let countMinutes = Math.floor(this.currentTime/60);
    return countMinutes;
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getMilliseconds() {
    return this.currentTime * 1000;
  }

  twoDigitsNumber(num) {
    let numToString = (num.toString()).slice(0,2);

    if (numToString.length < 2) {
      return "0" + numToString;
    } else if (numToString.length === 2) {
      return numToString;
    } else {
      throw Error ("Somtething went bad!")
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {

    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    let milliSeconds = this.getMilliseconds();

    return `${this.twoDigitsNumber(minutes)}:${this.twoDigitsNumber(seconds)}:${this.twoDigitsNumber(milliSeconds)}`;
    
  }
}
