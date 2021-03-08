const deadline = new Date(2021, 8, 27, 9, 00);


setInterval(() => {
  var currentTime = new Date();
  var distance = deadline - currentTime;
  
  var days = Math.floor((distance / (1000 * 60 * 60 * 24)));
  var hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  var minutes = Math.floor((distance / (1000 * 60)) % 60);
  var seconds = Math.floor((distance / 1000) % 60);
  
  
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  
  document.getElementById("countdowndays").innerHTML = days;
  document.getElementById("countdownhours").innerHTML = hours;
  document.getElementById("countdownminutes").innerHTML = minutes;
  document.getElementById("countdownseconds").innerHTML = seconds;
}, 500)
