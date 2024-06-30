import createAboutPage from './about';
import createRestaurantHome from './home';
import createMenuPage from './menu';
import pageLoad from './pageLoad';

//pageLoad function
pageLoad();

const content = document.querySelector('#content');
const homeButton = document.querySelector('.home-btn');
const menuButton = document.querySelector('.menu-btn');
const aboutButton = document.querySelector('.about-btn');


//updateContent function
function updateContent(createFunction) {
    content.innerHTML = '';
    createFunction();
}


aboutButton.addEventListener('click', () => updateContent(createAboutPage));
menuButton.addEventListener('click', () => updateContent(createMenuPage));
homeButton.addEventListener('click', () => updateContent(createRestaurantHome));
 