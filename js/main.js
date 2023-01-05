function displayTime() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];
  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var dateTime = new Date();
  var hrs = dateTime.getHours() - 12;
  var min = dateTime.getMinutes();
  var sec = dateTime.getSeconds();
  var date = days[dateTime.getDay()];
  var monthDate = Months[dateTime.getDate()];
  var daysDate = dateTime.getDate();

  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < 10) {
    min = "0" + min;
  }

  document.getElementById("hour").innerHTML = hrs + ":";
  document.getElementById("minutes").innerHTML = min + ":";
  document.getElementById("seconds").innerHTML = sec;
  document.getElementById("date").innerHTML = date;
  document.getElementById("daysDates").innerHTML = monthDate + " " + daysDate;
}
setInterval(displayTime, 10);
