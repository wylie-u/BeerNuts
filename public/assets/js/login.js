const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();
  console.log('work');
  if (email && password) {
    const response = await fetch('/api/usersRoutes/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};
const signupFormHandler = async () => {
  console.log('Function Fired');

  // const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#signup-email').value.trim();
  const password = document.querySelector('#signup-password').value.trim();
  // add username to this if
  if (email && password) {
    console.log(JSON.stringify({ email, password }));
    const response = await fetch('/api/usersRoutes', {
      method: 'POST',
      // add username later
      // body: JSON.stringify({ email, password }),
      body: {
        name: 'MR DUDE',
        email: 'fakeemail@gmail.com',
        password: 'testpassword123',
      },
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // document.location.replace('/profile.html');
      console.log('Response OK');
    } else {
      alert('Failed to sign up.');
    }
  }
};

// document
//   .querySelector('.login-form')
//   .addEventListener('#login-sub-button', loginFormHandler);

// document
//   .querySelector('.signup-form')
//   .addEventListener('#signup-sub-button', signupFormHandler);

//Getting the signup form (not the sub button) by ID
let subBtn = document.getElementById('sign-up-form');

// Prevents form default action, calls function to post user signup to database
function handleForm(event) {
  event.preventDefault();
  signupFormHandler();
}

// Event Listener for form submit
subBtn.addEventListener('submit', handleForm);
