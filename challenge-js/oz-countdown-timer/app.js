const $day = document.querySelector("#day");
const $hour = document.querySelector("#hour");
const $minute = document.querySelector("#minute");
const $second = document.querySelector("#second");
const $timerBtn = document.querySelector(".timer-btn");
const $resetBtn = document.querySelector(".reset-btn");

let interval = null;

function getTargetTime() {
  const currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  let day = $day.value === "00" ? currentDate.getDate() : $day.value.padStart(2, "0");
  let hour =
    $day.value === "00" && $hour.value === "00"
      ? currentDate.getHours()
      : $hour.value.padStart(2, "0");
  let minute = $minute.value.padStart(2, "0");
  let second = $second.value.padStart(2, "0");

  return new Date(year, month, day, hour, minute, second);
}

function timer(targetTime) {
  const currentDate = new Date();
  const timeDifference = targetTime.getTime() - currentDate.getTime();
  const remainingSeconds = Math.floor(timeDifference / 1000);

  if (remainingSeconds > 0) {
    $timerBtn.style.visibility = "hidden";
    $resetBtn.style.visibility = "visible";

    const days = Math.floor(remainingSeconds / (3600 * 24));
    const hours = Math.floor(remainingSeconds / 3600);
    const minutes = Math.floor((remainingSeconds % 3600) / 60);
    const seconds = remainingSeconds % 60;

    $day.value = String(days).padStart(2, "0");
    $hour.value = String(hours).padStart(2, "0");
    $minute.value = String(minutes).padStart(2, "0");
    $second.value = String(seconds).padStart(2, "0");
  } else {
    alert("timeover");
    clearInterval(interval);
    $timerBtn.style.visibility = "visible";
    $resetBtn.style.visibility = "hidden";
    $second.value = "00";
  }
}

$timerBtn.addEventListener("click", () => {
  const targetTime = getTargetTime();
  interval = setInterval(() => timer(targetTime), 1000);
});

$resetBtn.addEventListener("click", () => {
  clearInterval(interval);

  $timerBtn.style.visibility = "visible";
  $resetBtn.style.visibility = "hidden";

  $day.value = "00";
  $hour.value = "00";
  $minute.value = "00";
  $second.value = "00";
});
