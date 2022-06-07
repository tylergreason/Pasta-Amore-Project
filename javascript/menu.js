const foodData = {
	'For the Family': [
		{
			title: 'Spaghetti and Meatballs',
			desc: 'House-made meatballs in marinara on spaghetti',
			price: '$25',
		},
		{
			title: 'Sausage Tortelloni',
			desc: 'Mozzarella- and sausage-filled tortelloni, pomodoro, basil',
			price: '$25',
		},
		{
			title: 'Lasagna',
			desc: 'Our classic meat sauce, alfredo, ricotta, mozzarella',
			price: '$26',
		},
		{
			title: 'Polenta Ravioli',
			desc: 'Artichoke, parmesan, sausage',
			price: '$22',
		},
		{
			title: 'Spaghetti Pomodoro',
			desc: 'Tomatoes, basil, extra-virgin olive oil, with parmesan',
			price: '$24',
		},
		{
			title: 'Spaghetti Bolognese',
			desc: 'Ground beef and pork, red wine, tomatoes',
			price: '$25',
		},
	],

	'Classic Italian': [
		{
			title: 'Shrimp Scampi',
			desc: 'Sautéed shrimp in spaghetti with garlic crostini',
			price: '$16',
		},
		{
			title: 'Chicken Parmesan',
			desc:
				'Breaded chicken in marinara sauce, mozzarella, herb linguine',
			price: '$15',
		},
		{
			title: 'Filet Mignon',
			desc: '6 oz aged cut, mashed potatoes, and grilled asparagus',
			price: '$22',
		},
		{
			title: 'Shrimp Alfredo',
			desc:
				'Fresh fettuccine alfredo with premium shrimp in the “scampi” style',
			price: '$16',
		},
		{
			title: 'Chicken Caprese',
			desc:
				'Spinach, tomato, orzo, farro, pesto vinaigrette, and balsamic glaze',
			price: '$15',
		},
		{
			title: 'Fiorentina Steak',
			desc:
				'Bistecca fiorentina - specially prepared thick-cut t-bone steak',
			price: '$24',
		},
		{
			title: 'Fettuccine Alfredo',
			desc: 'Fettuccine, parmesan cheese and fresh cream',
			price: '$14',
		},
		{
			title: 'Chicken Marsala',
			desc:
				'Grilled chicken in a mushroom marsala sauce with mashed potatoes',
			price: '$15',
		},
		{
			title: 'Meatballs and Ricotta',
			desc: 'Beef and pork meatballs, ricotta, garlic crostini',
			price: '$16',
		},
	],

	Appetizers: [
		{
			title: 'Spinach and Artichoke Dip',
			desc: 'Spinach, creamy artichoke, parmesan bread',
			price: '$10',
		},
		{
			title: 'Tomato Caprese',
			desc: 'Fresh mozzarella, basil, and a balsamic glaze',
			price: '$12',
		},
		{
			title: 'Ribollita',
			desc: 'Hearty, bread-thickened stew',
			price: '$10',
		},
		{
			title: 'Margherita Flatbread',
			desc: 'Ripe tomatoes and mozzarella with fresh basil',
			price: '$12',
		},
		{
			title: 'Bottarga',
			desc: '“Scilian Caviar” - cured mullet roe',
			price: '$15',
		},
		{
			title: 'Calamari',
			desc: 'Crisp calamari with arrabbiatta and lemon aioli',
			price: '$12',
		},
	],

	'New From Our Kitchen': [
		{
			title: 'Gnocchi',
			desc: 'Potato and cheese dumplings',
			price: '$13',
		},
		{
			title: 'Arancini',
			desc:
				'Bread-coated fried rice balls stuffed with peppers, basil, mozzarella',
			price: '$12',
		},
		{
			title: 'Shrimp Risotto',
			desc:
				'Succulent shrimp in a onion, olive oil, and white wine sauce with parmesan cheese',
			price: '$15',
		},
		{
			title: 'Prosciutto Pasta',
			desc: 'Cured ham thinly sliced on pasta with parmesan',
			price: '$15',
		},
		{
			title: 'Chicken Pappardelle',
			desc: 'Marinated chicken in a basil and tomato sauce',
			price: '$16',
		},
		{
			title: 'Ragu Alla Bolognese',
			desc: 'Minced beef in a garlic, wine, and herbs sauce',
			price: '$15',
		},
	],
};

let sections = [];

for (const key in foodData) {
	const newSection = document.createElement('section');
	newSection.classList.add(key.replaceAll(' ', '-'));
	const header = document.createElement('h2');
	header.textContent = key;
	header.classList.add('section-title');
	newSection.appendChild(header);

	const menuItems = document.createElement('div');
	menuItems.classList.add('menu-items');

	foodData[key].forEach((item) => {
		const itemFragment = `
        <div class="menu-item">
            <div class="title-row">
                <span class="title">${item.title}</span>
                <span class="price">${item.price}</span>
            </div>
        
            <div class="description">
                ${item.desc}
            </div>
        </div>`;
		menuItems.appendChild(
			document.createRange().createContextualFragment(itemFragment)
		);
	});

	newSection.appendChild(menuItems);
	sections.push(newSection);
}
const menuWrapper = document.querySelector('.menu-wrapper');
sections.forEach((section) => {
	menuWrapper.appendChild(section);
});
