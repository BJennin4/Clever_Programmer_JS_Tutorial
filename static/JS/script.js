// Challenge 1: Your age in days

function ageInDays() {
  var birthYear = prompt("What year were you born?");
  var dayAge = (2020 - birthYear) * 365;
  var head = document.createElement("h1");
  var textAnswer = document.createTextNode("You are " + dayAge + " days old.");
  head.setAttribute("id", "dayAgeCalculation");
  head.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(head);
}

function reset() {
  document.getElementById("dayAgeCalculation").remove();
}
