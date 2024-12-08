// script.js
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevents form from refreshing the page

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === "test@example.com" && password === "12345") {
    alert("Login Successful!");
  } 
  else {
    alert("Invalid Email or Password. Please try again.");
  }
  
});
