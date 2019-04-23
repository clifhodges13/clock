function clock() {
  const fullDate = new Date();
  let hours = fullDate.getHours();
  let minutes = fullDate.getMinutes();
  let seconds = fullDate.getSeconds();

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (hours > 12) {
    hours = hours % 12;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  document.getElementById('hour').innerHTML = hours;
  document.getElementById('minute').innerHTML = ':' + minutes;
  document.getElementById('second').innerHTML = ':' + seconds;

  const secondHand = document.querySelector('.second-hand');
  const secondsDegrees = (seconds / 60) * 360;
  const minuteHand = document.querySelector('.minute-hand');
  const minutesDegrees = (minutes / 60) * 360;
  const hourHand = document.querySelector('.hour-hand');
  const hoursDegrees = (hours / 12) * 360;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(clock, 1000);
