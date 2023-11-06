const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's';
};

const clickOnSquare = (e) => {
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());
};

const actionSquareElements = document.querySelectorAll('.actionsquare');

actionSquareElements.forEach((actionSquareElement) => {
  actionSquareElement.addEventListener('click', (event) => {
    // Create a new displayed square element
    const displayedSquareElement = document.createElement('div');
    displayedSquareElement.classList.add('displayedsquare', event.target.classList[1]);

    // Append the displayed square element to the displayedsquare-wrapper section
    const displayedSquareWrapperElement = document.querySelector('.displayedsquare-wrapper');
    displayedSquareWrapperElement.appendChild(displayedSquareElement);

    // Log the event to the third section ul element
    logEvent(`Created ${event.target.classList[1]} square`);

    // Add a click event listener to the newly created displayed square element
    displayedSquareElement.addEventListener('click', () => {
      showAlert(event.target.classList[1]);
    });
  });
});

// Add the following function to log a new li element in the third section ul saying that, "Created specific color sqare"
function logEvent(action) {
  // Create a new li element
  const newLiElement = document.createElement('li');

  // Set the text content of the new li element
  newLiElement.textContent = `[${getElapsedTime()}] ${action}`;

  // Append the new li element to the third section ul element
  const thirdSectionUlElement = document.querySelector('main section:nth-child(3) ul');
  thirdSectionUlElement.appendChild(newLiElement);
}

// Add the following function to alert the specific color when user clicks on any of the new created squares of .displayesSquareElement
function showAlert(color) {
  // Get the corresponding class for the color
  const colorClass = `.displayedsquare.${color}`;

  // Get the displayed square element with the corresponding class
  const displayedSquareElement = document.querySelector(colorClass);

  // Alert the color of the displayed square element
  alert(`${displayedSquareElement.classList[1]} clicked`);
}

// Add the following event listener to the body element to change the background color to a random color when the spacebar is pressed
document.querySelector('body').addEventListener('keydown', (event) => {
  if (event.key === ' ') {
    // Generate a random color using RGB values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Set the background color of the body element to the random color
    document.querySelector('body').style.backgroundColor = `rgb(${r},${g},${b})`;

    // Log the event to the third section ul element
    logEvent('Changed background color');
  }
});
// Add the following event listener to the body element to delete the log when the "l" key is pressed
document.querySelector('body').addEventListener('keydown', (event) => {
  if (event.key === 'l') {
    // Get the ul element containing the log items
    const logElement = document.querySelector('main section:nth-child(3) ul');

    // Delete all of the log items
    while (logElement.firstChild) {
      logElement.removeChild(logElement.firstChild);
    }
  }
});

// Add the following event listener to the body element to delete the squares when the "s" key is pressed
document.querySelector('body').addEventListener('keydown', (event) => {
  if (event.key === 's') {
    // Get the div element containing the squares
    const squaresElement = document.querySelector('.displayedsquare-wrapper');

    // Delete all of the squares
    while (squaresElement.firstChild) {
      squaresElement.removeChild(squaresElement.firstChild);
    }
  }
});
