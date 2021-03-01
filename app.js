function showTime() {
  var d = new Date();
  var date = d.getDate();
  var month = d.getMonth();
  var montharr = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  month = montharr[month];
  var year = d.getFullYear();
  var hour = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  var session = "AM";
  var greet;

  if (hour < 12) {
    var greet = "Good Morning ";
  }

  if (hour >= 12 && hour <= 18) {
    var greet = "Good Afternoon ";
  }

  if (hour >= 18 && hour <= 24) {
    var greet = "Good Evening ";
  }

  if (hour == 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour = hour - 12;
    session = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  var time = hour + ":" + min + ":" + sec + " " + session;

  document.getElementById("date").innerHTML = date + " " + month + " " + year;
  document.getElementById("greet").innerHTML = greet;
  document.getElementById("clock").innerHTML = time;
}

setInterval(showTime, 1000);
