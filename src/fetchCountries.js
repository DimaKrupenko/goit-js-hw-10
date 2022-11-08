import templateFunction from './template/templateFunction.hbs';
import country from './template/country.hbs';
import Notiflix from 'notiflix';

const cardConteiner = document.querySelector('.country-info');
const ulConteiner = document.querySelector('.country-list');

export default function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(
          Notiflix.Notify.failure('Oops, there is no country with that name')
        );
      }
      return response.json();
    })
    .then(data => {
      const markup = templateFunction(data);
      if (data.length < 2) {
        cardConteiner.innerHTML = markup;
        ulConteiner.innerHTML = '';
      }
      if ((data.length > 2) & (data.length < 10)) {
        ulConteiner.innerHTML = country(data);
        cardConteiner.innerHTML = '';
      }
      if (data.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
    })
    .catch(error => {
      // console.log(error)
      Notiflix.Notify.failure('Oops, there is no country with that name');
    })
    .finally(() => console.log('Promise settled'));
}

// Handlebars.registerHelper('objValues', Object.values);
