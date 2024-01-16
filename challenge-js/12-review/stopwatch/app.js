const $timer = document.querySelector('.timer');
const $start = document.querySelector('.start');
const $stop = document.querySelector('.stop');
const $reset = document.querySelector('.reset');

const stopWatch = {
  startTime: 0,
  endTime: 0,
  elapsedTime: 0,
  interval: 0,
  isRunning: false,

  start() {
    if (!this.isRunning) {
      this.startTime = new Date().getTime() - this.elapsedTime;
      this.interval = setInterval(() => this.update(), 10);
      this.isRunning = true;
    }
  },

  stop() {
    clearInterval(this.interval);
    this.isRunning = false;
  },

  reset() {
    this.stop();
    this.elapsedTime = 0;
    $timer.innerText = `경과 시간: 00:00:00`;
  },

  update() {
    this.endTime = new Date().getTime();
    this.elapsedTime = this.endTime - this.startTime;

    const minutes = this.padZero(
      Math.floor((this.elapsedTime % (1000 * 60 * 60)) / (1000 * 60)),
    );
    const seconds = this.padZero(Math.floor((this.elapsedTime % (1000 * 60)) / 1000));
    const milliseconds = this.padZero(Math.floor((this.elapsedTime % 1000) / 10));

    $timer.innerText = `경과 시간: ${minutes}:${seconds}:${milliseconds}`;
  },

  padZero(value) {
    return value < 10 ? `0${value}` : value;
  },
};

function init() {
  $start.addEventListener('click', () => stopWatch.start());
  $stop.addEventListener('click', () => stopWatch.stop());
  $reset.addEventListener('click', () => stopWatch.reset());
}

init();
