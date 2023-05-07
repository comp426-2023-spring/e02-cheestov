// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver
// get references to the elements
// get references to the elements

// add event listener to the opponent type checkbox


const checkbox = document.getElementById('toggleCheck');
const head = document.getElementById('header');
const dropdown = document.getElementById('player-choice');
const dropdown2=document.getElementById("opponent-choice");
const result = document.getElementById("result")

checkbox.addEventListener("change", () => {
   if (checkbox.checked) {
    head.textContent = "Rock Paper Scissor Lizard Spock Game";
    var lizard = document.createElement("option");
    lizard.value = "Lizard";
    lizard.text = "Lizard";
    var spock = document.createElement("option");
    spock.value = "Spock";
    spock.text = "Spock";
    dropdown.add(lizard);
    dropdown.add(spock);
    dropdown2.add(lizard);
    dropdown2.add(spock);
   } else {
    head.textContent = "Rock Paper Scissors Game";
    dropdown.remove(3);
    dropdown.remove(3);
    dropdown2.remove(3);
    dropdown2.remove(3);
   }
});

function myFunction() {
    result.style.display = "block";
}

function hideFunction() {
    result.style.display = "none";
}
  