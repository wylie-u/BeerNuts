const signupFormHandler = async () => {
    // console.log('Function Fired');
  
    const name = document.querySelector('#signup-name').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
  
    console.log({ email });
    console.log({ name });
    console.log({ password });
    console.log(JSON.stringify({ name, email, password }));
    // add username to this if
    if (email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      console.log(response);
      if (response.ok) {
        document.location.replace('/profile');
        console.log('Response OK');
      } else {
        alert(response.statusText);
      }
    }
  };

  // Getting the signup form (not the sub button) by ID
let subBtn = document.getElementById('sign-up-form');

// Prevents form default action, calls function to post user signup to database
function handleForm(event) {
  event.preventDefault();
  signupFormHandler();
}

// Event Listener for form submit
subBtn.addEventListener('submit', handleForm);