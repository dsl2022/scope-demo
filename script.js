// Global variable
var globalVariable = "I'm a global variable.";

// Function to demonstrate local scope
function demonstrateScope() {
  // Local variable
  var localVariable = Math.floor(Math.random()*10);

  // Output both global and local variables
  var output = "Global Variable: " + globalVariable + "\n";
  output += "Local Variable: " + localVariable;
    console.log(output)
  // Display the output
  var outputArea = document.getElementById('output-area');
  outputArea.textContent = output;
}

// Add event listener to run button
var runButton = document.getElementById('run-button');
runButton.addEventListener('click', demonstrateScope);
