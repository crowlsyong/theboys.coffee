let intervalId;

// Get the start-stop button
const startStopButton = document.getElementById("start-stop-button");
const element = document.getElementById("demo");

// Add a click event listener to the start-stop button
startStopButton.addEventListener("click", function() {
  if (intervalId) {
    // If the intervalId exists, it means the function is running
    // So we stop it by clearing the interval
    clearInterval(intervalId);
    intervalId = null;
    // Change the button text to "Start"
    startStopButton.innerHTML = "Start";
  } else {
    // If the intervalId does not exist, it means the function is not running
    // So we start it by setting the interval
    intervalId = setInterval(function(){element.innerHTML += "BRO U JUST GOT HAWKED I MEAN HEACKED I MEAN HACK3D LIKE A N00b"}, 100);
    // Change the button text to "Stop"
    startStopButton.innerHTML = "Stop";
  }
});
