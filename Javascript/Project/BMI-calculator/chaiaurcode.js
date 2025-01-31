const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop form from submitting to the server
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  // Check if height and weight are valid
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Enter a valid height: ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Enter a valid weight: ${weight}`;
  } else {
    // Calculate BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let bmiMessage;

    // Determine BMI category
    if (bmi < 17.8) {
      bmiMessage = "<span>You are underweight</span>";
    } else if (bmi < 24.9) {
      bmiMessage = "<span>Your weight is normal</span>";
    } else {
      bmiMessage = "<span>You are overweight</span>";
    }

    // Display results
    results.innerHTML = `<span><br>${bmiMessage} : ${bmi}</span>`;
  }
});
