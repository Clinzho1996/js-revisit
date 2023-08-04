function ageInDays() {
  let birthYear = prompt("What is your birth year?");

  let result = "You are " + (2023 - birthYear) * 356 + " days old";
  document.getElementById("result").innerHTML = result;
}

function reset() {
  let result = "";
  document.getElementById("result").innerHTML = result;
}

function generateCat() {
  var image = document.createElement("img");
  let div = document.getElementById("cat-gen");
  image.src =
    "https://thecatapi.com/api/images/get?format=src&type=gif&size=20";
  div.appendChild(image);
}
