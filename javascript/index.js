const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  console.log(minutes)
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  console.log(seconds);
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  
  let milliseconds = chronometer.twoDigitsNumber(chronometer.getMilliseconds());
  milDec.innerHTML = milliseconds[0];
  milUni.innerHTML = milliseconds[1];

}

function printSplit() {
  let splitResult = chronometer.splitClick();
  let newSplit = document.createElement("li");
  newSplit.innerText = splitResult;
  splits.appendChild(newSplit);
}

function clearSplits() {
  splits.innerHTML = " ";
}

function setStopBtn() {
  btnLeft.className = "btn stop";
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.className = "btn split";
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.classList.contains("start")){
    
    chronometer.startClick(printTime);
    console.log("it started counting")
    setStopBtn();
    setSplitBtn();

  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.classList.contains("reset")){
    chronometer.resetClick();
    clearSplits();
    printTime();

  } else {
    printSplit();
  }

});