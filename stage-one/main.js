let now = new Date();

let day = document.getElementById("day");
let time = document.getElementById("time");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDay = days[now.getDay()];
let currentTime = now.getTime();

day.innerHTML = `Day of the week: ${currentDay}`;
time.innerHTML = `UTC Time in milliseconds: ${currentTime}`;
