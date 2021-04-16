var buttonSub = document.getElementById('addBrewery');

// subBtn.addEventListener('submit', handleForm);
function handleForm2(event) {
  event.preventDefault();
  console.log('clicked here');
  // newFormHandler();
}

$('#submitNewBrewery').click(function () {
  $('.card-addBrewery').hide();
});

const newFormHandler = async (event) => {
  event.preventDefault();
  const thanksRow = document.getElementById('thankyou-row');
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
  // add .show/hide here
  thanksRow.classList.add('hide-form');
};

buttonSub.addEventListener('submit', handleForm2);
