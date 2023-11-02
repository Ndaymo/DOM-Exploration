// const learners = ["Lucas", "Kilian", "Alec", "Mohamed", "Pieter", "Rebecca", "Alessandro", 
// "Josué", "Thibault", "Eduarda", "Mohammed", "Funda", "Luis", "Alexandru", "Andrej", "Danté", "Jonasi", 
// "Kelsey", "Rana", "Jana", "Sieglinde", "Gustave", "Sezin", "Thierry", "Sylvie", "Anaïs"];

// const articleElement = document.querySelector('article');

// for (const learner of learners) {
//   // Create a new section element
//   const sectionElement = document.createElement('section');

//   // Generate a random background color
//   const backgroundColor = randomColor();

//   // Set the background color of the section element
//   sectionElement.style.backgroundColor = backgroundColor;

//   // Create a paragraph element
//   const paragraphElement = document.createElement('p');

//   // Set the text content of the paragraph element to the learner's name
//   paragraphElement.textContent = learner;

//   // Append the paragraph element to the section element
//   sectionElement.appendChild(paragraphElement);

//   // Append the section element to the article element
//   articleElement.appendChild(sectionElement);
// }

// function randomColor() {
//   // Generate a random hex code
//   const hexCode = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

//   return hexCode;
// }


// const allLearners = ["Haji", "Hussein", "Rajabu"];
// const articleEle = document.querySelector('article');

// for (const learnerx of allLearners) {
//     const nSection = document.createElement('section');
//     const backgroundColor = randomColor();
//     const nParagraph = document.createElement('p');
//     nParagraph = document.createTextNode(learnerx);
//     nParagraph.appendChild(nSection);
    
//     nSection.appendChild(articleEle);

    
// }

const learners = ["Lucas", "Kilian", "Alec", "Mohamed", "Pieter", "Rebecca", "Alessandro", "Josué", "Thibault", "Eduarda", 
"Mohammed", "Funda", "Luis", "Alexandru", "Andrej", "Danté", "Jonasi", "Kelsey", "Rana", "Jana", "Sieglinde", "Gustave", 
"Sezin", "Thierry", "Sylvie", "Anaïs"];

const articleElement = document.querySelector('article');

// Shuffle the learners array
learners.sort(() => Math.random() - 0.5);

// Append the learners to the article element in the shuffled order
for (const learner of learners) {
  // Create a new section element
  const sectionElement = document.createElement('section');

  // Generate a random background color
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
}

function randomColor() {
  // Generate a random hex code
  const hexCode = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return hexCode;
}

function getContrastColor(backgroundColor) {
  // Convert the background color to RGB
  const rgb = backgroundColor.match(/\d+/g).map(Number);

  // Calculate the perceived lightness of the background color
  const perceivedLightness = (rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114) / 255;

  // Return the contrast color
  return perceivedLightness > 0.5 ? 'black' : 'white';
}

// Select all the sections with random colors
const sections = document.querySelectorAll('section[style*="background-color"]');

// For each section, set the text color to the contrast color
for (const section of sections) {
  const backgroundColor = section.style.backgroundColor;
  const contrastColor = getContrastColor(backgroundColor);

  section.style.color = contrastColor;
}
