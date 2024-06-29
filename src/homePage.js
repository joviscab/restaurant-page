import restaurantImage from './img/restaurant.jpg'

function createRestaurantHomePage() {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const image = document.createElement('img');
    image.src = restaurantImage;
    image.height = '300';
    pageContent.appendChild(image);

    const title = document.createElement('h1');
    title.textContent = 'Welcome to [Restaurant Name]';
    pageContent.appendChild(title);

    const description = document.createElement('p');
    description.textContent = 'At [Restaurant Name], we believe that dining should be an experience that tantalizes all your senses. Nestled in the heart of [City], our restaurant offers an exquisite blend of traditional flavors and contemporary culinary innovation.';
    pageContent.appendChild(description);
    content.appendChild(pageContent);
}

export default createRestaurantHomePage;