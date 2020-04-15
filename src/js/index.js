console.log('index.js');

// document.addEventListener('keypress', (e) => {
//   if (e.keyCode == 9) {
//     e.keyCode == 32;
//   }
// });

let travelToWork = document.getElementById('to-work');
let travelToHome = document.getElementById('to-home');

const phaseOne = document.querySelector('.phase__one');
const phaseOneBtn = document.querySelector('.phase__one-btn');

const phaseTwo = document.querySelector('.phase__two');
const phaseTwoBtn = document.querySelector('.phase__two-btn');

const phaseThree = document.querySelector('.phase__three');
const phaseThreeBtn = document.querySelector('.phase__three-btn');

const phaseFour = document.querySelector('.phase__four');

const from = document.getElementById('from');
const to = document.getElementById('to');

const time = document.getElementById('departure');

const day = document.getElementById('day-number');

const month = document.getElementById('month');

function showRouteWork() {
  if (travelToWork.checked) {
    phaseOne.style.display = 'block';

    from.defaultValue = 'Eindhoven';
    to.defaultValue = 'Amsterdam';
  }
}

function showRouteHome() {
  if (travelToHome.checked) {
    phaseOne.style.display = 'block';

    from.defaultValue = 'Amsterdam';
    to.defaultValue = 'Eindhoven';
  }
}

phaseOneBtn.addEventListener('click', () => {
  phaseTwo.style.display = 'block';
  setTime();
});

function setTime() {
  const d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();

  if (h < 10) {
    h = '0' + h;
  }

  if (m < 10) {
    m = '0' + m;
  }

  currentTime = h + ':' + m;

  time.value = currentTime;
}

phaseTwoBtn.addEventListener('click', () => {
  phaseThree.style.display = 'block';
  setDay();
  setMonth();
});

function setDay() {
  const date = new Date();
  const d = date.getDate();

  day.value = d;
}

function setMonth() {
  const date = new Date();
  const m = date.getMonth();

  month.selectedIndex = m;
}

phaseThreeBtn.addEventListener('click', () => {
  phaseFour.style.display = 'block';
});
