// Variables for Brewery Buttons - Testing with ID but we may want to get all buttons by class and sort from there to handle click events?
var breweryTitle = document.getElementById('brewery-title');
var breweryInfoList = document.getElementById('brewery-info-list');
var breweryBtnLink = document.getElementById('brewery-link');

// Variable for Drop down List
var breweryDropDown = document.querySelector('#brewery-drop-down');

// Fetching All Brewery Data and passing to brewery list function
async function getAllBreweries() {
  // Storing response
  const response = await fetch('/api/brewery');
  // Storing data in form of JSON
  var data = await response.json();
  // Passing JSON to getList to display breweries.
  getList(data);
}
getAllBreweries();

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

// Function to print brewery to dropdown list
function getList(breweryData) {
  for (let i = 0; i < breweryData.length; i++) {
    const breweryDataSingle = breweryData[i];
    const dataId = breweryData[i].id;
    const breweryName = breweryData[i].name;
    const dropDownItem = `<a class="dropdown-item" href="#" data-id="${dataId}">${breweryName}</a>`;
    // printList(dropDownItem, breweryDataSingle);
    const newLink = document.createElement('a');
    newLink.textContent = breweryName;
    newLink.classList.add('dropdown-item');
    newLink.setAttribute('data-id', dataId);
    breweryDropDown.appendChild(newLink);
  }
  addListHandler();
}

function printList(item, data) {
  breweryDropDown.append(item);
}

// Adds event listener to every brewery list item, passes data-id to fetch function
function addListHandler() {
  let breweryLi = document.querySelectorAll('.dropdown-item');
  breweryLi.forEach((element) => {
    let breweryLiId = element.getAttribute('data-id');
    element.addEventListener('click', function () {
      getBreweryData(breweryLiId);
    });
  });
}
