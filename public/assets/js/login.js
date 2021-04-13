const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-password').value.trim();
  console.log('work')
    if (email && password) {
      // console.log(JSON.stringify({ email, password }))
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
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
  // add username to this if
    if (email && password) {
      console.log(JSON.stringify({ email, password }))
      const response = await fetch('/api/usersRoutes', {
        method: 'POST',
        // add username later
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile.html');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('#signup-sub-button', signupFormHandler);
  