import './css/styles.css';
import templateFunction from './template/templateFunction.hbs';
import fetchCountries from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
let inputValue;
input.addEventListener('input', evt => {
  evt.preventDefault();
  console.log(evt);
  inputValue = input.value;
  console.log(inputValue);

  fetchCountries(inputValue);

  // fetchCountries(inputValue);
});
