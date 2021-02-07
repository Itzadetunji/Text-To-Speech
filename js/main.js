//Init Speech Synthesis API
const synth = window.speechSynthesis;

const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitch-value');

// Init voices array
let voices = [];

const getVoices = () => {
    voices = synth.getVoices ();
    
    // Loop through voices and create an option for each one
    voices.forEach(voice => {
        //Create option element
        const option = document.createElement
        ('option');
        //Fill option with voice and language
        option.textContent = voice.name + ''
    });
}; 

getVoices();
if(synth.onvoiceschanged !== undefined){
    synth.onvoiceschanged = getVoices;
}