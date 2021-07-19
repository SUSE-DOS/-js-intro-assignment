/* 
Amendments below, following feedback from Alok on 19/07/2021 
Scope stripped back to exactly the scope of the assignment
Files moved to src file as per instruction
Suggestions provided in pull_request_template
*/

// Celcius and user input
const celcius = parseFloat(prompt("Enter a temperature in C", 0));

// Conversion code
const celciusToFahrenheit = celcius * 1.8 + 32;
const celciusToKelvin = celcius + 273.15;

// Print the results
console.log(`Celcius: ${celcius}C`);
console.log(`Fahrenheit: ${celciusToFahrenheit}F`);
console.log(`Kelvin: ${celciusToKelvin}K`);

// Fahrenheit and user input
// const fahrenheit = parseFloat(prompt("Enter a temperature in F", 0));

// // Conversion code
// const fahrenheitToCelcius = (fahrenheit - 32) / 1.8;
// const fahrenheitToKelvin = (fahrenheit + 459.67) / 1.8;

// // Print the results
// console.log(`Fahrenheit: ${fahrenheit}C`);
// console.log(`Celcius: ${fahrenheitToCelcius}F`);
// console.log(`Kelvin: ${fahrenheitToKelvin}K`);

// Kelvin and user input
// const kelvin = parseFloat(prompt("Enter a temperature in K", 0));

// // Conversion code
// const kelvinToCelcius = kelvin - 273.15;
// const kelvinToFahrenheit = kelvin * 1.8 - 459.67;

// // Print the results
// console.log(`Kelvin: ${kelvin}K`);
// console.log(`Celcius: ${kelvinToCelcius}C`);
// console.log(`Fahrenheit: ${kelvinToFahrenheit}F`);
