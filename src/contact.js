import './contact.css'

const header = document.createElement('h1');
const mail = document.createElement('h3');
const email = document.createElement('p');
const number = document.createElement('h3');
const phoneNumber = document.createElement('p');
const contactPage = document.createElement('div');

mail.textContent = 'Email';
email.textContent = 'foodie@gmail.com';
number.textContent = 'Number';
phoneNumber.textContent = '12303999330';
header.textContent = 'Contact us';

contactPage.appendChild(header);
contactPage.appendChild(mail);
contactPage.appendChild(email);
contactPage.appendChild(number);
contactPage.appendChild(phoneNumber);
contactPage.classList.add('contact');

export default contactPage;
