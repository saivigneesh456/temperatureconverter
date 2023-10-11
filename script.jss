document.getElementById("convert").addEventListener("click", function() {
    // Get the values from the input fields
    const celsius = parseFloat(document.getElementById("celsius").value);
    const fahrenheit = (celsius * 9/5) + 32;

    // Update the Fahrenheit input field with the result
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
});
