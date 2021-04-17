var buttonSub = document.getElementById('addBrewery');
var thanksRow = document.getElementById('thankyou-row');
var addBrewRow = document.getElementById('add-brewery-row');
var submitBreweryBtn = document.getElementById('submitNewBrewery');

function hideForm() {
  thanksRow.classList.remove('hide-form');
  addBrewRow.classList.add('hide-form');
}
submitBreweryBtn.addEventListener('click', hideForm);

const newFormHandler = async (event) => {
  event.preventDefault();
  const cityName = document.querySelector('#city_name').value.trim();
  const breweryName = document.querySelector('#name').value.trim();
  const location = document.querySelector('#location').value.trim();
  const phNumber = document.querySelector('#phone_number').value.trim();
  const website = document.querySelector('#website').value.trim();
  const food = document.querySelector('#food').value.trim();
  const outdoor = document.querySelector('#outdoor_seating').value.trim();

  {
    const response = await fetch(`/api/brewery`, {
      method: 'POST',
      body: JSON.stringify({
        city_name: cityName,
        name: breweryName,
        location: location,
        phone_number: phNumber,
        food: food,
        outdoor_seating: outdoor,
        website: website,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('successful');
  }

};

buttonSub.addEventListener('submit', newFormHandler);
