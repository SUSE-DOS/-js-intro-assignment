// Set temp variables
let celsius = 0;
let farenheit = 0;
let kelvin = 0;

// Set celsius to farenheit and kelvin scaling factors
const celToFar = 32;
const celToKel = 273.15;

// Set farenheit to celsius and kelvin scaling factors
const farToCel = 32;
const farToKel = 459.67;

// Set kelvin to celsius and farenheit scaling factors
const kelToCel = 273.15;
const kelToFar = 459.67;

// Button clicked for celsius conversion function
function celsiusConvert() {
  celsius = document.getElementById("celsius-input").value;
  document.getElementById("cel-to-far").value = (
    celsius * 1.8 +
    celToFar
  ).toFixed(2);
  document.getElementById("cel-to-kel").value = (
    celsius * 1 +
    celToKel
  ).toFixed(2);

  console.log("Celsius =", celsius, "°C");
  console.log(
    "Celsius to Fahrenheit =",
    (celsius * 1.8 + celToFar).toFixed(2),
    "°F"
  );
  console.log("Celsius to Kelvin =", (celsius * 1 + celToKel).toFixed(2), "K");
}

// Button clicked for farenheit conversion function
function farenheitConvert() {
  farenheit = document.getElementById("farenheit-input").value;
  document.getElementById("far-to-cel").value = (
    (farenheit - farToCel) /
    1.8
  ).toFixed(2);
  document.getElementById("far-to-kel").value = (
    (farenheit * 1 + farToKel) /
    1.8
  ).toFixed(2);

  console.log("Fahrenheit =", farenheit, "°F");
  console.log(
    "Fahrenheit to Celsius =",
    ((farenheit - farToCel) / 1.8).toFixed(2),
    "°C"
  );
  console.log(
    "Fahrenheit to Kelvin =",
    ((farenheit * 1 + farToKel) / 1.8).toFixed(2),
    "K"
  );
}

// Button clicked for kelvin conversion function
function kelvinConvert() {
  kelvin = document.getElementById("kelvin-input").value;
  document.getElementById("kel-to-cel").value = (kelvin - kelToCel).toFixed(2);
  document.getElementById("kel-to-far").value = (
    kelvin * 1.8 -
    kelToFar
  ).toFixed(2);

  console.log("Kelvin =", kelvin, "K");
  console.log("Kelvin to Celsius =", (kelvin - kelToCel).toFixed(2), "°C");
  console.log(
    "Kelvin to Fahrenheit =",
    (kelvin * 1.8 - kelToFar).toFixed(2),
    "°F"
  );
}
