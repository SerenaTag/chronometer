class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId= 0;
  }

  start(callback) {
    this.intervalId = setInterval(()=> {
      this.currentTime++;
      callback();
    },1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if (value < 10)
    {return '0${value}'}
    else {
    return '${value}';
}  }

  stop() {
   clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime=0; //va inserito  in HTML

  }

  split() {
    let min = this.computeTwoDigitNumber(getMinutes());
    let sec = this.computeTwoDigitNumber(getSeconds());
    return '${min}:${sec}';
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
