console.log('hi');
// ** local storage **
localStorage.setItem('name', 'Bob');
// console.log(localStorage.getItem('name'));
localStorage.removeItem('name');

// ** session storage **
sessionStorage.setItem('name', 'John');
console.log(sessionStorage.getItem('name', 'John'));
// sessionStorage.removeItem('name');
sessionStorage.setItem('name', 'Bob');

// ** cookie **
document.cookie = 'name=Kyle; expires=' + new Date(2025, 0, 1).toUTCString();
document.cookie = 'lastName=Kyle; expires=' + new Date(2025, 0, 1).toUTCString();
console.log(document.cookie);
