var buttonsub= document.getElementById('addBrewery')
console.log(buttonsub)
// subBtn.addEventListener('submit', handleForm);
function handleForm2(event) {
    // event.preventDefault();
    console.log("clicked here");
    breweryForm();
  }

buttonsub.addEventListener('submit', handleForm2);
function breweryForm() {
    
    console.log("clicked")
 
   const cityName= document.querySelector("#city_name").value.trim();
   const breweryName= document.querySelector("#name").value.trim();
   const location= document.querySelector("#location").value.trim();
   const phNumber= document.querySelector("#phone_number").value.trim();
   const food= document.querySelector("#food").value.trim();
   const outdoor= document.querySelector("#outdoor_seating").value.trim();



fetch("/api/brewery", 
console.log("hellloooo"),
      { 
  
      // Adding method type
  
      method: "POST", 
  
      // Adding body or contents to send 
      
  
      body: JSON.stringify({
          "city_name" : cityName,
          "name" : breweryName,
          "location": location,
          "phone_number": phNumber,
          "food": food,
          "outdoor_seating": outdoor
      }),
      headers: {
        'Content-Type': 'application/json',
      },
  });
  
  }