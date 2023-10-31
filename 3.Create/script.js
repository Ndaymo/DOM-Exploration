const learners = ["Lucas", "Kilian", "Alec", "Mohamed", "Pieter", "Rebecca", "Alessandro", "Josué", 
"Thibault", "Eduarda", "Mohammed", "Funda", "Luis", "Alexandru", "Andrej", "Danté", "Jonasi", "Kelsey", 
"Rana", "Jana", "Sieglinde", "Gustave", "Sezin", "Thierry", "Sylvie", "Anaïs"];

const articleElement = document.querySelector('article');

for (const learner of learners) {
// Create a new section element
const sectionElement = document.createElement('section');

//Generate a random background color
const backgroundColor = randomColor();

// Set the background color of the section element
sectionElement.style.backgroundColor = backgroundColor;

// Create a paragraph element
const paragraphElement = document.createElement('p');

// Set the text content of the paragraph element to the learner's name
paragraphElement.textContent = learner;

// Append the paragraph element to the section element
sectionElement.appendChild(paragraphElement);

// Append the section element to the article element
articleElement.appendChild(sectionElement);
// }

function randomColor() {
  // Generate a random hex code
  const hexCode = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return hexCode;
}
