  fetch('/root/json/greetings.json')
  .then(response => response.json())
  .then(data => {
    // Get a random greeting from the array
    var randomGreeting = data.greetings[Math.floor(Math.random() * data.greetings.length)];
    // Get the greeting element from the HTML
    var greetingElement = document.getElementById("greeting");
    // Set the greeting element's text to the random greeting
    greetingElement.innerText = randomGreeting;
  });
