import templateFunction from './template/templateFunction.hbs';

const cardConteiner = document.querySelector('.country-info');

export default function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      return response.json();
    })
    .then(name => {
      // const valueCard = { name, };
      // console.log(valueCard);
      const markup = templateFunction(name);

      cardConteiner.innerHTML = markup;
    })
    .catch(error => {
      console.log(error);
    });
}
