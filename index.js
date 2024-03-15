const Icon = document.querySelector("#Icon");
const Content = document.querySelector("#Content");
const initialText = document.querySelector("#initialText");
const finalText = document.querySelector("#finalText");
const btn = document.querySelector("#dobBtn");
const input = document.querySelector("#input");

const yearEl = document.querySelector("#year");
const monthEl = document.querySelector("#month");
const dayEl = document.querySelector("#day");
const hourEl = document.querySelector("#hour");
const minuteEl = document.querySelector("#minute");
const secondEl = document.querySelector("#second");

Icon.addEventListener("click", () => {
  Content.classList.toggle("hide");
});

const updateAge = () => {
  const currentDate = new Date();
  const dateDiff = currentDate - dateOfBirth;
  const year = Math.floor(dateDiff / (1000 * 60 * 60 * 365 * 24));
  const month = Math.floor((dateDiff / (1000 * 60 * 60 * 365 * 24)) % 12);
  const day = Math.floor((dateDiff / (1000 * 60 * 60 * 24)) % 30);
  const hour = Math.floor((dateDiff / (1000 * 60 * 60)) % 24);
  const minute = Math.floor((dateDiff / (1000 * 60)) % 60);
  const second = Math.floor((dateDiff / 1000) % 60);
  yearEl.innerHTML = makeTwoDigit(year);
  monthEl.innerHTML = makeTwoDigit(month);
  dayEl.innerHTML = makeTwoDigit(day);
  hourEl.innerHTML = makeTwoDigit(hour);
  minuteEl.innerHTML = makeTwoDigit(minute);
  secondEl.innerHTML = makeTwoDigit(second);
};

const makeTwoDigit = (number) => {
  return number > 9 ? number : `0${number}`;
};

const dobHandeler = () => {
  const dateString = input.value;
  dateOfBirth = new Date(dateString);

  if (dateOfBirth) {
    initialText.classList.add("hide");
    finalText.classList.remove("hide");

    setInterval(() => {
      updateAge(), 1000;
    });
  } else {
    finalText.classList.add("hide");
    initialText.classList.remove("hide");
  }
};

btn.addEventListener("click", dobHandeler);
