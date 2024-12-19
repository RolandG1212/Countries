// This file displays the selected country data on a new page.

const countryName = new URLSearchParams(location.search).get('name')
const flagImage = document.querySelector('.country-details img')
const countryNameH1 = document.querySelector('.country-details h1')
const nativeName = document.querySelector('.native-name')
const population = document.querySelector('.population')
const region = document.querySelector('.region')
const subRegion = document.querySelector('.sub-region')
const capital = document.querySelector('.capital')
const topLevelDomain = document.querySelector('.top-level-domain')
const currencies = document.querySelector('.currencies')
const languages = document.querySelector('.languages')
const borderCountries = document.querySelector('.border-countries')

// Set the URL for fetching the selected country.
const countryUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`

// Fetch the selected country.
fetch(countryUrl)
  .then((res) => res.json())
  .then(([country]) => {
    flagImage.src = country.flags.svg
    countryNameH1.innerText = country.name.common
    population.innerText = country.population.toLocaleString('en-IN')
    region.innerText = country.region
    topLevelDomain.innerText = country.tld.join(', ')

    // Diplsay the country flag and additional country details.
    if (country.capital) {
      capital.innerText = country.capital?.[0]
    }

    if (country.subregion) {
      subRegion.innerText = country.subregion
    }

    if (country.name.nativeName) {
      nativeName.innerText = Object.values(country.name.nativeName)[0].common
    } else {
      nativeName.innerText = country.name.common
    }

    if (country.currencies) {
      currencies.innerText = Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(', ')
    }

    if (country.languages) {
      languages.innerText = Object.values(country.languages).join(', ')
    }

  })