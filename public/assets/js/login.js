const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();
  
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};
const signupFormHandler = async () => {
  console.log('Function Fired');

  const name = document.querySelector('#signup-name').value.trim();
  const email = document.querySelector('#signup-email').value.trim();
  const password = document.querySelector('#signup-password').value.trim();
  // add username to this if
  if (email && password) {
    console.log(JSON.stringify({ email, password }));
    const response = await fetch('/api/users', {
      
      method: 'POST',
      
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
      // body: {
      //   name: 'MR DUDE',
      //   email: 'fakeemail@gmail.com',
      //   password: 'testpassword123',
      // },
      
    });
    console.log(response)
    if (response.ok) {
    
      // document.location.replace('/profile.html');
      console.log('Response OK');
    } else {
      alert(response.statusText);
    }
  }
};

// document
//   .querySelector('.login-form')
//   .addEventListener('submit', loginFormHandler);

// document
//   .querySelector('.signup-form')
//   .addEventListener('submit', signupFormHandler);

// Getting the signup form (not the sub button) by ID
let subBtn = document.getElementById('sign-up-form');

// Prevents form default action, calls function to post user signup to database
function handleForm(event) {
  event.preventDefault();
  signupFormHandler();
}

// Event Listener for form submit
subBtn.addEventListener('submit', handleForm);

// //login function
// let loginBtn = document.querySelector('.login-form');

// function handlerForm(event){
//   event.preventDefault();
//   alert("clicked");
  
//   loginFormHandler();
// }

// loginBtn.addEventListener('submit', handlerForm);