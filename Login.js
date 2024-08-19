const loginForm = document.getElementById('login-form');
  const loginBtn = document.getElementById('login-btn');
  const showPasswordBtn = document.getElementById('show-password-btn');
  const passwordInput = document.getElementById('password');

  showPasswordBtn.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      showPasswordBtn.textContent = 'Hide Password';
    } else {
      passwordInput.type = 'password';
      showPasswordBtn.textContent = 'Show Password';
    }
  });

  loginBtn.addEventListener('click', function() {
    // Validate username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Waombakayange90@gmail.com' && password === 'waomba200') {
      // Redirect to dashboard page
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid username or password');
    }
  });