// This file fetches the country data from the API and displays the flags with country data.

const countriesContainer = document.querySelector('.countries-container')
const filterByRegion = document.querySelector('.filter-by-region')
const searchInput = document.querySelector('.search-container input')
const themeChanger = document.querySelector('.theme-changer')

let allCountriesData
const countriesUrl = "https://restcountries.com/v3.1/all"

// Fetch the country data from the API.
try {
fetch(countriesUrl)
  .then((res) => res.json())
  .then((data) => {
    renderCountries(data) // Call the function that displays the country data on the front-end.
    allCountriesData = data
  })

} catch(error) {

  throw new Error('Fetch failed: ' + error.message)

}

// Display the countries data.
function renderCountries(data) {

  let foundTestCountry = new Boolean(false)


  countriesContainer.innerHTML = ''

  data.forEach((country) => {

    const countryCard = document.createElement('a')
    countryCard.classList.add('country-card')

    // Display country name, flag, population, region and capital.
    // Uses a display card to mount the country info. Card is clickable and takes you to the individual country data.
    countryCard.href = `/country.html?name=${country.name.common}`
    countryCard.innerHTML = `
          <img src="${country.flags.svg}" alt="${country.name.common} flag" />
          <div class="card-text">
              <h3 class="card-title">${country.name.common}</h3> 
              <p><b>Population: </b>${country.population.toLocaleString(
                'en-IN'
              )}</p>
              <p><b>Region: </b>${country.region}</p>
              <p><b>Capital: </b>${country.capital?.[0]}</p>
          </div>
  `
    countriesContainer.append(countryCard)
  })

}

