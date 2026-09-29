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

