//Puxando Counter Cards

const response = [
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

showCounterCards(response);

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
