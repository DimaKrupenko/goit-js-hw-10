import './css/styles.css';
import fetchCountries from './fetchCountries';
import Debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
let inputValue;
input.addEventListener('input', Debounce(onInput, DEBOUNCE_DELAY));

function onInput(evt) {
  evt.preventDefault();
  inputValue = input.value.trim();

  fetchCountries(inputValue);
}
