const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  this.printMinutes();
  this.printSeconds();
}

function printMinutes() {
 let minutes = chronometer.getMinutes();
 let twoDigitMin= chronometer.computeTwoDigitNumber(minutes);
minDecElement.innerHTML=twoDigitMin[0];
minUniElement.innerHTML=twoDigitMin[1];
}

function printSeconds() {
  let seconds=chronometer.getSeconds();
  let twoDigitSec= chronometer.computeTwoDigitNumber(seconds);
  secDecElement.innerHTML=twoDigitSec[0];
  secUniElement.innerHTML=twoDigitSec[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let newSplit= document.createElement('li');
  newSplit.innerText= chronometer.split();
  splitsElement.appendChild(newSplit)
}

function clearSplits() {
  splitsElement.removeChild();
  milDecElement.innerText= '0';
  minUniElement.innerText='0';
  secDecElement.innerText='0';
  secUniElement.innerText='0';

}

function setStopBtn() {
  btnLeftElement.innerText='STOP';
  btnLeftElement.className= 'btn stop';

  chronometer.start(printTime);
}


function setSplitBtn() {
  btnRightElement.innerText='SPLIT';
  btnRightElement.className='btn split';

  chronometer.split();
}

function setStartBtn() {
  btnLeftElement.innerText='START';
  btnLeftElement.className='btn start';

  chronometer.stop()

}

function setResetBtn() {
  btnRightElement.innerText='RESET';
  btnRightElement.className='btn reset';

  chronometer.reset();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement === 'START') {
    setStopBtn()
    setSplitBtn();
  } else {
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement==='SPLIT'){
    printSplit();
    chronometer.split();
  } else {
    clearSplits();
    chronometer.reser();
  }
});
