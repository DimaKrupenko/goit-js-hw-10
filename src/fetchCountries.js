import templateFunction from './template/templateFunction.hbs';
import country from './template/country.hbs';

const cardConteiner = document.querySelector('.country-info');
const ulConteiner = document.querySelector('.country-list');

export default function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      // const valueCard = { name, };
      // console.log(valueCard);
      const markup = templateFunction(data);
      if (data.length < 2) {
        cardConteiner.innerHTML = markup;
        cardConteiner.remove = countryValue;
      }
      if (data.length > 2) {
        const countryValue = country(data);
        ulConteiner.innerHTML = countryValue;
        ulConteiner.remove = markup;
      }
    })
    .catch(error => {
      console.log(error);
    });
}
