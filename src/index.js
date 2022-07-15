import homepage from './home.js';
import menupage from './menu.js';
import contactPage from './contact.js';
import './index.css';


const body = document.querySelector('body'); 
const content = document.createElement('div');
const navBar = document.createElement('nav');
const home = document.createElement('a');
const contact = document.createElement('a');
const  menu = document.createElement('a');
home.textContent = 'HOME';
contact.textContent ='CONTACT';
menu.textContent = 'MENU';
home.addEventListener('click', (e) =>
{
    content.replaceChild(homepage, content.children[1])
});

menu.addEventListener('click', (e) =>
{
    content.replaceChild(menupage, content.children[1])
});
contact.addEventListener('click', (e) =>
{
    content.replaceChild(contactPage, content.children[1])
});

navBar.appendChild(home);
navBar.appendChild(contact);
navBar.appendChild(menu);

content.appendChild(navBar);
content.appendChild(homepage);
body.appendChild(content);