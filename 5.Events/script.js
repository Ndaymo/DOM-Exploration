const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}
//



// Get the action square elements
const actionSquareElements = document.querySelectorAll('.actionsquare');

// Add a click event listener to each action square element
actionSquareElements.forEach((actionSquareElement) => {
  actionSquareElement.addEventListener('click', (event) => {
    // Create a new displayed square element
    const displayedSquareElement = document.createElement('div');
    displayedSquareElement.classList.add('displayedsquare');

    // Set the color of the displayed square element to the same color as the clicked action square element
    displayedSquareElement.style.backgroundColor = getComputedStyle(actionSquareElement).backgroundColor;

    // Append the displayed square element to the displayedsquare-wrapper section
    const displayedSquareWrapperElement = document.querySelector('.displayedsquare-wrapper');
    displayedSquareWrapperElement.appendChild(displayedSquareElement);
  });
});


