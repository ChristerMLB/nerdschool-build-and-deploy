import {  getSecondsLeftOfYear, getTimeString } from "./clock";

const timeContainer = document.getElementById("time");
const timeLeft = document.getElementById("minutes-left");

const render = () => {
  const now = new Date();
  timeLeft.innerText = (getSecondsLeftOfYear(now)/60).toFixed(2);
  timeContainer.innerText = getTimeString(now);
}

render();
setInterval(render, 1000);
