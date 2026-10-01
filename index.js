
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
const pairs = document.createElement('div');
pairs.classList.add('pairs');
pairs.textContent = 'Pairs: ';
const numberPairs = document.createElement('span');
numberPairs.classList.add('number_pairs');
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

//function create modal
function createModal(content) {
  const modal = document.createElement('dialog');
  modal.classList.add('modal');

  modal.append(content);

  return modal;
}

//function open modal
function openModal(modal) {
  modal.showModal();
  document.body.classList.add('modal-open');
}

//function close modal
function closeModal(modal) {
  modal.close();
  document.body.classList.remove('modal-open');
}


//Modal victory
const victoryContent = document.createElement('div');
victoryContent.classList.add('victory-content');
const victoryTitle = document.createElement('h2');
victoryTitle.textContent = 'You matched them all! You win! 🎉';
const victoryScore = document.createElement('div');
victoryScore.classList.add('victory_score');
victoryScore.textContent = 'Score: ';
const victoryScoreMoves = document.createElement('span');
victoryScoreMoves.classList.add('victory_score_moves');
const buttonsModal = document.createElement('div');
buttonsModal.classList.add('buttons_modal');
const buttonNewGameModal = document.createElement('button');
buttonNewGameModal.classList.add('button_newgame_modal');
buttonNewGameModal.textContent = 'New Game';
const buttonCloseModal = document.createElement('button');
buttonCloseModal.classList.add('button_close_modal');
buttonCloseModal.textContent = 'Close';

victoryContent.append(victoryTitle, victoryScore, buttonsModal);
victoryScore.append(victoryScoreMoves);
buttonsModal.append(buttonNewGameModal, buttonCloseModal);

const victoryModal = createModal(victoryContent);

document.body.append(victoryModal);

buttonCloseModal.addEventListener('click', () => {
  closeModal(victoryModal);
});

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

let firstCard = null;
let moves = 0;
let openPairs = 0;
let isChecking = false;

numberScore.textContent = moves;
numberPairs.textContent = openPairs;

cards.forEach((picture) => {
  const card = document.createElement('div');
  card.classList.add('card');
  const image = document.createElement('img');
  image.src = picture;
  
  card.append(image);
  main.append(card);

  card.addEventListener('click', () => {
    if (isChecking || firstCard === card || card.classList.contains('matched')) return;
    card.classList.add('open');
      if (firstCard === null) {
        firstCard = card;
      } else {
          isChecking = true
          const firstImage = firstCard.querySelector('img');
          const secondImage = card.querySelector('img');
            moves ++;
            numberScore.textContent = moves;
          if (firstImage.src === secondImage.src) {
            firstCard.classList.add('matched');
            card.classList.add('matched');
            firstCard = null;
            openPairs ++;
            numberPairs.textContent = openPairs;
            isChecking = false;
            if (openPairs === images.length) {
              victoryScoreMoves.textContent = moves;
              openModal(victoryModal);
            }
          } else {
            setTimeout(() => {
              firstCard.classList.remove('open');
              card.classList.remove('open');
              firstCard = null;
              isChecking = false;
            }, 1500);
            
          }
        }
  })

  
});



