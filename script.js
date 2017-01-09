// FUNCTION THAT WILL RUN EVERY SECOND
setInterval(doSecond, 1000);
// setInterval(doMinute, 60000);
doMinute();
doHour();
function doSecond() {
  //console.log("Hello");
  const now = new Date();

  // BREAK THE CLOCK CIRCLE DOWN INTO 60 PARTS, 1 PER SECOND
  const seconds = now.getSeconds();
  //console.log("Seconds: " + seconds);
  const degPerSecond = ((seconds / 60)* 360) + 90;
  //console.log("Degrees: "+degPerSecond);
  const secondHand = document.querySelector(".second-hand");
  // ROTATE SECOND HAND
  secondHand.style.transform = `rotate(${degPerSecond}deg)`;
  if (degPerSecond == 90){
    doMinute();
  }
}

function doMinute() {
  const now = new Date();
  const minute = now.getMinutes();
  console.log(minute);
  const degPerMinute = ((minute/60) * 360) + 90;
  const minuteHand = document.querySelector(".min-hand");
  minuteHand.style.transform = `rotate(${degPerMinute}deg)`;
  if (degPerMinute == 90){
    doHour();
  }
}

function doHour() {
  const now = new Date();
  const hour = now.getHours();
  console.log(hour);
  const degPerHour = ((hour/12) * 360) + 90;
  const hourHand = document.querySelector(".hour-hand");
  hourHand.style.transform = `rotate(${degPerHour}deg)`;
}
