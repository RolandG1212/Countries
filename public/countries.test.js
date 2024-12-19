// This file tests that we are getting the correct API data from the righ URL.
// This is for the main page that displays all the countries.

let countriesTestData

// Set the URL to fetch the data from.
const countriesTestURL = "https://restcountries.com/v3.1/all"

// Fetch the country data from the URL.
try {
fetch(countriesTestURL)
  .then((res) => res.json())
  .then((data) => {
    integrationTest(data)
    countriesTestData = data
  })

} catch(error) {

  throw new Error('Fetch failed: ' + error.message)

}

// Test to see if we are getting at least one country from the API.
// I used South Georgia (SG) as a test and just checked if we are pulling the correct info. from SG.
function integrationTest(data) {


    unitTest()
    let foundTestCountry = new Boolean(false)

    // Search through the list of countries and find South Georgia. If found, then check a few details to verify...
    // ... that we are getting the correct data for our test country.
    data.forEach((country) => { 

        if (country.ccn3 === "239" && country.name.common === "South Georgia" && 
        country.capital?.[0] === "King Edward Point")
        {
            console.log("Countries: Country found: Integration test passed!")
            foundTestCountry = true;
        }
      
    }
        
    )

    // Throw error if we don't find our test country.
    if (foundTestCountry === false) {

        throw new error("Countries: Country not found: data not found!")

    }

} 


// Unit test for fetching the data.
// Test to see if we are hitting the correct URL.
function unitTest() {
  // Mock the global fetch function.
  window.fetch = function(countriesTestURL) {
      return new Promise((resolve, reject) => {
        // Simulate a successful response
        if (countriesTestURL === 'https://restcountries.com/v3.1/all') {
          resolve({
            ok: true,
            json: () => Promise.resolve({ message: 'Success' }),
          });
        } else {
          reject(new Error('Invalid URL'));
        }
      });
  };

  // Run the test
  fetch('https://restcountries.com/v3.1/all')
  .then(data => {
      console.log('Countries: Test passed!', data); 
  })  .catch(error => {
        console.error('Countries: Test failed!', error);
      });
}

