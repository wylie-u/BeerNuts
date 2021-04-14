// Variables for Brewery Buttons - Testing with ID but we may want to get all buttons by class and sort from there to handle click events?
let breweryTitle = document.getElementById('brewery-title');
let breweryInfoList = document.getElementById('brewery-info-list');
let breweryBtnLink = document.getElementById('brewery-link');

// Variable for Drop down List
let breweryDropDown = document.getElementById('brewery-drop-down');

// Api URL as variable
const api_url = '/api/brewery';

// Fetch function to our api using data-id from whichever button was clicked
function getBreweryData(id) {
  fetch(`/api/brewery/${id}`)
    .then((response) => response.json())
    .then((data) => {
      printCard(data);
    });
}

// //CityNameFetch
// function getBreweryData(id) {
//   fetch(`/api/brewery/${city_name}`)
//     .then((response) => response.json())
//     .then((data) => {
//       printCard(data);
//     });
// }

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

// Function to print brewery to dropdown list
const getList = (breweryData) => {
  for (let i = 0; i < 10; i++) {
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
};

const printList = (item, data) => {
  console.log(item);
  breweryDropDown.append(item);
  console.log(data);
};

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
  getList(data);
}
getapi(api_url);
