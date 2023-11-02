// const orderedList= document.querySelector('ol');
// const lix = document.createElement('li')
// orderedList.append(lix)
// lix.innerText= 'Saying fantastic';

// const styz = document.querySelector('h1');
// styz.setAttribute('id', 'main-heading');
// const mainHeading = document.querySelector('main-heading');
// styz.style.color= 'green';

// const ordered = document.querySelector('ol');
// console.log(ordered.children.innerText);

//-------------- Make the first child a parent of the second child a

// const sectionElement = document.querySelector('.trying');
// const children = sectionElement.children;

// // Convert the children collection to an array
// const childrenArray = Array.from(children);

// // Console log the children array
// console.log(childrenArray);

// const firstChildElement = sectionElement.children[0];
// const secondChildElement = sectionElement.children[1];
// firstChildElement.appendChild(secondChildElement);
// console.log(firstChildElement.innerText);


//------------------Select the last child of the <ol> tag and put it at the beginning of the list

// const orderedList = document.querySelector('ol');
// const lastChild = orderedList.lastChild;
// const children = orderedList.innerText;
// const childrenArray = Array.from(children);
// console.log(childrenArray);

// // Get the last child of the <ol> tag
// const lastChildElement = document.querySelector('ol li:last-child');


// // Remove the last child from the <ol> tag
// lastChildElement.parentNode.removeChild(lastChildElement);

// // Insert the last child at the beginning of the <ol> tag
// document.querySelector('ol').insertBefore(lastChildElement, document.querySelector('ol li:first-child'));
// console.log(lastChildElement);


//---------------Move the <h2> of the third section in the second one and vice-versa

// const mainElement = document.querySelector('main');

// // Get the second section element
// const secondSectionElement = mainElement.querySelector('section:nth-child(2)');

// // Get the second section heading element
// const secondSectionHeadingElement = secondSectionElement.querySelector('h2');

// // Get the third section heading element
// const thirdSectionHeadingElement = mainElement.querySelector('section:last-child h2');

// // Swap the heading elements
// mainElement.querySelector('section:nth-child(2)').appendChild(thirdSectionHeadingElement);
// mainElement.querySelector('section:last-child').appendChild(secondSectionHeadingElement);


//-------------Delete the last section from the DOM, we don't need it anyways

const lastSectionElement = document.querySelector('section:last-child');

// Remove the last section element from its parent element
lastSectionElement.parentElement.removeChild(lastSectionElement);

