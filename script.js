const form = document.querySelector("form");

// parameter
const second = 1000,
  minute = 60 * second,
  hour = 60 * minute,
  day = 24 * hour;

// start
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // creating today
  let now = new Date();
  let dd = String(now.getDate()).padStart(2, "0"),
    mm = String(now.getMonth() + 1).padStart(2, "0"),
    yyyy = now.getFullYear();
  now = `${mm}/${dd}/${yyyy}`;

  // getting input data
  const name = document.getElementById("name").value;
  const bMonth = document.getElementById("month").value.padStart(2, "0");
  const bDate = document.getElementById("date").value.padStart(2, "0");

  if (Number(bMonth) <= 12 && Number(bDate) <= 31) {

    let birthDate = `${bMonth}/${bDate}/${yyyy}`;

    if (now > birthDate) {
      birthDate = `${bMonth}/${bDate}/${yyyy + 1}`;
    }

    let timerId = setInterval(() => {
      let today = new Date().getTime();
      let target = new Date(birthDate).getTime();
      let difference = target - today;

      let dayLeft = Math.floor(difference / day);
      let hourLeft = Math.floor((difference % day) / hour);
      let minLeft = Math.floor((difference % hour) / minute);
      let secLeft = Math.floor((difference % minute) / second);

      // changing div by display property
      let timerDiv = document.getElementById("timer");
      form.style.display = "none";
      timerDiv.style.display = "block";

      // getting element of timer div
      const daysElement = document.querySelector(".days");
      const hoursElement = document.querySelector(".hours");
      const minutesElement = document.querySelector(".minutes");
      const secondsElement = document.querySelector(".seconds");
      const headerDIv = document.getElementById("headerTimer");

      // updating time
      daysElement.innerText = dayLeft;
      hoursElement.innerText = hourLeft;
      minutesElement.innerText = minLeft;
      secondsElement.innerText = secLeft;
      headerDIv.innerText = `Happy Birthday ${name.toUpperCase()}`;

      // end of timer
      if (difference < 0) {
        timerDiv.innerHTML = `<h1 id="headerTimer">Happy Birthday ${name.toUpperCase()}</h1>`;
        clearInterval(timerId);
      }

    }, second);

  } else location.reload()

});
