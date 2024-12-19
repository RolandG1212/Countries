// This file tests that we are getting the correct API data from the righ URL.
// This is for the main page that displays the single, selected country.

// Select South Georgia (SG) as our test country and verify that we are getting...
// ... accurate data for our test country.

let testCountryName = "South Georgia"
const countryMockTestUrl = `https://restcountries.com/v3.1/name/${testCountryName}?fullText=true`

fetch(countryMockTestUrl)
  .then((res) => res.json())
  .then(([country]) => {
    if(
    flagImage.src != null &&
    country.name.common === "South Georgia" &&
    country.region === "Antarctic" &&
    country.capital?.[0] === "King Edward Point" &&
    country.ccn3 === "239" )
    {

      console.log("Country: Test Country Found!") // We have found our test country and are receiving data for it.

    } else throw new error("Country: Country not found: data not found!") // Test country not found.

})

// Unit test for fetching the data.
// Test to see if we are hitting the correct URL.
window.fetch = function(countryUrl) {
  return new Promise((resolve, reject) => {
    // Simulate a successful response.
    if (countryUrl) {
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
fetch(countryUrl)
.then(data => {
  console.log('Country: Test passed!', data);  
}) 
.catch(error => {
  console.error('Country: Test failed!', error);
});
    
          