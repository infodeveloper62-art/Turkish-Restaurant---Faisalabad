import { MenuItem, Review, GalleryItem } from '../models/restaurant.model';

export const RESTAURANT_INFO = {
  name: 'TURKISH RESTAURANT',
  tagline: 'Authentic Turkish Taste in Faisalabad',
  city: 'Faisalabad, Pakistan',
  address: 'Lahore - Sheikhupura - Faisalabad Rd, near Misaq ul Mall, opposite Imtiaz Mart, Nishatabad, Faisalabad, 38000, Pakistan',
  landmark: 'Near Misaq ul Mall, Opposite Imtiaz Mart, Nishatabad',
  phone1: '+92 41 876 5432',
  phone2: '+92 300 7654321',
  whatsapp: '+923007654321',
  email: 'reservations@turkishrestaurant.pk',
  supportEmail: 'info@turkishrestaurant.pk',
  openingHours: [
    { days: 'Monday – Thursday', hours: '12:00 PM – 12:00 Midnight' },
    { days: 'Friday', hours: '02:00 PM – 01:00 AM' },
    { days: 'Saturday – Sunday', hours: '12:00 PM – 01:00 AM' },
  ],
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13617.48419736825!2d73.09641775!3d31.45524675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242bc02e4823d%3A0x7ce08d51ee2bcab1!2sMisaq%20ul%20Mall!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s',
  mapDirectionsUrl: 'https://maps.google.com/?q=Lahore+-+Sheikhupura+-+Faisalabad+Rd,+near+Misaq+ul+Mall,+opposite+Imtiaz+Mart,+Nishatabad,+Faisalabad,+Pakistan'
};

export const POPULAR_DISHES: MenuItem[] = [
  {
    id: 'pop-1',
    name: 'Adana Kebab',
    turkishName: 'Zırh Kebabı',
    category: 'kebabs',
    description: 'Hand-minced prime lamb and beef kneaded with red bell peppers and Turkish spices, skewered over live charcoal mangal. Served with charred chillies, sumac onion salad, and warm lavash.',
    pricePKR: 1950,
    image: '/images/adana-kebab.jpg',
    tag: 'Signature Grill',
    spicyLevel: 2,
    isPopular: true,
    portionSize: '2 Skewers with Pilaf & Lavash'
  },
  {
    id: 'pop-2',
    name: 'Turkish Mixed Grill',
    turkishName: 'Karışık Izgara Platter',
    category: 'main',
    description: 'The ultimate royal feast: juicy lamb chops (pirzola), Adana kebab skewer, Tavuk Şiş (chicken cubes), beef tenderloin, grilled tomatoes, buttered bulgur pilaf, and freshly baked Turkish flatbread.',
    pricePKR: 3850,
    image: '/images/mixed-grill.jpg',
    tag: "Chef's Masterpiece",
    spicyLevel: 1,
    isPopular: true,
    portionSize: 'Serves 2-3 Persons'
  },
  {
    id: 'pop-3',
    name: 'Turkish Pide',
    turkishName: 'Kuşbaşılı & Kaşarlı Pide',
    category: 'pide',
    description: 'Traditional boat-shaped flatbread stone-baked to golden perfection, topped with slow-marinated diced tender beef, charred capsicum, pomodoro puree, and gooey melted Turkish Kaşar cheese.',
    pricePKR: 1450,
    image: '/images/turkish-pide.jpg',
    tag: 'Stone Oven Baked',
    spicyLevel: 1,
    isPopular: true,
    portionSize: 'Full 14-inch Boat'
  },
  {
    id: 'pop-4',
    name: 'Crispy Lahmacun',
    turkishName: 'Taş Fırın Lahmacunu',
    category: 'pide',
    description: 'Ultra-thin, crispy Anatolian flatbread rolled with finely spiced minced mutton, crushed tomatoes, garlic, and fresh herbs. Serve rolled with fresh parsley and freshly squeezed lemon juice.',
    pricePKR: 750,
    image: '/images/lahmacun.jpg',
    tag: 'Anatolian Classic',
    spicyLevel: 1,
    isPopular: true,
    portionSize: '2 Large Pieces'
  },
  {
    id: 'pop-5',
    name: 'Turkish Kebab (Urfa / Shish)',
    turkishName: 'Kuzu Çöp Şiş Kebabı',
    category: 'kebabs',
    description: 'Tender marinated cubes of milk-fed lamb, infused with Aegean olive oil, wild thyme, and Turkish mild red pepper, flame-grilled on charcoal for an unmatched smoky tenderness.',
    pricePKR: 2150,
    image: '/images/urfa-shish-kebab.jpg',
    tag: 'Charcoal Flame',
    spicyLevel: 1,
    isPopular: true,
    portionSize: '2 Full Skewers with Rice'
  },
  {
    id: 'pop-6',
    name: 'Chicken Shawarma / Döner',
    turkishName: 'Tavuk Döner Tabağı',
    category: 'main',
    description: 'Vertically roasted marinated chicken shaved into succulent slices, layered over toasted pita bread with garlic yoghurt sauce, tomato butter glaze, and pickled Turkish cucumbers.',
    pricePKR: 1250,
    image: '/images/shawarma-doner.jpg',
    tag: 'Istanbul Street Special',
    spicyLevel: 0,
    isPopular: true,
    portionSize: 'Full Platter with Fries & Pickles'
  },
  {
    id: 'pop-7',
    name: 'Pistachio Baklava',
    turkishName: 'Gaziantep Fıstıklı Baklava',
    category: 'desserts',
    description: 'Forty layers of razor-thin hand-rolled yufka pastry, packed generously with vibrant emerald green Antep pistachios, drenched in pure honeyed sugar syrup and clarified farm butter.',
    pricePKR: 850,
    image: '/images/pistachio-baklava.jpg',
    tag: 'Imported Antep Pistachio',
    spicyLevel: 0,
    isPopular: true,
    portionSize: '4 Pieces'
  },
  {
    id: 'pop-8',
    name: 'Traditional Turkish Tea',
    turkishName: 'Geleneksel Türk Çayı',
    category: 'drinks',
    description: 'Double-kettle brewed black tea sourced directly from the Black Sea slopes of Rize, Turkey. Poured ruby-red into authentic hourglass glass tumblers and served with beet sugar cubes.',
    pricePKR: 290,
    image: '/images/turkish-tea.jpg',
    tag: 'Black Sea Heritage',
    spicyLevel: 0,
    isPopular: true,
    portionSize: 'Traditional Glass with Sweet Treats'
  }
];

export const FULL_MENU: MenuItem[] = [
  // Starters / Mezze
  {
    id: 'st-1',
    name: 'Sultan Mezze Platter',
    turkishName: 'Karışık Meze Tabağı',
    category: 'starters',
    description: 'A grand Ottoman selection: silky roasted eggplant Babaganoush, creamy mint Haydari, spicy Acılı Ezme, creamy garlic Hummus, and warm sesame seed bread.',
    pricePKR: 1350,
    image: '/images/mezze-platter.jpg',
    tag: 'Vegetarian Friendly',
    spicyLevel: 1,
    isVegetarian: true,
    portionSize: 'Serves 2-3'
  },
  {
    id: 'st-2',
    name: 'Sigara Böreği (Cheese Rolls)',
    turkishName: 'Peynirli Sigara Böreği',
    category: 'starters',
    description: 'Crispy fried phyllo pastry rolls stuffed with Turkish feta cheese, fresh parsley, and cracked black pepper, served with a sweet pomegranate dipping sauce.',
    pricePKR: 850,
    image: '/images/turkish-pide.jpg',
    tag: 'Crispy Favorite',
    spicyLevel: 0,
    isVegetarian: true,
    portionSize: '6 Pieces'
  },
  {
    id: 'st-3',
    name: 'Mercimek Çorbası (Red Lentil Soup)',
    turkishName: 'Geleneksel Mercimek Çorbası',
    category: 'starters',
    description: 'Velvety slow-simmered red lentils with caramelized onions, dried mint, and a sizzling paprika-butter swirl. Accompanied by fresh lemon and crusty bread.',
    pricePKR: 590,
    image: '/images/mezze-platter.jpg',
    tag: 'Turkish Comfort Soup',
    spicyLevel: 0,
    isVegetarian: true,
    portionSize: 'Bowl with Warm Bread'
  },
  {
    id: 'st-4',
    name: 'Hummus with Pastırma',
    turkishName: 'Pastırmalı Sıcak Humus',
    category: 'starters',
    description: 'Warm, oven-baked chickpea purée blended with Tahini and lemon, topped with cured Turkish pastırma beef slices and sizzling pine nuts in clarified butter.',
    pricePKR: 1150,
    image: '/images/mezze-platter.jpg',
    tag: 'Gourmet Mezze',
    spicyLevel: 0,
    portionSize: 'Warm Clay Dish'
  },

  // Kebabs
  {
    id: 'kb-1',
    name: 'Adana Kebab',
    turkishName: 'Acılı Zırh Kebabı',
    category: 'kebabs',
    description: 'Hand-chopped lamb and beef spiced with chili peppers and roasted over red-hot charcoal. Served on freshly baked lavas bread with grilled peppers and sumac salad.',
    pricePKR: 1950,
    image: '/images/adana-kebab.jpg',
    tag: 'Spicy Favorite',
    spicyLevel: 2,
    isPopular: true,
    portionSize: '2 Skewers with Rice & Lavash'
  },
  {
    id: 'kb-2',
    name: 'Beyti Sarma Kebab',
    turkishName: 'Beyti Sarma Kebabı',
    category: 'kebabs',
    description: 'Grilled minced lamb wrapped in fresh lavash bread, sliced and topped with rich tomato coulis, sizzling browned butter, and creamy Turkish strained yoghurt.',
    pricePKR: 2250,
    image: '/images/adana-kebab.jpg',
    tag: 'Royal Special',
    spicyLevel: 1,
    portionSize: 'Full Roll with Yoghurt'
  },
  {
    id: 'kb-3',
    name: 'Tavuk Şiş (Chicken Shish Kebab)',
    turkishName: 'Marine Tavuk Şiş',
    category: 'kebabs',
    description: 'Succulent boneless chicken breast chunks marinated 24 hours in Turkish yoghurt, garlic, sweet paprika, and Aegean olive oil, then charcoal grilled.',
    pricePKR: 1650,
    image: '/images/urfa-shish-kebab.jpg',
    tag: 'Mild & Juicy',
    spicyLevel: 0,
    portionSize: '2 Skewers with Bulgur'
  },
  {
    id: 'kb-4',
    name: 'Kuzu Pirzola (Turkish Lamb Chops)',
    turkishName: 'Kömür Ateşinde Pirzola',
    category: 'kebabs',
    description: 'Four tender prime lamb cutlets delicately rubbed with wild mountain thyme, rosemary, and sea salt, seared over charcoal for maximum juiciness.',
    pricePKR: 2850,
    image: '/images/mixed-grill.jpg',
    tag: 'Prime Cut',
    spicyLevel: 0,
    portionSize: '4 Chops with Grilled Veggies'
  },
  {
    id: 'kb-5',
    name: 'Ali Nazik Kebab',
    turkishName: 'Gaziantep Ali Nazik',
    category: 'kebabs',
    description: 'Sautéed tender diced lamb tenderloin served atop a rich bed of smoked eggplant purée whipped with garlic yoghurt and finished with red pepper butter.',
    pricePKR: 2350,
    image: '/images/urfa-shish-kebab.jpg',
    tag: 'Gaziantep Heritage',
    spicyLevel: 1,
    portionSize: 'Signature Dish'
  },

  // Pide & Lahmacun
  {
    id: 'pd-1',
    name: 'Kuşbaşılı Pide (Diced Beef Pide)',
    turkishName: 'Kuşbaşılı Kaşarlı Pide',
    category: 'pide',
    description: 'Oven-baked elongated pastry boat packed with tender spiced diced beef chunks, sweet long green peppers, tomatoes, and melted Kaşar cheese.',
    pricePKR: 1450,
    image: '/images/turkish-pide.jpg',
    tag: 'Crowd Favorite',
    spicyLevel: 1,
    portionSize: '14-inch Boat'
  },
  {
    id: 'pd-2',
    name: 'Kaşarlı Pide (Turkish Cheese Pide)',
    turkishName: 'Erimiş Kaşarlı Pide',
    category: 'pide',
    description: 'Crisp golden crust filled with an aromatic blend of rich Turkish Kaşar cheese, white Beyaz peynir, and butter. An absolute cheese-lover delight.',
    pricePKR: 1190,
    image: '/images/turkish-pide.jpg',
    tag: 'Vegetarian',
    spicyLevel: 0,
    isVegetarian: true,
    portionSize: '14-inch Boat'
  },
  {
    id: 'pd-3',
    name: 'Taş Fırın Lahmacun (2 Pcs)',
    turkishName: 'Gevrek Taş Lahmacun',
    category: 'pide',
    description: 'Thin, crispy stone-baked crust topped with spiced minced lamb, onions, tomatoes, and parsley. Roll it up with red onions, fresh mint, and a dash of lemon.',
    pricePKR: 750,
    image: '/images/lahmacun.jpg',
    tag: 'Traditional',
    spicyLevel: 1,
    portionSize: '2 Pieces'
  },
  {
    id: 'pd-4',
    name: 'Sucuklu Pide (Spicy Turkish Sausage)',
    turkishName: 'Baharatlı Sucuklu Pide',
    category: 'pide',
    description: 'Authentic cured garlic and chili Turkish beef sausage slices baked into mozzarella and Kaşar cheese with an optional cracked farm egg on top.',
    pricePKR: 1390,
    image: '/images/turkish-pide.jpg',
    tag: 'Spicy Meat',
    spicyLevel: 1,
    portionSize: '14-inch Boat'
  },

  // Main Course
  {
    id: 'mc-1',
    name: 'Grand Karışık Izgara (Mixed Grill)',
    turkishName: 'Büyük Karışık Izgara',
    category: 'main',
    description: 'The crowning jewel of our charcoal kitchen: succulent lamb chops, Adana kebab, Tavuk Şiş, Köfte meatballs, grilled chili, butter bulgur, and house lavash.',
    pricePKR: 3850,
    image: '/images/mixed-grill.jpg',
    tag: "Serves 3-4",
    spicyLevel: 1,
    portionSize: 'Large Family Platter'
  },
  {
    id: 'mc-2',
    name: 'Bursa Iskender Kebab',
    turkishName: 'Orijinal Bursa İskender',
    category: 'main',
    description: 'Paper-thin slices of beef döner layered over roasted pita croutons, drenched in rich tomato butter glaze, poured with sizzling hot clarified butter tableside, and served with thick yoghurt.',
    pricePKR: 2190,
    image: '/images/shawarma-doner.jpg',
    tag: 'Ottoman Heritage',
    spicyLevel: 0,
    portionSize: 'Signature Bowl'
  },
  {
    id: 'mc-3',
    name: 'Kuzu Tandır (Slow Roasted Lamb)',
    turkishName: 'Taş Fırında Kuzu Tandır',
    category: 'main',
    description: 'Tender prime lamb shank braised for 6 hours in our wood oven until fork-tender and falling off the bone. Served over fragrant saffron and almond rice pilaf.',
    pricePKR: 2950,
    image: '/images/mixed-grill.jpg',
    tag: 'Slow Cooked 6 Hrs',
    spicyLevel: 0,
    portionSize: 'Whole Shank with Saffron Pilaf'
  },
  {
    id: 'mc-4',
    name: 'Tavuk Döner Platter',
    turkishName: 'Özel Soslu Tavuk Döner',
    category: 'main',
    description: 'Thinly carved marinated grilled chicken döner served with hand-cut crispy fries, garlic tahini sauce, pickled cucumber, and fluffy Turkish white rice.',
    pricePKR: 1250,
    image: '/images/shawarma-doner.jpg',
    tag: 'Daily Favorite',
    spicyLevel: 0,
    portionSize: 'Full Platter'
  },

  // Desserts
  {
    id: 'ds-1',
    name: 'Gaziantep Pistachio Baklava',
    turkishName: 'Antep Fıstıklı Baklava',
    category: 'desserts',
    description: 'Handmade forty layers of paper-thin yufka dough, rich Antep pistachio filling, pure Turkish farm butter, and golden syrup.',
    pricePKR: 850,
    image: '/images/pistachio-baklava.jpg',
    tag: 'Sweet Gold',
    spicyLevel: 0,
    isVegetarian: true,
    portionSize: '4 Pieces'
  },
  {
    id: 'ds-2',
    name: 'Hatay Künefe (Warm Cheese Pastry)',
    turkishName: 'Peynirli Hatay Künefesi',
    category: 'desserts',
    description: 'Crispy shredded kadayıf pastry baked with melted unsalted Hatay sweet cheese, soaked in hot sweet syrup, and dusted with crushed pistachios.',
    pricePKR: 1050,
    image: '/images/pistachio-baklava.jpg',
    tag: 'Served Hot with Ice Cream',
    spicyLevel: 0,
    isVegetarian: true,
    portionSize: 'Freshly Baked Skillet'
  },
  {
    id: 'ds-3',
    name: 'Fırın Sütlaç (Baked Rice Pudding)',
    turkishName: 'Fırında Yanık Sütlaç',
    category: 'desserts',
    description: 'Traditional Turkish oven-baked creamy rice pudding with a caramelized golden-brown crust, lightly perfumed with vanilla and crushed hazelnuts.',
    pricePKR: 620,
    image: '/images/pistachio-baklava.jpg',
    tag: 'Caramelized Top',
    spicyLevel: 0,
    isVegetarian: true,
    portionSize: 'Clay Pot'
  },

  // Drinks
  {
    id: 'dr-1',
    name: 'Turkish Tea (Çay)',
    turkishName: 'Demleme Rize Çayı',
    category: 'drinks',
    description: 'Traditional aromatic black tea from Rize, brewed in a double samovar and served in an elegant tulip-shaped hourglass glass.',
    pricePKR: 290,
    image: '/images/turkish-tea.jpg',
    tag: 'Heritage Sip',
    spicyLevel: 0,
    isVegetarian: true,
    portionSize: 'Tulip Glass with Turkish Delight'
  },
  {
    id: 'dr-2',
    name: 'Sand-Brewed Turkish Coffee',
    turkishName: 'Közde Kumda Türk Kahvesi',
    category: 'drinks',
    description: 'Finely ground Arabica coffee beans brewed slowly on hot copper sand in a traditional Cezve. Served with authentic pistachio Turkish Lokum.',
    pricePKR: 520,
    image: '/images/tea-service.jpg',
    tag: 'Ottoman Ritual',
    spicyLevel: 0,
    isVegetarian: true,
    portionSize: 'Served in Hand-Painted Cup'
  },
  {
    id: 'dr-3',
    name: 'Fresh Traditional Ayran',
    turkishName: 'Köpüklü Yayık Ayranı',
    category: 'drinks',
    description: 'Whisked frothy chilled yoghurt drink with a pinch of Mediterranean sea salt and fresh wild mint. The perfect pairing for charcoal grills.',
    pricePKR: 380,
    image: '/images/tea-service.jpg',
    tag: 'Frothy & Refreshing',
    spicyLevel: 0,
    isVegetarian: true,
    portionSize: 'Chilled Copper Mug'
  },
  {
    id: 'dr-4',
    name: 'Pomegranate Şerbet',
    turkishName: 'Osmanlı Nar Şerbeti',
    category: 'drinks',
    description: 'Ottoman palace cordial infused with pure ruby pomegranate juice, hibiscus petals, cinnamon bark, and cloves.',
    pricePKR: 480,
    image: '/images/tea-service.jpg',
    tag: 'Palace Cordial',
    spicyLevel: 0,
    isVegetarian: true,
    portionSize: 'Tall Glass on Crushed Ice'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Taimoor Shahzad',
    location: 'Nishatabad, Faisalabad',
    rating: 5,
    date: '3 days ago',
    comment: 'Without doubt the best Turkish dining experience in Faisalabad! The Adana kebab has that genuine smoky charcoal taste that I used to enjoy in Istanbul. The family cabanas are quiet, clean, and beautifully decorated. Highly recommended for family dinners.',
    avatar: '/images/avatar-1.jpg',
    favoriteDish: 'Adana Kebab & Pistachio Baklava'
  },
  {
    id: 'rev-2',
    author: 'Dr. Fatima Tariq',
    location: 'Peoples Colony, Faisalabad',
    rating: 5,
    date: '1 week ago',
    comment: 'We visited right opposite Imtiaz Mart after shopping at Misaq ul Mall. The Turkish Pide is baked right before your eyes in the stone deck oven, and the crust is out of this world. Finished our meal with hot Turkish tea in tulip glasses. Incredible hospitality!',
    avatar: '/images/avatar-2.jpg',
    favoriteDish: 'Kuşbaşılı Pide & Turkish Çay'
  },
  {
    id: 'rev-3',
    author: 'Hamza Rehan',
    location: 'Canal Road, Faisalabad',
    rating: 5,
    date: '2 weeks ago',
    comment: 'The Mixed Grill platter is huge and feeds our group easily. The lamb chops were succulent and so tender. The service is prompt, staff is very respectful, and parking right outside near the mall is super convenient.',
    avatar: '/images/avatar-3.jpg',
    favoriteDish: 'Karışık Izgara (Mixed Grill)'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Live Charcoal Mangal',
    category: 'kebabs',
    categoryLabel: 'Kebabs & Grills',
    imageUrl: '/images/urfa-shish-kebab.jpg',
    description: 'Skewered Adana kebabs grilling over glowing natural lumpwood oak charcoal.'
  },
  {
    id: 'gal-2',
    title: 'Stone Oven Pide Crafting',
    category: 'pide',
    categoryLabel: 'Pide & Breads',
    imageUrl: '/images/turkish-pide.jpg',
    description: 'Fresh dough hand-shaped into traditional Turkish boats with minced beef and cheese.'
  },
  {
    id: 'gal-3',
    title: 'Gaziantep Baklava Display',
    category: 'desserts',
    categoryLabel: 'Desserts',
    imageUrl: '/images/pistachio-baklava.jpg',
    description: 'Golden flaky layers with pure crushed pistachios and honeyed sugar syrup.'
  },
  {
    id: 'gal-4',
    title: 'Grand Ottoman Dining Hall',
    category: 'ambiance',
    categoryLabel: 'Ambiance',
    imageUrl: '/images/dining-hall.jpg',
    description: 'Warm ruby lighting, ornate brass chandeliers, and authentic Turkish carpets.'
  },
  {
    id: 'gal-5',
    title: 'Crispy Thin Lahmacun',
    category: 'pide',
    categoryLabel: 'Pide & Breads',
    imageUrl: '/images/lahmacun.jpg',
    description: 'Freshly baked Anatolian spiced flatbreads straight from the wood-fired hearth.'
  },
  {
    id: 'gal-6',
    title: 'Traditional Tea & Coffee Service',
    category: 'ambiance',
    categoryLabel: 'Ambiance',
    imageUrl: '/images/tea-service.jpg',
    description: 'Double-kettle Turkish Çay served in classic crystal tulip glasses with Lokum.'
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: 'restaurant',
    title: 'Fresh Ingredients',
    subtitle: 'Daily Fresh Halal Meats & Spices',
    description: 'We source prime mutton and poultry fresh daily from certified organic farms, paired with Aegean extra-virgin olive oil and genuine sumac imported from Gaziantep.'
  },
  {
    icon: 'auto_stories',
    title: 'Authentic Turkish Recipes',
    subtitle: 'Anatolian & Ottoman Culinary Heritage',
    description: 'Our recipes honor multi-generational traditions from Istanbul, Adana, and Hatay, maintaining exact spice ratios and centuries-old marination methods.'
  },
  {
    icon: 'outdoor_grill',
    title: 'Expert Charcoal Chefs',
    subtitle: 'Master Ustas with Fire Artistry',
    description: 'Our master ustas bring decades of dedicated experience over natural lumpwood charcoal mangals and 400°C stone deck pide ovens.'
  },
  {
    icon: 'family_restroom',
    title: 'Family-Friendly Atmosphere',
    subtitle: 'Private Enclosures & Ottoman Hospitality',
    description: 'Designed with Faisalabad families in mind, offering serene private dining cabanas, comfortable high chairs, and unmatched warm Turkish hospitality.'
  }
];
