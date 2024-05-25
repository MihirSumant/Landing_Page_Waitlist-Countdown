const countdown = () => {
  // getting the current time
  const theTime = new Date();
  const hours = theTime.getHours();
  const mins = theTime.getMinutes();
  const seconds = theTime.getSeconds();

  const hoursLeft = 24 - hours;
  const minsLeft = 60 - mins;
  const secondsLeft = 59 - seconds;

  document.getElementById("hour-number").innerHTML = hoursLeft;
  document.getElementById("minute-number").innerHTML = minsLeft;
  document.getElementById("second-number").innerHTML = secondsLeft;
};

countdown();
setInterval(countdown, 1000);
