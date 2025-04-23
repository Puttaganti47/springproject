// Update button text as user types in the input field
function demo() {
    const input = document.getElementById("inp1").value;
    document.getElementById("inp2").textContent = input.toUpperCase();
}

// Trigger the uppercase conversion when OutputText is clicked
function convertToCaps() {
    const inputText = document.getElementById("inp1").value;
    alert(inputText.toUpperCase());  // Optionally, you can display the uppercase value in an alert box
}
