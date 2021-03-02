const IN_STOCK_PRODUCTS = [
  'Milex - Nanotec Wall Plug Heater',
  'Zhiyun-Tech Smooth-Q2 Gimbal Stabilizer',
  'Bluetooth Earphone Sports True Wireless Earbuds',
  'Cantu Moist Curl Activator Cream Trial',
  'Schwarzkopf Gliss Total Repair Shampoo',
  'Milex - 11 Litre Hurricane Air Fryer',
  'Dreamy Nights - Pillows Twin Pack 2000',
  '3Ply Disposable Surgical Face Masks',
  'Deodorant Anti-Perspirant Spray',
  'DeskStand Gorilla Grip Anti-Fatigue Comfort Mat',
  'Duracell Plus Alkaline AA Batteries',
  'Finish Auto Dishwashing All in One Tablets Regular',
  'Pierre Cardin Spinner Cabin Suiter - Grey',
  'Dala 577 Flat Pure Bristle Paint Brush',
  'Dala Acrylic Colour Kit',
  'Dala Round 10 Well Palette',
  'George & Mason Baby',
  'Mini Tealight Set',
];

const BUNDLE_DEALS = {
  PROMOTION: '/all?filter=Promotions:60089',
  ONE_SET_BUNDLE: 'Ernie Ball 2006 Earthwood Extra Light 80/20 Bronze Acoustic String Set (10 - 50)',
  MULTI_SET_BUNDLE: 'Addis - Window Squeegee Long Handle',
};

const PLATFORM = {
  DESKTOP: {
    LOGIN_USER: {
      STANDARD: {
        username: `${process.env.NW_USERNAME}`,
        password: `${process.env.NW_PASSWORD}`,
      },
    },
  },
  MOBI: {
    LOGIN_USER: {
      STANDARD: {
        username: 'takealot.qa+1138@gmail.com',
        password: `${process.env.NW_PASSWORD}`,
      },
    },
  },
};

const SURCHARGE_AMOUNT = 200;

const AGE_VERIFICATION = {
  ADULT: {
    dayOfBirth: '16',
    monthOfBirth: 'November',
    yearOfBirth: '1988',
  },
  MINOR: {
    dayOfBirth: '16',
    monthOfBirth: 'November',
    yearOfBirth: '2005',
  },
};

const USERS = {
  chrome: {
    production: [
      {
        username: 'takealot.qa+rh@gmail.com',
        password: 'Ryghof-vumbuf-2mabsy',
      },
      {
        username: 'takealot.qa+500@gmail.com',
        password: 'Ryghof-vumbuf-2mabsy',
      },
    ],
    staging: [
      {
        username: 'dev+3696031@take2.co.za',
        password: 'test',
      },
      {
        username: 'dev+55554@take2.co.za',
        password: 'test',
      },
    ],
  },
  firefox: {
    production: [
      {
        username: 'takealot.qa+202003@gmail.com',
        password: 'Ryghof-vumbuf-2mabsy',
      },
      {
        username: 'takealot.qa+202002@gmail.com',
        password: 'Ryghof-vumbuf-2mabsy',
      },
    ],
    staging: [
      {
        username: 'dev+2118945@take2.co.za',
        password: 'test',
      },
      {
        username: 'dev+223079@take2.co.za',
        password: 'test',
      },
    ],
  },
  safari: {
    production: [
      {
        username: 'takealot.qa+202001@gmail.com',
        password: 'Ryghof-vumbuf-2mabsy',
      },
      {
        username: 'takealot.qa+201912@gmail.com',
        password: 'Ryghof-vumbuf-2mabsy',
      },
    ],
    staging: [
      {
        username: 'dev+2118945@take2.co.za',
        password: 'test',
      },
      {
        username: 'dev+224079@take2.co.za',
        password: 'test',
      },
    ],
  },
  internetexplorer: {
    production: [
      {
        username: 'takealot.qa+critical-2020-01@gmail.com',
        password: 'Ryghof-vumbuf-2mabsy',
      },
      {
        username: 'takealot.qa+critical-2020-03@gmail.com',
        password: 'Ryghof-vumbuf-2mabsy',
      },
    ],
    staging: [
      {
        username: 'dev+1001@take2.co.za',
        password: 'test',
      },
      {
        username: 'dev+12345@take2.co.za',
        password: 'test',
      },
    ],
  },
  microsoftedge: {
    production: [
      {
        username: 'takealot.qa+critical-2019-11@gmail.com',
        password: 'Ryghof-vumbuf-2mabsy',
      },
      {
        username: 'takealot.qa+200@gmail.com',
        password: 'Ryghof-vumbuf-2mabsy',
      },
    ],
    staging: [
      {
        username: 'dev+55555@take2.co.za',
        password: 'test',
      },
      {
        username: 'dev+12345@take2.co.za',
        password: 'test',
      },
    ],
  },
};

const PLATFORM_ENDPOINTS = {
  remove_products_in_cart: 'http://tal-test-data-service.test-automation-platform.env/remove_products_in_cart',
  delete_customer_wishlists: 'http://tal-test-data-service.test-automation-platform.env/delete_customer_wishlists',
  clear_customer_wishlists: 'http://tal-test-data-service.test-automation-platform.env/clear_customer_wishlists',
};

module.exports = {
  IN_STOCK_PRODUCTS,
  SURCHARGE_AMOUNT,
  BUNDLE_DEALS,
  PLATFORM,
  AGE_VERIFICATION,
  USERS,
  PLATFORM_ENDPOINTS,
};
