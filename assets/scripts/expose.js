// expose.js
var jsConfetti = new JSConfetti();
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectImage = document.querySelector('#horn-select');
  const image = document.querySelector('section#expose img');
  const sound = document.querySelector('audio.hidden');
  const volume = document.querySelector('div#volume-controls input#volume');
  const volImg = document.querySelector('div#volume-controls img');
  const buttn = document.querySelector('section#expose button');

  selectImage.addEventListener('change', (event) => {
    const choice = selectImage.value;
    if (choice == 'air-horn') {
      image.src = 'assets/images/air-horn.svg';
      image.alt = 'Air Horn Image';
      sound.src = 'assets/audio/air-horn.mp3';
    } else if (choice == 'car-horn') {
      image.src = 'assets/images/car-horn.svg';
      image.alt = 'Car Horn Image';
      sound.src = 'assets/audio/car-horn.mp3';
    } else {
      image.src = 'assets/images/party-horn.svg';
      image.alt = 'Party Horn Image';
      sound.src = 'assets/audio/party-horn.mp3';
    }
  });

  volume.addEventListener('input', () => {
    const choice = volume.value;
    sound.volume = choice / 100;
    if (choice == 0) {
      volImg.src = 'assets/icons/volume-level-0.svg';
      volImg.alt = 'Volume Level 0';
    } else if (choice < 33) {
      volImg.src = 'assets/icons/volume-level-1.svg';
      volImg.alt = 'Volume Level 1';
    } else if (choice < 67) {
      volImg.src = 'assets/icons/volume-level-2.svg';
      volImg.alt = 'Volume Level 2';
    } else {
      volImg.src = 'assets/icons/volume-level-3.svg';
      volImg.alt = 'Volume Level 3';
    }
  });

  buttn.addEventListener('click', () => {
    if (selectImage.value != 'party-horn') {
      sound.play();
    } else {
      sound.play();
      jsConfetti.addConfetti();
    }
  });
}