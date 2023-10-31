// const importantElements = document.querySelectorAll('.important');
// for (const element of importantElements) {
//     element.title = 'This is an important item';
// }

// ------------Give the .important elements a brand new title ---------

// const importantElements = document.querySelectorAll('.important')
// for (const element of importantElements) {
//     console.log(element);
//     element.title= 'This is an important item';
// }

// select  all img

// const everyPicture = document.querySelectorAll("img");
// for (const picture of everyPicture) {
//    console.log(picture); 

// }

//----------Disappear amm images that dont contain a class of important

const images = document.querySelectorAll('img');
for (const image of images) {
    if(!image.classList.contains('important')){
        image.style.display = 'none';
    }
    
}//--------- Loop through all the paragraphs and show content

// const allTheParagraphs = document.querySelectorAll('p');
// for (const paragraph of allTheParagraphs) {
//     console.log(paragraph.textContent);   
//  }

//-------Loop all the <p> and show those with a classname

// const allTheParagraphs = document.querySelectorAll('p');
// for (const paragraph of allTheParagraphs) {
//     if(paragraph.classList.length > 0) {
//         console.log('ClassName:' + paragraph.classList[0])
//     }
    
// }

// ---------Random colors to <p>

const paragraphs = document.querySelectorAll('p');

for (const paragraph of paragraphs) {
  if (!paragraph.classList.length) {
    // Generate a random color
    const color = randomColor();

    // Set the text color of the paragraph
    paragraph.style.color = color;
  }
}

function randomColor() {
  // Generate a random hex code
  const hexCode = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return hexCode;
}
