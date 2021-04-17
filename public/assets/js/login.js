const loginFormHandler = async () => {
  console.log('Function Fired');
  //event.preventDefault();
  // Collect values from the login form
  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();

    if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert('logged in!')
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};


//login function
let loginBtn = document.getElementById('login-form');

function handlerForm(event) {``
  event.preventDefault();
  
  console.log('test');

  loginFormHandler();
}

loginBtn.addEventListener('submit', handlerForm);

