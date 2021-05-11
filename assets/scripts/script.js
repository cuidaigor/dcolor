//Puxando Counter Cards
const responseCounterCards = [
  {
    name: "Impressões",
    icon: "icon-printer",
    counter: 5
  },
  {
    name: "Personalizados",
    icon: "icon-glass",
    counter: 7
  },
  {
    name: "Estampas",
    icon: "icon-tshirt",
    counter: 3
  },
  {
    name: "Cafézinhos",
    icon: "icon-coffe",
    counter: 26
  }
];

showCounterCards(responseCounterCards);

function showCounterCards(cards) {
  let output = '';

  for(let card of cards) {
    output += `<div class="counter-card" data-animate="up">
                <i class="${card.icon}"></i>
                <h1 class="number">${card.counter}</h1>
                <p>${card.name}</p>
              </div>`;
  }

  document.querySelector('.icons-counter').innerHTML = output;
}


//Puxando Portfólio
const responsePortfolio = [
  {
    title: "Banner personalizado massoterapia",
    image: "01.jpg"
  },
  {
    title: "Caneca personalizada Grey's Anatomy",
    image: "02.jpg"
  },
  {
    title: "Caneca personalizada Harry Potter",
    image: "03.jpg"
  },
  {
    title: "Camisa personalizada",
    image: "04.jpg"
  },
  {
    title: "Camisa personalizada Jesus Cristo",
    image: "05.jpg"
  },
  {
    title: "Adesivo personalizado do Phillip",
    image: "06.jpg"
  },
  {
    title: "Agenda personalizada da Bianca",
    image: "07.jpeg"
  },
  {
    title: "Caderno personalizado Psicologia",
    image: "08.jpg"
  },
  {
    title: "Almofada personalizada Te amo mil milhões",
    image: "09.jpg"
  },
  {
    title: "Almofada personalizada Minha melhor metade",
    image: "10.png"
  }
];

showPortfolio(responsePortfolio);

function showPortfolio(images) {
  let output = '';

  for(let image of images){
    output += `<figure data-animate="up">
                <h1>${image.title}</h1>
                <img src="assets/img/portfolio/${image.image}" alt="${image.title}">
              </figure>`;
  }

  document.querySelector('.images-portfolio').innerHTML = output;
}
