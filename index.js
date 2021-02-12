let clock = setInterval(showTime, 1000);
//clock function
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let day = time.getDate();
  let month = time.getMonth();
  let year = time.getFullYear();
  let currentTime = hour + ":" + min + ":" + sec;
  let currentDate = day + "/" + month + "/" + year;
  document.getElementById("clock").innerHTML = currentTime;
  document.getElementById("date").innerHTML = currentDate;
}
//start function
function startTime() {
  clock = setInterval(showTime, 1000);
}
