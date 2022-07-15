import './menu.css';


const menu = document.createElement('div');
const head = document.createElement('h1');
const beverages = document.createElement('div');
const bevHeader = document.createElement('h2');
const honeyTea = document.createElement('h3');
const hTea = document.createElement('p');
const bearyTea = document.createElement('h3');
const bTea = document.createElement('p');
const sides = document.createElement('div');
const sidesHeader = document.createElement('h2');
const tandj = document.createElement('h3');
const tandjp = document.createElement('p');
const fruit = document.createElement('h3');
const fruitp = document.createElement('p');

head.textContent = ('MENU');
bevHeader.textContent = ('BEVERAGES');
honeyTea.textContent = ('Honey tea')
hTea.textContent = ('A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!');
bearyTea.textContent = ('Beary tea');
bTea.textContent = ('A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request');

sidesHeader.textContent = ('SIDES');
tandj.textContent = ('Toast and Jam');
tandjp.textContent = ('A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.');
fruit.textContent = ('Fruit');
fruitp.textContent = ('A small bowl of fresh fruit, whatever we find at the market for the day.');

beverages.appendChild(bevHeader);
beverages.appendChild(honeyTea);
beverages.appendChild(hTea);
beverages.appendChild(bearyTea);
beverages.appendChild(bTea);

sides.appendChild(sidesHeader);
sides.appendChild(tandj);
sides.appendChild(tandjp);
sides.appendChild(fruit);
sides.appendChild(fruitp);

menu.appendChild(head);
menu.appendChild(beverages);
menu.appendChild(sides);
menu.classList.add('menu');

export default menu;