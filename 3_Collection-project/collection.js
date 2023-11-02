const entrepreneurialFounders = [
    {
      name: "Marc Cuban",
      dob: "July 31, 1958",
      picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Marc_Cuban_2016.jpg/1200px-Marc_Cuban_2016.jpg",
      creations: "MicroSolutions, Audionet, Broadcast.com, 2929 Entertainment, Landmark Theaters, AXS TV, Dallas Mavericks, and Magnolia Pictures.",
      quote: "The best way to predict the future is to create it.",
    },
    {
      name: "James Dyson",
      dob: "May 2, 1947",
      picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/James_Dyson_2018.jpg/1200px-James_Dyson_2018.jpg",
      creations: "The Dyson vacuum cleaner, the Dyson Airblade hand dryer, the Dyson bladeless fan, and the Dyson Supersonic hair dryer.",
      quote: "Failure is simply the opportunity to begin again, this time more intelligently.",
    },
    {
      name: "Steve Jobs",
      dob: "February 24, 1955",
      picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Steve_Jobs_Headshot_2006.jpg/1200px-Steve_Jobs_Headshot_2006.jpg",
      creations: "Apple Inc., Pixar Animation Studios, and NeXT Computer.",
      quote: "Stay hungry. Stay foolish.",
    },
    {
      name: "Naval Ravikant",
      dob: "March 5, 1968",
      picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Naval_Ravikant_20170531.jpg/1200px-Naval_Ravikant_20170531.jpg",
      creations: "AngelList, MetaStable Capital, and Venture Hacks podcast.",
      quote: "Wealth is what you don't need.",
    },
  ];

  const listElement = document.querySelector('#founders-list');

for (const founder of entrepreneurialFounders) {
  const listItemElement = document.createElement('li');
  listItemElement.textContent = `${founder.name}: ${founder.quote}`;
  listElement.appendChild(listItemElement);
}


  