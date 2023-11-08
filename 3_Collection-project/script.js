import { founders } from "./collection.js";

// const headerText = document.createElement('header');
// const photoDiv = document.createElement('div')
// photoDiv.classList.add('circle-photo');
// headerText.appendChild(photoDiv);
// document.body.appendChild('headertext');


const collectionUl = document.createElement("div");
collectionUl.classList.add("card-container");
let card;

// Create a new card for each founder.
founders.forEach((founder) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const picture = document.createElement("img");
  picture.src = founder.picture;
  picture.classList.add("card-image");
  card.appendChild(picture);

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  card.appendChild(cardInfo);

  const name = document.createElement("h2");
  name.classList.add("card-name");
  name.textContent = founder.name;
  cardInfo.appendChild(name);

  const cardGenre = document.createElement("h4");
  cardGenre.classList.add("card-genre");
  cardGenre.textContent = founder.occupation;
  cardInfo.appendChild(cardGenre);

  const dateOfBirth = document.createElement("p");
  dateOfBirth.classList.add("card-dob");
  dateOfBirth.textContent = founder.dob;
  cardInfo.appendChild(dateOfBirth);

  const dateOfDeath = document.createElement("p");
  dateOfDeath.classList.add("card-dob");
  dateOfDeath.textContent = founder.dod;
  cardInfo.appendChild(dateOfDeath);

  const netWorth = document.createElement("p");
  netWorth.classList.add("card-networth");
  netWorth.textContent = founder.netWorth;
  cardInfo.appendChild(netWorth);

  const famousQuote = document.createElement("p");
  famousQuote.classList.add("card-quote");
  famousQuote.textContent = founder.quote;
  cardInfo.appendChild(famousQuote);
 
  const linkItem = document.createElement("a");
  linkItem.href = founder.weblink;
  linkItem.textContent = "Wikipedia";
  linkItem.classList.add('card-link');
  card.appendChild(linkItem);

  collectionUl.appendChild(card);
});

document.body.appendChild(collectionUl);

const link = document.querySelector('a');
link.textContent = 'Wikipedia';