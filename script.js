// This function runs when the user clicks the "Convert" button
function convertDogAge() {
  // Get the input element with id="dogAge" from the HTML
  const dogAgeInput = document.getElementById("dogAge");

  // Read the value the user typed into the input (this is a string at first)
  const dogAgeValue = dogAgeInput.value;

  // Convert the string value to a number so we can do math with it
  let dogAgeNumber = Number(dogAgeValue);

  // Get the element where we will show the result (the <p> with id="dogResult")
  const resultElement = document.getElementById("dogResult");

  // Check if the value is not a number (invalid input)
  if (isNaN(dogAgeNumber) || dogAgeNumber < 0) {
    // If invalid, show an error message instead of doing the calculation
    resultElement.innerText = `Please enter a valid non-negative number.`;
    return; // Stop the function here so we don't continue
  }

  // If the user somehow entered a negative number (typing), clamp it to 0
  if (dogAgeNumber < 0) {
    dogAgeInput.value = 0;
    dogAgeNumber = 0;
  }

  // Calculate the approximate human years (simple rule: dog age * 7)
  const humanYears = dogAgeNumber * 7;

  // Build the message we want to show to the user
  const message = `Your pup is approximately ${humanYears} human years old.`;

  // Put the message text into the result <p> so it appears on the page
  resultElement.innerText = message;
}

//This function converts cat age to human years.
function convertCatAge () {                                               

  const catAgeInput= document.getElementById("catAge"); //Gets the cat age input element

  const catAgeValue = catAgeInput.value; // Reads the value the user typed

  const catAgeNumber= Number(catAgeValue); //Converts the string user typed into an actual number value

  const resultElement= document.getElementById("catResult"); //Gets element where result will be displayed

  // Checks for invalid input AKA negative numbers
  if (isNaN(catAgeNumber)|| catAgeNumber < 0) {
    resultElement.innerText = "Please enter a valid non-negative number.";
    return;
  }

  // Cat aging rule (example):
  // First cat year = 15 human years
  // Second cat year = 9 human years
  // Each additional year = 4 human years

  let humanYears;

  if (catAgeNumber === 0) {
    humanYears = 0;
  }
  else if (catAgeNumber === 1) {
    humanYears = 15;
  }
  else if (catAgeNumber === 2) {
    humanYears = 24;
  }
  else {
    humanYears = 24 + (catAgeNumber - 2) * 4;
  }

  const message = `Your Smitten is approximately ${humanYears} human years old.`; // Formats the message shown to the user

  resultElement.innerText = message; // Displays the result

}