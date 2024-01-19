const userEmail: string = new URLSearchParams(window.location.search).get('email');
document.querySelector('.user-email').innerHTML = userEmail;
