function setTime() {
  const sec_hand = document.querySelector(".sec");
  const min_hand = document.querySelector(".min");
  const hour_hand = document.querySelector(".hour");
  const date = new Date();
  sec_hand.style.transform = `rotate(${date.getSeconds() * 6 + 90}deg)`;
  min_hand.style.transform = `rotate(${date.getMinutes() * 6 + 90}deg)`;
  hour_hand.style.transform = `rotate(${date.getHours() * 30 + 90}deg)`;
}

setInterval(setTime, 1000);
