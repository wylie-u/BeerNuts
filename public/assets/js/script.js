// Variables for Brewery Buttons - Testing with ID but we may want to get all buttons by class and sort from there to handle click events?
let breweryTitle = document.getElementById('brewery-title');
let breweryInfoList = document.getElementById('brewery-info-list');
let breweryBtnLink = document.getElementById('brewery-link');


// Variable for all buttons
// let breweryBtn = document.querySelectorAll('.brewery-button');

// Fetch function to our api using data-id from whichever button was clicked
function getBreweryData(id) {
  fetch(`/api/brewery/${id}`)
    .then((response) => response.json())
    .then((data) => {
      printCard(data);
    });
}

// Print data onto the card
function printCard(data) {
  let cardLink = breweryBtnLink;
  console.log(data);
  breweryTitle.textContent = data.name;
  breweryInfoList.innerHTML = `<li>City: ${data.city_name}</li>
  <li>Address: ${data.location}</li>
  <li>Phone Number: ${data.phone_number}</li>
  <li>Food: ${data.food}</li>
  <li>Outdoor Seating: ${data.outdoor_seating}
  `;
  cardLink.setAttribute('href', `https://${data.website}`);
}

// Adds event listener to every brewery button, passes data-id to fetch function
function addHandler() {
  let breweryBtn = document.querySelectorAll('.brewery-button');
  breweryBtn.forEach((element) => {
    let breweryId = element.getAttribute('data-id');
    element.addEventListener('click', function () {
      getBreweryData(breweryId);
    });
  });
}

addHandler();

const api_url = 
      "http://localhost:3001/api/brewery";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    
}
getapi(api_url);