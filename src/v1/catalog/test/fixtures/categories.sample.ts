const InputPlain = [
  {
    main_id: '0',
    main_name: 'Todays Deal',
    main_image: 'images/category-images/offers.png',
    cart_Max_qty: '7',
    loyilty_pointsVal: '858.00',
    outletActiveVal: 1,
    appActive: 1,
    OfferFlag: '1',
  },
  {
    main_id: 1,
    main_name: 'FRUITS & VEGETABLES',
    main_image: 'images/category-images/Fresh Fruits.jpg',
    cart_Max_qty: '7',
    loyilty_pointsVal: '858.00',
    outletActiveVal: 1,
    appActive: 1,
    OfferFlag: '0',
  },
  {
    main_id: 3,
    main_name: 'GROCERY',
    main_image: 'images/category-images/Grocery Combosm.jpg',
    cart_Max_qty: '7',
    loyilty_pointsVal: '858.00',
    outletActiveVal: 1,
    appActive: 1,
    OfferFlag: '0',
  },
  {
    main_id: 7,
    main_name: 'BRANDED FOODS',
    main_image: 'images/category-images/Chocolate & Desserts.jpg',
    cart_Max_qty: '7',
    loyilty_pointsVal: '858.00',
    outletActiveVal: 1,
    appActive: 1,
    OfferFlag: '0',
  },
  {
    main_id: 8,
    main_name: 'BEVERAGES',
    main_image: 'images/category-images/Snacks and beverages_new.jpg',
    cart_Max_qty: '7',
    loyilty_pointsVal: '858.00',
    outletActiveVal: 1,
    appActive: 1,
    OfferFlag: '0',
  },
  {
    main_id: 10,
    main_name: 'House Hold Needs (NF)',
    main_image: 'images/category-images/Home Care.jpg',
    cart_Max_qty: '7',
    loyilty_pointsVal: '858.00',
    outletActiveVal: 1,
    appActive: 1,
    OfferFlag: '0',
  },
  {
    main_id: 12,
    main_name: 'BREADS DAIRY  EGGS  FROZEN',
    main_image: 'images/category-images/Breakfast & Dairy.jpg',
    cart_Max_qty: '7',
    loyilty_pointsVal: '858.00',
    outletActiveVal: 1,
    appActive: 1,
    OfferFlag: '0',
  },
];
const OutputPlain = [
  {
    category_id: '0',
    category_name: 'Todays Deal',
    media: {
      small_image_url: 'https://ibo.com/images/category-images/offers.png',
      large_image_url: 'https://ibo.com/images/category-images/offers.png',
      label: 'Todays Deal',
    },
  },
  {
    category_id: '1',
    category_name: 'FRUITS & VEGETABLES',
    media: {
      small_image_url:
        'https://ibo.com/images/category-images/Fresh Fruits.jpg',
      large_image_url:
        'https://ibo.com/images/category-images/Fresh Fruits.jpg',
      label: 'FRUITS & VEGETABLES',
    },
  },
  {
    category_id: '3',
    category_name: 'GROCERY',
    media: {
      small_image_url:
        'https://ibo.com/images/category-images/Grocery Combosm.jpg',
      large_image_url:
        'https://ibo.com/images/category-images/Grocery Combosm.jpg',
      label: 'GROCERY',
    },
  },
  {
    category_id: '7',
    category_name: 'BRANDED FOODS',
    media: {
      small_image_url:
        'https://ibo.com/images/category-images/Chocolate & Desserts.jpg',
      large_image_url:
        'https://ibo.com/images/category-images/Chocolate & Desserts.jpg',
      label: 'BRANDED FOODS',
    },
  },
  {
    category_id: '8',
    category_name: 'BEVERAGES',
    media: {
      small_image_url:
        'https://ibo.com/images/category-images/Snacks and beverages_new.jpg',
      large_image_url:
        'https://ibo.com/images/category-images/Snacks and beverages_new.jpg',
      label: 'BEVERAGES',
    },
  },
  {
    category_id: '10',
    category_name: 'House Hold Needs (NF)',
    media: {
      small_image_url: 'https://ibo.com/images/category-images/Home Care.jpg',
      large_image_url: 'https://ibo.com/images/category-images/Home Care.jpg',
      label: 'House Hold Needs (NF)',
    },
  },
  {
    category_id: '12',
    category_name: 'BREADS DAIRY  EGGS  FROZEN',
    media: {
      small_image_url:
        'https://ibo.com/images/category-images/Breakfast & Dairy.jpg',
      large_image_url:
        'https://ibo.com/images/category-images/Breakfast & Dairy.jpg',
      label: 'BREADS DAIRY  EGGS  FROZEN',
    },
  },
];

const OutputPlainForFresh = [
  {
    category_id: '8',
    category_name: 'BEVERAGES',
    media: {
      small_image_url:
        'https://ibo.com/images/category-images/Snacks and beverages_new.jpg',
      large_image_url:
        'https://ibo.com/images/category-images/Snacks and beverages_new.jpg',
      label: 'BEVERAGES',
    },
  },
  {
    category_id: '10',
    category_name: 'House Hold Needs (NF)',
    media: {
      small_image_url: 'https://ibo.com/images/category-images/Home Care.jpg',
      large_image_url: 'https://ibo.com/images/category-images/Home Care.jpg',
      label: 'House Hold Needs (NF)',
    },
  },
  {
    category_id: '12',
    category_name: 'BREADS DAIRY  EGGS  FROZEN',
    media: {
      small_image_url:
        'https://ibo.com/images/category-images/Breakfast & Dairy.jpg',
      large_image_url:
        'https://ibo.com/images/category-images/Breakfast & Dairy.jpg',
      label: 'BREADS DAIRY  EGGS  FROZEN',
    },
  },
];

const OutputPlainForGrocery = [
  {
    category_id: '0',
    category_name: 'Todays Deal',
    media: {
      small_image_url: 'https://ibo.com/images/category-images/offers.png',
      large_image_url: 'https://ibo.com/images/category-images/offers.png',
      label: 'Todays Deal',
    },
  },
  {
    category_id: '1',
    category_name: 'FRUITS & VEGETABLES',
    media: {
      small_image_url:
        'https://ibo.com/images/category-images/Fresh Fruits.jpg',
      large_image_url:
        'https://ibo.com/images/category-images/Fresh Fruits.jpg',
      label: 'FRUITS & VEGETABLES',
    },
  },
  {
    category_id: '3',
    category_name: 'GROCERY',
    media: {
      small_image_url:
        'https://ibo.com/images/category-images/Grocery Combosm.jpg',
      large_image_url:
        'https://ibo.com/images/category-images/Grocery Combosm.jpg',
      label: 'GROCERY',
    },
  },
  {
    category_id: '7',
    category_name: 'BRANDED FOODS',
    media: {
      small_image_url:
        'https://ibo.com/images/category-images/Chocolate & Desserts.jpg',
      large_image_url:
        'https://ibo.com/images/category-images/Chocolate & Desserts.jpg',
      label: 'BRANDED FOODS',
    },
  },
];

const CategoriesSample = {
  OutputPlain,
  InputPlain,
  OutputPlainForFresh,
  OutputPlainForGrocery,
};

export default CategoriesSample;
