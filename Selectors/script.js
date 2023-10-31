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
    
}//--------- Loop through all the paragraphs

const allTheParagraphs = document.querySelectorAll('p');
for (const paragraph of allTheParagraphs) {
    console.log(paragraph);
    
}