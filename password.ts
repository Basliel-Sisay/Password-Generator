// Select the input element with id="input" and tell TypeScript it's an HTMLInputElement
const inp = document.querySelector('#input') as HTMLInputElement;
// Select the button element with id="generate" and cast it as an HTMLButtonElement
const button = document.querySelector('#generate') as HTMLButtonElement;
// Select the paragraph element with id="output" and cast it as an HTMLParagraphElement
const final = document.querySelector('#output') as HTMLParagraphElement;
// Define a string containing all lowercase letters
const small = "abcdefghijklmnopqrstuvwxyz";
// Define a string containing all uppercase letters
const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Define a string containing all numeric digits
const int = "0123456789";
// Define a string containing special symbols
const signs = "!@#$%^*&)(";

// Define a function named generator that takes a number (length) and returns a string (password)
function generator(length : number): string{
// Combine all character sets into one string
   const everything = small + capital + signs+ int;
// Initialize an empty string to build the password
   let password ='';
// Initialize a counter variable
   let x = 0;
// Loop until x reaches the desired password length and generate a random index between 0 and everything.length -1 and add that character at that random index to the password string
   while(x<length){
       const randoms = Math.floor(Math.random()* everything.length);
       password = password + everything[randoms];
       x=x+1;
   }
// Return the completed password string
   return password;
}

// Add a click event listener to the button
button.addEventListener('click', function(){
// Convert the input value (string) into a number using base 10
   const length = parseInt(inp.value, 10);
// Call the generator function with the chosen length to create a password
   const password = generator(length);
// Display the generated password inside the paragraph element
   final.textContent = password;

});
