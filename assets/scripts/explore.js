// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const voiceSelect = document.getElementById('voice-select');
  const boton = document.querySelector('section#explore button');
  const textSpeak = document.getElementById('text-to-speak');
  const image = document.querySelector('section#explore img');
  let voices = [];

  speechSynthesis.onvoiceschanged = () => {
    const voices = speechSynthesis.getVoices();
    
    for (let i=0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.value = i;

      if (voices[i].default) {
        option.textContent += ' - DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }

    boton.addEventListener('click', () => {
      if (voiceSelect.value == 'select') {
        return;
      } else {
        const utter = new SpeechSynthesisUtterance(textSpeak.value);

        utter.onstart = () => {
          image.src = 'assets/images/smiling-open.png';
        };

        utter.onend = () => {
          image.src = 'assets/images/smiling.png';
        };

        utter.voice = voices[voiceSelect.value];
        speechSynthesis.speak(utter);
        console.log(voices)
      }
    });
  };
}