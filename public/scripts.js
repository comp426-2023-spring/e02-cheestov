#!/usr/bin/env node
// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver
// get references to the elements
// get references to the elements

// add event listener to the opponent type checkbox

const checkbox = document.getElementById('toggleCheck');
const head = document.getElementById('header');
const dropdown = document.getElementById('player-choice');
const opponentOption = document.getElementsByClassName('opponent-choice');
const dropdown2 = document.getElementById("opponent-choice");
const result = document.getElementById("result");
const checked = document.getElementById("toggle");
var rps = true;
var compPlay = false;

checked.addEventListener("change", () => {
    if (checked.checked) {
        compPlay = true;
        for (var i=0;i<opponentOption.length;i+=1){
            opponentOption[i].style.display = 'none';
          }
    } else {
        compPlay = false;
        for (var i=0;i<opponentOption.length;i+=1){
            opponentOption[i].style.display = 'block';
          }
    }
})

checkbox.addEventListener("change", () => {
   if (checkbox.checked) {
    rps = false;
    head.textContent = "Rock Paper Scissor Lizard Spock Game";
    var lizard = document.createElement("option");
    lizard.value = "Lizard";
    lizard.text = "Lizard";
    var spock = document.createElement("option");
    spock.value = "Spock";
    spock.text = "Spock";
    var lizard2 = document.createElement("option");
    lizard2.value = "Lizard";
    lizard2.text = "Lizard";
    var spock2 = document.createElement("option");
    spock2.value = "Spock";
    spock2.text = "Spock";
    dropdown.add(lizard);
    dropdown.add(spock);
    dropdown2.add(lizard2);
    dropdown2.add(spock2);
   } else {
    rps = true;
    head.textContent = "Rock Paper Scissors Game";
    dropdown.remove(3);
    dropdown.remove(3);
    dropdown2.remove(3);
    dropdown2.remove(3);
   }
});

async function myFunction() {
    var rpsText;
    var compText;
    if (rps) {
        rpsText = "rps/";
    } else {
        rpsText = "rpsls/"
    }
    if (compPlay) {
        compText = "computer/"
    } else {
        compText = "opponent/"
    }
    if (compPlay) {
        const response = await fetch("/app/" + rpsText + compText + dropdown.options[dropdown.selectedIndex].text.toLowerCase() + "/");
        const data = await response.json();
        document.getElementById("result-text").innerText = "player's <" + data.player + "> " + data.result + "s against computer's <" + data.opponent + ">";
        result.style.display = "block";
    } else {
        const response = await fetch("/app/" + rpsText + compText + dropdown.options[dropdown.selectedIndex].text.toLowerCase() + "/" + dropdown2.options[dropdown2.selectedIndex].text.toLowerCase() + "/");
        const data = await response.json()
        document.getElementById("result-text").innerText = "player's <" + data.player + "> " + data.result + "s against opponent's <" + data.opponent + ">";
        result.style.display = "block";
    }

}

function hideFunction() {
    result.style.display = "none";
}

async function fetcher() {
   const response = await fetch("http://localhost:5000/app/rps/computer/rock/");
   return await response.json();
}
  