import '../src/style/home.css';
import restaurantImage from './img/restaurant.jpg'

function createRestaurantHome() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const image = document.createElement('img');
    image.classList.add('home-img');
    image.src = restaurantImage;
    image.height = '400';
    pageContent.appendChild(image);

    const title = document.createElement('h1');
    title.classList.add('home-title');
    title.textContent = 'Welcome to Herbivore Delight';
    pageContent.appendChild(title);

    const description = document.createElement('p');
    description.classList.add('home-description');
    description.textContent = 'At Herbivore Delight, we believe that dining should be an experience that tantalizes all your senses. Nestled in the heart of Paris, our restaurant offers an exquisite blend of traditional flavors and contemporary culinary innovation.';
    pageContent.appendChild(description);
    content.appendChild(pageContent);
}

export default createRestaurantHome;