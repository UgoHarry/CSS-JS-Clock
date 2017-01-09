// FUNCTION THAT WILL RUN EVERY SECOND
setInterval(doSecond, 1000);
// GET THE CURRENT MINUTE
doMinute();
// GET THE CURRENT HOUR
doHour();

function doSecond() {
  const now = new Date();
  const seconds = now.getSeconds();
  // BREAK THE CLOCK CIRCLE DOWN INTO 60 PARTS, 1 PER SECOND
  const degPerSecond = ((seconds / 60)* 360) + 90;
  const secondHand = document.querySelector(".second-hand");
  // ROTATE SECOND HAND
  secondHand.style.transform = `rotate(${degPerSecond}deg)`;
  if (degPerSecond == 90){ // IF THE SECOND HAND GETS TO '12', RUN THE MINUTE FUNCTION
    doMinute();
  }
}

function doMinute() {
  const now = new Date();
  const minute = now.getMinutes();
  // BREAK THE CLOCK CIRCLE DOWN INTO 60 PARTS, 1 PER MINUTE
  const degPerMinute = ((minute/60) * 360) + 90;
  const minuteHand = document.querySelector(".min-hand");
  minuteHand.style.transform = `rotate(${degPerMinute}deg)`;
  if (degPerMinute == 90){ // IF THE MINUTE HAND GETS TO '12', RUN THE HOUR FUNCTION
    doHour();
  }
}

function doHour() {
  const now = new Date();
  const hour = now.getHours();
  console.log(hour);
  // BREAK THE CLOCK CIRCLE DOWN INTO 12 PARTS, 1 PER HOUR
  const degPerHour = ((hour/12) * 360) + 90;
  const hourHand = document.querySelector(".hour-hand");
  hourHand.style.transform = `rotate(${degPerHour}deg)`;
}
