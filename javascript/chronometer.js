class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {

    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);

  }

  getMinutes() {
    
    let countMinutes = Math.floor(this.currentTime/60);
    return countMinutes;

  }
  getSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(num) {

    //return num.toString().length < 2 ? "0" + num.toString() : num.toString();

    if (num.toString().length < 2) {
      return "0" + num.toString()
    } else if (num.toString().length === 2) {
      return num.toString();
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

    return `${this.twoDigitsNumber(minutes)}:${this.twoDigitsNumber(seconds)}`;
    
  }
}
