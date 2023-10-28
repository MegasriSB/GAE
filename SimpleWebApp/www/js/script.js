// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the button and content div
    var button = document.getElementById("colorChangeButton");
    var content = document.getElementById("content");

    // Array of background colors
    var colors = ["#e74c3c", "#27ae60", "#f1c40f", "#3498db", "#9b59b6"];

    // Function to change the background color
    function changeBackgroundColor() {
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        content.style.backgroundColor = randomColor;
    }

    // Add a click event listener to the button
    button.addEventListener("click", changeBackgroundColor);
});
