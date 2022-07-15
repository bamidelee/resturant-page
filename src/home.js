import food1 from './food1.jpg';
import food2 from './food2.jpg';
import food3 from './food3.jpg';
import './home.css';




    const home = document.createElement('div');
   
    const header = document.createElement('header');
    const intro = document.createElement('h4');
    const phrase = document.createElement('h1');
    const discover = document.createElement('a');
    const gallery = document.createElement('div');
    const image1 = new Image();
    const image2 = new Image();
    const image3 = new Image();

    image1.src = food1;
    image2.src = food2;
    image3.src = food3;
    
    gallery.appendChild(image1);
    gallery.appendChild(image2);
    gallery.appendChild(image3);
    gallery.classList.add('gallery');

    intro.textContent ='Discover your taste';
    phrase.textContent = 'Eat healthy and Natural Food';
    discover.textContent = 'Foodie';

    header.appendChild(intro);
    header.appendChild(phrase);
    header.appendChild(discover);
    header.classList.add('header');

    home.appendChild(header);
    home.appendChild(gallery);
    home.classList.add('home');

 export default home;

 let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = [image1, image2, image3];
  for (i = 0; i < slides.length; i++) {
    slides[i].className = "image";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].classList.add('slide');
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
