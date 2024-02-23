const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");
const body = document.querySelector("body");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Let it be one line long. Repot kalo mengubahnya jadi beberapa baris.
// Dan tak ada manfaat yang signifikan dari hal tsb.
// I quoted the replacable substring to make me easy to spot them.
let storyText = "It was 94 fahrenheit outside, so ':insertx:' went for a walk. When they got to ':inserty:', they stared in horror for a few moments, then ':insertz:'. Bob saw the whole thing, but was not surprised — ':insertx:' weighs 300 pounds, and it was a hot day.";

let insertX = [
  "Willy the Goblin", "Big Daddy", "Father Christmas",
];

let insertY = [
  "the soup kitchen", "Disneyland", "the White House",
];

let insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

randomize.addEventListener("click", result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);  

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  newStory = newStory.replaceAll(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);

  if (document.getElementById("uk").checked) {
    // pounds -> stone          : stone = pound / 14
    // fahrenheit -> centigrade : centigrade = 5 / 9 * (fahrenheit - 32);
    const weight = Math.round(300 / 14) + " stone";
    const temperature = Math.round(5 / 9 * (94 - 32)) + " centigrade";

    newStory = newStory.replace("94 fahrenheit", temperature);
    newStory = newStory.replace("300 pounds", weight);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
