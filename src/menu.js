import '../src/style/menu.css';

function createMenuPage() {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-menucontent');

    const title = document.createElement('h1');
    title.textContent = 'Our Menu';
    title.classList.add('menu-title');
    pageContent.appendChild(title);

    const starters = document.createElement('h2');
    starters.textContent = 'Starters';
    starters.classList.add('menu-subtitle');
    pageContent.appendChild(starters);

    const menu1Title = document.createElement('h3');
    menu1Title.textContent = 'Roasted Red Pepper Hummus - $8.00';
    menu1Title.classList.add('menu-platename');
    pageContent.appendChild(menu1Title);
    content.appendChild(pageContent);

    const menu1Detail = document.createElement('p');
    menu1Detail.textContent = 'Creamy hummus topped with roasted red peppers, served with warm pita bread and fresh vegetables.';
    menu1Detail.classList.add('menu-detail');
    pageContent.appendChild(menu1Detail);
    content.appendChild(pageContent);

    const menu2Title = document.createElement('h3');
    menu2Title.textContent = 'Stuffed Mushrooms - $9.50';
    menu2Title.classList.add('menu-platename');
    pageContent.appendChild(menu2Title);
    content.appendChild(pageContent);

    const menu2Detail = document.createElement('p');
    menu2Detail.textContent = 'Juicy mushrooms stuffed with a blend of spinach, garlic, and vegan cheese, baked to perfection.';
    menu2Detail.classList.add('menu-detail');
    pageContent.appendChild(menu2Detail);
    content.appendChild(pageContent);
    
    const menu3Title = document.createElement('h3');
    menu3Title.textContent = 'Avocado Bruschetta - $7.50';
    menu3Title.classList.add('menu-platename');
    pageContent.appendChild(menu3Title);
    content.appendChild(pageContent);

    const menu3Detail = document.createElement('p');
    menu3Detail.textContent = 'Fresh avocado, cherry tomatoes, and basil on toasted baguette slices, drizzled with balsamic glaze.';
    menu3Detail.classList.add('menu-detail');
    pageContent.appendChild(menu3Detail);
    content.appendChild(pageContent);

    const salads = document.createElement('h2');
    salads.textContent = 'Salads';
    salads.classList.add('menu-subtitle');
    pageContent.appendChild(salads);

    const menu4Title = document.createElement('h3');
    menu4Title.textContent = 'Quinoa and Kale Salad - $10.00';
    menu4Title.classList.add('menu-platename');
    pageContent.appendChild(menu4Title);
    content.appendChild(pageContent);

    const menu4Detail = document.createElement('p');
    menu4Detail.textContent = 'A refreshing mix of quinoa, kale, cherry tomatoes, cucumbers, and red onions, tossed in a lemon-tahini dressing.';
    menu4Detail.classList.add('menu-detail');
    pageContent.appendChild(menu4Detail);
    content.appendChild(pageContent);
    
    const menu5Title = document.createElement('h3');
    menu5Title.textContent = 'Mediterranean Chickpea Salad - $9.00';
    menu5Title.classList.add('menu-platename');
    pageContent.appendChild(menu5Title);
    content.appendChild(pageContent);

    const menu5Detail = document.createElement('p');
    menu5Detail.textContent = 'Chickpeas, cucumbers, tomatoes, red onions, olives, and fresh parsley, served with a tangy red wine vinaigrette.';
    menu5Detail.classList.add('menu-detail');
    pageContent.appendChild(menu5Detail);
    content.appendChild(pageContent);

    const mainCourses = document.createElement('h2');
    mainCourses.textContent = 'Main Courses';
    mainCourses.classList.add('menu-subtitle');
    pageContent.appendChild(mainCourses);

    const menu6Title = document.createElement('h3');
    menu6Title.textContent = 'Vegan Buddha Bowl - $13.00';
    menu6Title.classList.add('menu-platename');
    pageContent.appendChild(menu6Title);
    content.appendChild(pageContent);

    const menu6Detail = document.createElement('p');
    menu6Detail.textContent = 'A colorful bowl of quinoa, roasted sweet potatoes, chickpeas, avocado, and mixed greens, topped with a creamy tahini dressing.';
    menu6Detail.classList.add('menu-detail');
    pageContent.appendChild(menu6Detail);
    content.appendChild(pageContent);

    const menu7Title = document.createElement('h3');
    menu7Title.textContent = 'Lentil and Vegetable Stew - $12.00';
    menu7Title.classList.add('menu-platename');
    pageContent.appendChild(menu7Title);
    content.appendChild(pageContent);

    const menu7Detail = document.createElement('p');
    menu7Detail.textContent = 'Hearty lentils and a medley of seasonal vegetables simmered in a rich tomato broth, served with crusty bread.';
    menu7Detail.classList.add('menu-detail');
    pageContent.appendChild(menu7Detail);
    content.appendChild(pageContent);

    const menu8Title = document.createElement('h3');
    menu8Title.textContent = 'Stuffed Bell Peppers - $11.50';
    menu8Title.classList.add('menu-platename');
    pageContent.appendChild(menu8Title);
    content.appendChild(pageContent);

    const menu8Detail = document.createElement('p');
    menu8Detail.textContent = 'Bell peppers filled with a savory mix of rice, black beans, corn, and spices, topped with avocado crema.';
    menu8Detail.classList.add('menu-detail');
    pageContent.appendChild(menu8Detail);
    content.appendChild(pageContent);

    const pasta = document.createElement('h2');
    pasta.textContent = 'Pasta';
    pasta.classList.add('menu-subtitle');
    pageContent.appendChild(pasta);

    const menu9Title = document.createElement('h3');
    menu9Title.textContent = 'Vegan Pesto Pasta - $14.00';
    menu9Title.classList.add('menu-platename');
    pageContent.appendChild(menu9Title);
    content.appendChild(pageContent);

    const menu9Detail = document.createElement('p');
    menu9Detail.textContent = 'Al dente pasta tossed with a vibrant basil pesto, cherry tomatoes, and spinach, garnished with pine nuts.';
    menu9Detail.classList.add('menu-detail');
    pageContent.appendChild(menu9Detail);
    content.appendChild(pageContent);

    const menu10Title = document.createElement('h3');
    menu10Title.textContent = 'Mushroom Stroganoff - $13.50';
    menu10Title.classList.add('menu-platename');
    pageContent.appendChild(menu10Title);
    content.appendChild(pageContent);

    const menu10Detail = document.createElement('p');
    menu10Detail.textContent = 'Creamy mushroom stroganoff served over wide noodles, finished with fresh parsley.';
    menu10Detail.classList.add('menu-detail');
    pageContent.appendChild(menu10Detail);
    content.appendChild(pageContent);

    const desserts = document.createElement('h2');
    desserts.textContent = 'Desserts';
    desserts.classList.add('menu-subtitle');
    pageContent.appendChild(desserts);

    const menu11Title = document.createElement('h3');
    menu11Title.textContent = 'Vegan Chocolate Mousse - $7.00';
    menu11Title.classList.add('menu-platename');
    pageContent.appendChild(menu11Title);
    content.appendChild(pageContent);

    const menu11Detail = document.createElement('p');
    menu11Detail.textContent = 'Rich and silky chocolate mousse made with avocado and dark chocolate, topped with fresh berries.';
    menu11Detail.classList.add('menu-detail');
    pageContent.appendChild(menu11Detail);
    content.appendChild(pageContent);

    const menu12Title = document.createElement('h3');
    menu12Title.textContent = 'Coconut Milk Ice Cream - $6.50';
    menu12Title.classList.add('menu-platename');
    pageContent.appendChild(menu12Title);
    content.appendChild(pageContent);

    const menu12Detail = document.createElement('p');
    menu12Detail.textContent = 'Creamy coconut milk ice cream available in a variety of flavors, including vanilla, chocolate, and mango.';
    menu12Detail.classList.add('menu-detail');
    pageContent.appendChild(menu12Detail);
    content.appendChild(pageContent);

    const menu13Title = document.createElement('h3');
    menu13Title.textContent = 'Chia Seed Pudding - $5.50';
    menu13Title.classList.add('menu-platename');
    pageContent.appendChild(menu13Title);
    content.appendChild(pageContent);

    const menu13Detail = document.createElement('p');
    menu13Detail.textContent = 'Chia seeds soaked in almond milk and vanilla, topped with mixed berries and a drizzle of agave syrup.';
    menu13Detail.classList.add('menu-detail');
    pageContent.appendChild(menu13Detail);
    content.appendChild(pageContent);

    const beverages = document.createElement('h2');
    beverages.textContent = 'Beverages';
    beverages.classList.add('menu-subtitle');
    pageContent.appendChild(beverages);

    const menu14Title = document.createElement('h3');
    menu14Title.textContent = 'Freshly Squeezed Juice - $4.00';
    menu14Title.classList.add('menu-platename');
    pageContent.appendChild(menu14Title);
    content.appendChild(pageContent);

    const menu14Detail = document.createElement('p');
    menu14Detail.textContent = 'Choose from a selection of freshly squeezed juices, including orange, apple, and carrot.';
    menu14Detail.classList.add('menu-detail');
    pageContent.appendChild(menu14Detail);
    content.appendChild(pageContent);
    
    const menu15Title = document.createElement('h3');
    menu15Title.textContent = 'Herbal Teas - $3.50';
    menu15Title.classList.add('menu-platename');
    pageContent.appendChild(menu15Title);
    content.appendChild(pageContent);

    const menu15Detail = document.createElement('p');
    menu15Detail.textContent = 'A variety of soothing herbal teas, including chamomile, peppermint, and rooibos.';
    menu15Detail.classList.add('menu-detail');
    pageContent.appendChild(menu15Detail);
    content.appendChild(pageContent);

    const menu16Title = document.createElement('h3');
    menu16Title.textContent = 'Smoothie of the Day - $6.00';
    menu16Title.classList.add('menu-platename');
    pageContent.appendChild(menu16Title);
    content.appendChild(pageContent);

    const menu16Detail = document.createElement('p');
    menu16Detail.textContent = 'A daily special smoothie made with fresh, seasonal fruits and vegetables.';
    menu16Detail.classList.add('menu-detail');
    pageContent.appendChild(menu16Detail);
    content.appendChild(pageContent);
}

export default createMenuPage;