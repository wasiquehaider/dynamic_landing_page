// DOM Elements
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

// Options
const showAmPm = true;

// Show Time
function showTime() {
  //   let today = new Date(2019, 06, 10, 12, 33, 30);
  let today = new Date();
  let hour = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  // Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  //12 Hour Format

  hour = hour % 12 || 12;

  //Output the time

  time.innerHTML = `${hour}<span>:</span>${addZero(
    minutes
  )}<span>:</span>${addZero(seconds)} ${showAmPm ? amPm : ""}`;

  setTimeout(showTime, 1000);
}

//Add Zero
function addZero(number) {
  return (parseInt(number, 10) < 10 ? "0" : "") + number;
}

// Set Background and greeting

function setBackgroundGreet() {
  let today = new Date();
  //   let today = new Date(2019, 06, 10, 12, 33, 30);
  let hour = today.getHours();

  if (hour < 12) {
    //   Morning
    document.body.style.backgroundImage = "url('../img/morning.jpg')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    //   Afternoon
    document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    greeting.textContent = "Good Afternoon";
  } else {
    //   Evening
    document.body.style.backgroundImage = "url('../img/night.jpg')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }
}

// Set Name
function setName(e) {
  if (e.type === "keypress") {
    // make sure Enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

// Get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

function setFocus(e) {
  if (e.type === "keypress") {
    // make sure Enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

// Get focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

//Run Functions

showTime();
setBackgroundGreet();
getName();
getFocus();
