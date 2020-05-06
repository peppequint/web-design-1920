console.log('index.js');

const sectionButtonOne = document.getElementById('section__button-one');
const sectionButtonTwo = document.getElementById('section__button-two');
const changeButton = document.getElementById('color__changer');

const setColor = () => {
  const randomColorOne = Math.floor(Math.random() * 16777215).toString(16);
  const randomColorTwo = Math.floor(Math.random() * 16777215).toString(16);
  const randomColorThree = Math.floor(Math.random() * 16777215).toString(16);
  const randomColorFour = Math.floor(Math.random() * 16777215).toString(16);

  console.log(randomColorOne);

  sectionButtonOne.style.boxShadow = `inset 0 0 50px #${randomColorOne}, inset 20px 0 80px #${randomColorTwo}, inset -20px 0 80px #${randomColorThree}, inset 20px 0 300px #${randomColorFour}, inset -20px 0 300px #0ff,
  0 0 50px rgb(252, 202, 202), -10px 0 80px #f0f, 10px 0 80px #0ff`;

  sectionButtonTwo.style.boxShadow = `inset 0 0 50px #${randomColorOne}, inset 20px 0 80px #${randomColorTwo}, inset -20px 0 80px #${randomColorThree}, inset 20px 0 300px #${randomColorFour}, inset -20px 0 300px #0ff,
  0 0 50px rgb(252, 202, 202), -10px 0 80px #f0f, 10px 0 80px #0ff`;
};

changeButton.addEventListener('click', setColor);
