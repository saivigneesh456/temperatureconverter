document.getElementById("convert").addEventListener("click", function() {
    // Get the values from the input fields
    const celsius = parseFloat(document.getElementById("celsius").value);
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);

    // Check which field is filled and perform conversion accordingly
    if (!isNaN(celsius)) {
        // Convert Celsius to Fahrenheit
        const convertedFahrenheit = (celsius * 9/5) + 32;
        document.getElementById("fahrenheit").value = convertedFahrenheit.toFixed(2);
    } else if (!isNaN(fahrenheit)) {
        // Convert Fahrenheit to Celsius
        const convertedCelsius = (fahrenheit - 32) * 5/9;
        document.getElementById("celsius").value = convertedCelsius.toFixed(2);
    } else {
        // If both fields are empty or not a number, show an alert
        alert("Please enter a valid number in either Celsius or Fahrenheit field.");
    }
});
