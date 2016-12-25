var deadline = '2017-03-20';
function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
};

function update() {
  // Find out the value for each clock number
  var days_hundreds = Math.floor(getTimeRemaining(deadline).days/100);
  var days_tens = Math.floor(getTimeRemaining(deadline).days/10) % 10;
  var days = getTimeRemaining(deadline).days % 10;
  var hrs_tens = Math.floor(getTimeRemaining(deadline).hours/10);
  var hrs = getTimeRemaining(deadline).hours % 10;
  var mins_tens = Math.floor(getTimeRemaining(deadline).minutes/10);
  var mins = getTimeRemaining(deadline).minutes % 10;
  var secs_tens = Math.floor(getTimeRemaining(deadline).seconds/10);
  var secs = getTimeRemaining(deadline).seconds % 10;

  // Thanks to Asu for finding a more efficient code -w-
  if (getTimeRemaining(deadline).days > 0) {
    document.getElementById("days_hundreds").src = "assets/" + string(days_hundreds) + ".gif";
    document.getElementById("days_tens").src = "assets/" + string(days_tens) + ".gif";
    document.getElementById("days").src = "assets/" + string(days) + ".gif";
    document.getElementById("hrs_tens").src = "assets/" + string(hrs_tens) + ".gif";
    document.getElementById("hrs").src = "assets/" + string(hrs) + ".gif";
    document.getElementById("mins_tens").src = "assets/" + string(mins_tens) + ".gif";
    document.getElementById("mins").src = "assets/" + string(mins) + ".gif";
    document.getElementById("secs_tens").src = "assets/" + string(secs_tens) + ".gif";
    document.getElementById("secs").src = "assets/" + string(secs) + ".gif";
  };
  
  // Handles tick-tock
  var tick = new Audio('assets/tick.wav');
  var tock = new Audio('assets/tock.wav');
  if ((getTimeRemaining(deadline).total % 2) == 0) {
    tick.play();
  } else {
    tock.play();
  };
};

update(); // run function once at first to avoid delay
var timeinterval = setInterval(update, 1000);
