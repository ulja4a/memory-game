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
const footer = document.createElement('footer');
footer.classList.add('footer');
const score = document.createElement('div');
score.classList.add('score');
score.textContent = 'Score: ';
const numberScore = document.createElement('span');
numberScore.classList.add('number_score');
numberScore.textContent = '0';
const pairs = document.createElement('div');
pairs.classList.add('pairs');
pairs.textContent = 'Pairs: ';
const numberPairs = document.createElement('span');
numberPairs.classList.add('number_pairs');
numberPairs.textContent = '0';
const descriptionPairs = document.createElement('span');
descriptionPairs.classList.add('description_pairs');
descriptionPairs.textContent = ' out of 8';

container.append(header, main, footer);
header.append(title, buttonsHeader);
buttonsHeader.append(buttonNewGame, buttonTableLider);
footer.append(score, pairs);
score.append(numberScore);
pairs.append(numberPairs, descriptionPairs);

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

