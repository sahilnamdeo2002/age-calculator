function calculateAge() {
  const today = new Date();
  const birthdateinput = document.getElementById("birthdate").value;

  if (!birthdateinput) {
      alert("Please enter your birthdate.");
      return;
  }

  const birthdate = new Date(birthdateinput);

  if (birthdate > today) {
      alert("Birthdate cannot be in the future.");
      return;
  }

  const ageInMilliseconds = today - birthdate;
  const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
  const ageInMinutes = Math.floor(ageInSeconds / 60);
  const ageInHours = Math.floor(ageInMinutes / 60);
  const ageInDays = Math.floor(ageInHours / 24);
  const ageInWeeks = Math.floor(ageInDays / 7);
  const ageInMonths = Math.floor(ageInDays / 30.436875); // Average month length
  const ageInYears = Math.floor(ageInDays / 365.25); // Account for leap years

  // Display the results
  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = `
      <p>Age in years: ${ageInYears}</p>
      <p>Age in months: ${ageInMonths}</p>
      <p>Age in weeks: ${ageInWeeks}</p>
      <p>Age in days: ${ageInDays}</p>
      <p>Age in hours: ${ageInHours}</p>
      <p>Age in minutes: ${ageInMinutes}</p>
      <p>Age in seconds: ${ageInSeconds}</p>
  `;
  
  document.getElementById("resultcontainer").style.display = "block";
}

// Event listener for form submission
document.getElementById("agecalculator").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting
  calculateAge(); // Call the calculateAge function when the form is submitted
});
