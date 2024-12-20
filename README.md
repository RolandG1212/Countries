# Flag Explorer App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `PLEASE NOTE: I have added a node_modules.7z file to the codebase. The app worked perfectly when I built it on my desktop, but when I try to do an npm install to generate the node_modules folder from my json package files, it fails to run. If you have issues running the app, please use the node_modules folder from the zip file instead and the app will work correctly.`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


# Project files:
All the project files are in the public folder of the source code.



# Logic:
### `countries.js:`
Queries the URL, fetches the data and displays the country flags and some country data. Each flag is clickable, and when selected, the respective country's name is retrieved.
### `country.js` 
Fetches further country information from the URL, using country name, and displays the selected country on a separate page.



# Testing:
### `countries.test.js and country.test.js:`
Implement tests on the logic. They run unit tests, in that they check to see that we are querying the correct URL.\
They run integration tests, by taking an example country, South Georgia, to see if we are pulling the correct, requested data for that country. If this is true, then we assume that all other country data will be correct.\
\
The test scripts run automatically upon logic script implementation.


# Styling:
### `style.css:`
Styles the countries page.
### `country.css:`
Styles the country page.


# GIT deployment using yaml:
The YAML file is located in .github/workflows and is called superlinter.yml.\
The YAML file runs on any code commit to the main branch, and performs a linting on the codebase by checking out the repository, setting up Node.js and installing dependencies.


