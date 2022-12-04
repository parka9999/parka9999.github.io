const clock = document.querySelector("div#clock");
const todayDate = document.querySelector("div#date");


function getDate() {
  const date = new Date();
  const month = ["01","02","03","04","05","06","07","08","09","10","11","12"];
  const todayDay = String(date.getDate()).padStart(2, "0");
  todayDate.innerText = `${date.getFullYear()}-${month[date.getMonth()]}-${todayDay}`;
}

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}


getClock();
setInterval(getClock, 1000);
getDate();
setInterval(getDate, 1000);