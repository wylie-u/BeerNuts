// Variables for Brewery Buttons - Testing with ID but we may want to get all buttons by class and sort from there to handle click events?
let averyBtn = document.getElementById('avery-btn');
let breweryTitle = document.getElementById('brewery-title');

// Fetch function to our api
function getAveryData() {
  console.log('AVERY CLICKED');
  fetch('/api/brewery/2')
    .then((response) => response.json())
    .then((data) => {
      printCard(data);
      //   console.log(data);
    });
}

// Print data onto the bootstrap card
function printCard(data) {
  console.log(data.name);
  breweryTitle.textContent = data.name;
}

averyBtn.addEventListener('click', getAveryData);
