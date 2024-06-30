import '../src/style/about.css';
import chefImageSrc from './img/chefImage.jpg';

function createAboutPage() {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-aboutcontent');

    const title = document.createElement('h1');
    title.textContent = 'About Herbivore Delight';
    title.classList.add('about-title');
    pageContent.appendChild(title);

    const infoAbout = document.createElement('p');
    infoAbout.textContent = 'Welcome to Herbivore Delight, where plant-based cuisine meets culinary innovation in the heart of Paris. At Herbivore Delight, we are passionate about creating delicious vegan dishes that not only satisfy the palate but also promote health, sustainability, and compassion.';
    infoAbout.classList.add('about-text');
    pageContent.appendChild(infoAbout);

    const infoTitle1 = document.createElement('h3');
    infoTitle1.textContent = 'Our Philosophy';
    infoTitle1.classList.add('about-subtitle');
    pageContent.appendChild(infoTitle1);

    const infoAbout1 = document.createElement('p');
    infoAbout1.textContent = 'At Herbivore Delight, we believe in the power of plants to nourish both body and soul. Our menu is inspired by the bounty of nature, featuring fresh, seasonal ingredients sourced locally whenever possible. We are committed to providing wholesome, flavorful meals that showcase the diversity and richness of vegan cuisine.';
    infoAbout1.classList.add('about-text');
    pageContent.appendChild(infoAbout1);

    const infoTitle2 = document.createElement('h3');
    infoTitle2.textContent = 'Our Chef';
    infoTitle2.classList.add('about-subtitle');
    pageContent.appendChild(infoTitle2);

    const image = document.createElement('img');
    image.classList.add('chef-img');
    image.src = chefImageSrc;
    image.height = '400';
    pageContent.appendChild(image);

    const infoAbout2 = document.createElement('p');
    infoAbout2.textContent = 'Meet Chef Sorriso Pérez Schmutzler, our visionary culinary artist dedicated to crafting exceptional plant-based dishes. With a background in brazilian vegan cuisine, Chef Sorriso Pérez Schmutzler brings a creative flair and passion for sustainable cooking to every plate at Herbivore Delight. Each dish is thoughtfully prepared to elevate the dining experience and inspire a love for plant-based eating.';
    infoAbout2.classList.add('about-text');
    pageContent.appendChild(infoAbout2);

    const infoTitle3 = document.createElement('h3');
    infoTitle3.textContent = 'Our Menu';
    infoTitle3.classList.add('about-subtitle');
    pageContent.appendChild(infoTitle3);

    const infoAbout3 = document.createElement('p');
    infoAbout3.textContent = 'From vibrant salads and hearty main courses to indulgent desserts and refreshing beverages, our menu at Herbivore Delight offers something for every palate. Whether you are a committed vegan, exploring plant-based options, or simply curious about delicious food, our diverse selection promises to delight and satisfy.';
    infoAbout3.classList.add('about-text');
    pageContent.appendChild(infoAbout3);

    const infoTitle4 = document.createElement('h3');
    infoTitle4.textContent = 'Our Commitment';
    infoTitle4.classList.add('about-subtitle');
    pageContent.appendChild(infoTitle4);

    const infoAbout4 = document.createElement('p');
    infoAbout4.textContent = 'Beyond serving exceptional food, we are dedicated to creating a welcoming and inclusive atmosphere for our guests. At Herbivore Delight, we strive to foster a community where everyone feels valued and inspired by the benefits of a plant-based lifestyle.';
    infoAbout4.classList.add('about-text');
    pageContent.appendChild(infoAbout4);

    const infoTitle5 = document.createElement('h3');
    infoTitle5.textContent = 'Visit Us';
    infoTitle5.classList.add('about-subtitle');
    pageContent.appendChild(infoTitle5);

    const infoAbout5 = document.createElement('p');
    infoAbout5.textContent = 'Located in Paris, Herbivore Delight invites you to experience a new standard of vegan dining. Join us for a meal that celebrates freshness, flavor, and sustainability. Whether you are dining in or taking out, we look forward to sharing our passion for plant-based cuisine with you.';
    infoAbout5.classList.add('about-text');
    pageContent.appendChild(infoAbout5);

    const infoAbout6 = document.createElement('p');
    infoAbout6.textContent = 'Thank you for choosing Herbivore Delight. We cannot wait to welcome you to our table and share the joy of plant-powered eating.';
    infoAbout6.classList.add('about-text');
    pageContent.appendChild(infoAbout6);

    content.appendChild(pageContent); 
}

export default createAboutPage;
