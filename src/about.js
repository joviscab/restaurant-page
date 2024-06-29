

function createAboutPage() {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const title = document.createElement('h1');
    title.textContent = 'About Herbivore Delight';
    pageContent.appendChild(title);

    const infoAbout = document.createElement('p');
    infoAbout.textContent = 'Welcome to Herbivore Delight, where plant-based cuisine meets culinary innovation in the heart of Paris. At Herbivore Delight, we are passionate about creating delicious vegan dishes that not only satisfy the palate but also promote health, sustainability, and compassion.';
    pageContent.appendChild(infoAbout);
    content.appendChild(pageContent);

    const infoTitle1 = document.createElement('h3');
    infoTitle1.textContent = 'Our Philosophy';
    pageContent.appendChild(infoTitle1);
    content.appendChild(pageContent);

    const infoAbout1 = document.createElement('p');
    infoAbout1.textContent = 'At Herbivore Delight, we believe in the power of plants to nourish both body and soul. Our menu is inspired by the bounty of nature, featuring fresh, seasonal ingredients sourced locally whenever possible. We are committed to providing wholesome, flavorful meals that showcase the diversity and richness of vegan cuisine.';
    pageContent.appendChild(infoAbout1);
    content.appendChild(pageContent);

    const infoTitle2 = document.createElement('h3');
    infoTitle2.textContent = 'Our Chef';
    pageContent.appendChild(infoTitle2);
    content.appendChild(pageContent);

    const infoAbout2 = document.createElement('p');
    infoAbout2.textContent = 'Meet Chef John Schmutzler, our visionary culinary artist dedicated to crafting exceptional plant-based dishes. With a background in brazilian vegan cuisine, Chef John Schmutzler brings a creative flair and passion for sustainable cooking to every plate at Herbivore Delight. Each dish is thoughtfully prepared to elevate the dining experience and inspire a love for plant-based eating.';
    pageContent.appendChild(infoAbout2);
    content.appendChild(pageContent);

    const infoTitle3 = document.createElement('h3');
    infoTitle3.textContent = 'Our Menu';
    pageContent.appendChild(infoTitle3);
    content.appendChild(pageContent);

    const infoAbout3 = document.createElement('p');
    infoAbout3.textContent = 'From vibrant salads and hearty main courses to indulgent desserts and refreshing beverages, our menu at Herbivore Delight offers something for every palate. Whether you are a committed vegan, exploring plant-based options, or simply curious about delicious food, our diverse selection promises to delight and satisfy.';
    pageContent.appendChild(infoAbout3);
    content.appendChild(pageContent);

    const infoTitle4 = document.createElement('h3');
    infoTitle4.textContent = 'Our Commitment';
    pageContent.appendChild(infoTitle4);
    content.appendChild(pageContent);

    const infoAbout4 = document.createElement('p');
    infoAbout4.textContent = 'Beyond serving exceptional food, we are dedicated to creating a welcoming and inclusive atmosphere for our guests. At Herbivore Delight, we strive to foster a community where everyone feels valued and inspired by the benefits of a plant-based lifestyle.';
    pageContent.appendChild(infoAbout4);
    content.appendChild(pageContent);

    const infoTitle5 = document.createElement('h3');
    infoTitle5.textContent = 'Visit Us';
    pageContent.appendChild(infoTitle5);
    content.appendChild(pageContent);

    const infoAbout5 = document.createElement('p');
    infoAbout5.textContent = 'Located in Paris, Herbivore Delight invites you to experience a new standard of vegan dining. Join us for a meal that celebrates freshness, flavor, and sustainability. Whether you are dining in or taking out, we look forward to sharing our passion for plant-based cuisine with you.';
    pageContent.appendChild(infoAbout5);
    content.appendChild(pageContent);

    const infoAbout6 = document.createElement('p');
    infoAbout6.textContent = 'Thank you for choosing Herbivore Delight. We cannot wait to welcome you to our table and share the joy of plant-powered eating.';
    pageContent.appendChild(infoAbout6);
    content.appendChild(pageContent);
}

export default createAboutPage;