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

  // Days img setter
  if (getTimeRemaining(deadline).days > 0) {
    switch(days_hundreds) {
      case 9:
          document.getElementById("days_hundreds").src = "assets/9.gif";
          break;
      case 8:
          document.getElementById("days_hundreds").src = "assets/8.gif";
          break;
      case 7:
          document.getElementById("days_hundreds").src = "assets/7.gif";
          break;
      case 6:
          document.getElementById("days_hundreds").src = "assets/6.gif";
          break;
      case 5:
          document.getElementById("days_hundreds").src = "assets/5.gif";
          break;
      case 4:
          document.getElementById("days_hundreds").src = "assets/4.gif";
          break;
      case 3:
          document.getElementById("days_hundreds").src = "assets/3.gif";
          break;
      case 2:
          document.getElementById("days_hundreds").src = "assets/2.gif";
          break;
      case 1:
          document.getElementById("days_hundreds").src = "assets/1.gif";
          break;
      case 0:
          document.getElementById("days_hundreds").src = "assets/0.gif";
    };
    switch(days_tens) {
      case 9:
          document.getElementById("days_tens").src = "assets/9.gif";
          break;
      case 8:
          document.getElementById("days_tens").src = "assets/8.gif";
          break;
      case 7:
          document.getElementById("days_tens").src = "assets/7.gif";
          break;
      case 6:
          document.getElementById("days_tens").src = "assets/6.gif";
          break;
      case 5:
          document.getElementById("days_tens").src = "assets/5.gif";
          break;
      case 4:
          document.getElementById("days_tens").src = "assets/4.gif";
          break;
      case 3:
          document.getElementById("days_tens").src = "assets/3.gif";
          break;
      case 2:
          document.getElementById("days_tens").src = "assets/2.gif";
          break;
      case 1:
          document.getElementById("days_tens").src = "assets/1.gif";
          break;
      case 0:
          document.getElementById("days_tens").src = "assets/0.gif";
    };
    switch(days) {
      case 9:
          document.getElementById("days").src = "assets/9.gif";
          break;
      case 8:
          document.getElementById("days").src = "assets/8.gif";
          break;
      case 7:
          document.getElementById("days").src = "assets/7.gif";
          break;
      case 6:
          document.getElementById("days").src = "assets/6.gif";
          break;
      case 5:
          document.getElementById("days").src = "assets/5.gif";
          break;
      case 4:
          document.getElementById("days").src = "assets/4.gif";
          break;
      case 3:
          document.getElementById("days").src = "assets/3.gif";
          break;
      case 2:
          document.getElementById("days").src = "assets/2.gif";
          break;
      case 1:
          document.getElementById("days").src = "assets/1.gif";
          break;
      case 0:
          document.getElementById("days").src = "assets/0.gif";
    };
    document.getElementById("days_line").src = "assets/_active.gif";
  };

  // Hrs img setter
  if (getTimeRemaining(deadline).hours > 0) {
    switch(hrs_tens) {
      case 9:
          document.getElementById("hrs_tens").src = "assets/9.gif";
          break;
      case 8:
          document.getElementById("hrs_tens").src = "assets/8.gif";
          break;
      case 7:
          document.getElementById("hrs_tens").src = "assets/7.gif";
          break;
      case 6:
          document.getElementById("hrs_tens").src = "assets/6.gif";
          break;
      case 5:
          document.getElementById("hrs_tens").src = "assets/5.gif";
          break;
      case 4:
          document.getElementById("hrs_tens").src = "assets/4.gif";
          break;
      case 3:
          document.getElementById("hrs_tens").src = "assets/3.gif";
          break;
      case 2:
          document.getElementById("hrs_tens").src = "assets/2.gif";
          break;
      case 1:
          document.getElementById("hrs_tens").src = "assets/1.gif";
          break;
      case 0:
          document.getElementById("hrs_tens").src = "assets/0.gif";
    };
    switch(hrs) {
      case 9:
          document.getElementById("hrs").src = "assets/9.gif";
          break;
      case 8:
          document.getElementById("hrs").src = "assets/8.gif";
          break;
      case 7:
          document.getElementById("hrs").src = "assets/7.gif";
          break;
      case 6:
          document.getElementById("hrs").src = "assets/6.gif";
          break;
      case 5:
          document.getElementById("hrs").src = "assets/5.gif";
          break;
      case 4:
          document.getElementById("hrs").src = "assets/4.gif";
          break;
      case 3:
          document.getElementById("hrs").src = "assets/3.gif";
          break;
      case 2:
          document.getElementById("hrs").src = "assets/2.gif";
          break;
      case 1:
          document.getElementById("hrs").src = "assets/1.gif";
          break;
      case 0:
          document.getElementById("hrs").src = "assets/0.gif";
    };
    document.getElementById("hrs_line").src = "assets/_active.gif";
  };

  // Mins img setter
  if (getTimeRemaining(deadline).minutes > 0) {
    switch(mins_tens) {
      case 9:
          document.getElementById("mins_tens").src = "assets/9.gif";
          break;
      case 8:
          document.getElementById("mins_tens").src = "assets/8.gif";
          break;
      case 7:
          document.getElementById("mins_tens").src = "assets/7.gif";
          break;
      case 6:
          document.getElementById("mins_tens").src = "assets/6.gif";
          break;
      case 5:
          document.getElementById("mins_tens").src = "assets/5.gif";
          break;
      case 4:
          document.getElementById("mins_tens").src = "assets/4.gif";
          break;
      case 3:
          document.getElementById("mins_tens").src = "assets/3.gif";
          break;
      case 2:
          document.getElementById("mins_tens").src = "assets/2.gif";
          break;
      case 1:
          document.getElementById("mins_tens").src = "assets/1.gif";
          break;
      case 0:
          document.getElementById("mins_tens").src = "assets/0.gif";
    };
    switch(mins) {
      case 9:
          document.getElementById("mins").src = "assets/9.gif";
          break;
      case 8:
          document.getElementById("mins").src = "assets/8.gif";
          break;
      case 7:
          document.getElementById("mins").src = "assets/7.gif";
          break;
      case 6:
          document.getElementById("mins").src = "assets/6.gif";
          break;
      case 5:
          document.getElementById("mins").src = "assets/5.gif";
          break;
      case 4:
          document.getElementById("mins").src = "assets/4.gif";
          break;
      case 3:
          document.getElementById("mins").src = "assets/3.gif";
          break;
      case 2:
          document.getElementById("mins").src = "assets/2.gif";
          break;
      case 1:
          document.getElementById("mins").src = "assets/1.gif";
          break;
      case 0:
          document.getElementById("mins").src = "assets/0.gif";
    };
    document.getElementById("mins_line").src = "assets/_active.gif";
  };

  // Secs img setter
  if (getTimeRemaining(deadline).seconds > 0) {
    switch(secs_tens) {
      case 9:
          document.getElementById("secs_tens").src = "assets/9.gif";
          break;
      case 8:
          document.getElementById("secs_tens").src = "assets/8.gif";
          break;
      case 7:
          document.getElementById("secs_tens").src = "assets/7.gif";
          break;
      case 6:
          document.getElementById("secs_tens").src = "assets/6.gif";
          break;
      case 5:
          document.getElementById("secs_tens").src = "assets/5.gif";
          break;
      case 4:
          document.getElementById("secs_tens").src = "assets/4.gif";
          break;
      case 3:
          document.getElementById("secs_tens").src = "assets/3.gif";
          break;
      case 2:
          document.getElementById("secs_tens").src = "assets/2.gif";
          break;
      case 1:
          document.getElementById("secs_tens").src = "assets/1.gif";
          break;
      case 0:
          document.getElementById("secs_tens").src = "assets/0.gif";
    };
    switch(secs) {
      case 9:
          document.getElementById("secs").src = "assets/9.gif";
          break;
      case 8:
          document.getElementById("secs").src = "assets/8.gif";
          break;
      case 7:
          document.getElementById("secs").src = "assets/7.gif";
          break;
      case 6:
          document.getElementById("secs").src = "assets/6.gif";
          break;
      case 5:
          document.getElementById("secs").src = "assets/5.gif";
          break;
      case 4:
          document.getElementById("secs").src = "assets/4.gif";
          break;
      case 3:
          document.getElementById("secs").src = "assets/3.gif";
          break;
      case 2:
          document.getElementById("secs").src = "assets/2.gif";
          break;
      case 1:
          document.getElementById("secs").src = "assets/1.gif";
          break;
      case 0:
          document.getElementById("secs").src = "assets/0.gif";
    };
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