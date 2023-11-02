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


const sectionElement = document.querySelector('.trying');
const children = sectionElement.children;

// Convert the children collection to an array
const childrenArray = Array.from(children);

// Console log the children array
console.log(childrenArray);

const firstChildElement = sectionElement.children[0];
const secondChildElement = sectionElement.children[1];
firstChildElement.appendChild(secondChildElement);
console.log(firstChildElement.innerText);
