const container = document.createElement('div');
container.classList.add('container');
const header = document.createElement('header');
header.classList.add('header');
const title = document.createElement('h1');
title.classList.add('title_game');
title.textContent = 'Memory Game';
const buttonsHeader = document.createElement('div');
buttonsHeader.classList.add('buttons_header');
const buttonNewGame = document.createElement('button');
buttonNewGame.classList.add('button_new-game');
buttonNewGame.type = 'button';
buttonNewGame.textContent = 'New Game';
const buttonTableLider = document.createElement('button');
buttonTableLider.classList.add('button_table-lider');
buttonTableLider.type = 'button';
buttonTableLider.textContent = 'Leaderboard';
const main = document.createElement('main');
main.classList.add('main');

container.append(header, main);
header.append(title, buttonsHeader);
buttonsHeader.append(buttonNewGame, buttonTableLider);

document.body.append(container);

//create random cards
const images = [
  './assets/img/pumpkin.webp',
  './assets/img/ghost.webp',
  './assets/img/skull.webp',
  './assets/img/spider.webp',
  './assets/img/bat.webp',
  './assets/img/witch-hat.webp',
  './assets/img/black-cat.webp',
  './assets/img/spider-web.webp',
];
const cards = [...images, ...images];

for (let i = cards.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));

  [cards[i], cards[j]] = [cards[j], cards[i]];
}

cards.forEach((picture) => {
  const card = document.createElement('div');
  card.classList.add('card');
  const image = document.createElement('img');
  image.src = picture;
  
  main.append(card);
  card.append(image);

  card.addEventListener('click', (event) => {
    card.classList.add('open');
  })
});

