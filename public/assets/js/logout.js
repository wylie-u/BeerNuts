const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    console.log('testing');
    document.location.replace('/');
  } else {
    alert('Failed to log out.');
  }
};

// We need to make it so this event listener is only happening when user is logged in
document.querySelector('.logout').addEventListener('click', logout);
