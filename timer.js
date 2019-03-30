let displayTime = document.getElementsByTagName("h2")[0];
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const clear = document.getElementById("clear");
let seconds = 0;
let minutes = 0;
let hours = 0;
let getTime;

//function to increment seconds when the start button is clicked
//each time variable seconds increment up to 60, the minutes variable increases by 1 and then when minutes variable gets to 60, hours variable increases by 1.
const count = () => {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  let a = "";

  //formatting hours
  if (hours) {
    if (hours > 9) {
      a += hours;
    } else {
      a += "0" + hours;
    }
  } else {
    a += "00";
  }

  a += ":";

  //formatting minutes
  if (minutes) {
    if (minutes > 9) {
      a += minutes;
    } else {
      a += "0" + minutes;
    }
  } else {
    a += "00";
  }

  a += ":";

  //formatting seconds
  if (seconds > 9) {
    a += seconds;
  } else {
    a += "0" + seconds;
  }

  displayTime.textContent = a;
};

const timer = () => {
  getTime = setInterval(count, 1000);
  start.disabled = true;
};

//timer starts when the start button is clicked
start.onclick = timer;

//timer stops when stop button is clicked
stop.onclick = () => {
  clearInterval(getTime);
  start.disabled = false;
};

//clear resets the timer back to the default value when clicked
clear.onclick = () => {
  displayTime.textContent = "00:00:00";
  seconds = 0;
  minutes = 0;
  hours = 0;
  start.disabled = false;
};
