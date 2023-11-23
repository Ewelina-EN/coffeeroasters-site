import gran from "../assets/home/desktop/image-gran-espresso.png";
import planalto from "../assets/home/desktop/image-planalto.png";
import piccollo from "../assets/home/desktop/image-piccollo.png";
import danche from "../assets/home/desktop/image-danche.png";

import quality from "../assets/home/desktop/icon-coffee-bean.svg";
import gifts from "../assets/home/desktop/icon-gift.svg";
import truck from "../assets/home/desktop/icon-truck.svg";

import uk from "../assets/about/desktop/illustration-uk.svg";
import canada from "../assets/about/desktop/illustration-canada.svg";
import australia from "../assets/about/desktop/illustration-australia.svg";

export const Collections = [
  {
    id: "01",
    title: "Gran Espresso",
    summary:
      "Light and flavorful blend with cocoa and black pepper for an intense experience",
    imgUrl: gran,
    alt: "image gran espresso",
  },
  {
    id: "02",
    title: "Planalto",
    summary:
      " Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
    imgUrl: planalto,
    alt: "image planalto",
  },
  {
    id: "03",
    title: "Piccollo",
    summary:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry",
    imgUrl: piccollo,
    alt: "image piccollo",
  },
  {
    id: "04",
    title: "Danche",
    summary:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
    imgUrl: danche,
    alt: "image danche",
  },
];

export const BenefitsList = [
  {
    id: "10",
    title: "Best quality",
    summary:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
    imgUrl: quality,
    alt: "icon coffee bean",
  },
  {
    id: "11",
    title: "Exclusive benefits",
    summary:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
    imgUrl: gifts,
    alt: "icon gift",
  },
  {
    id: "12",
    title: "Free shipping",
    summary:
      "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
    imgUrl: truck,
    alt: "icon truck",
  },
];

export const WorksData = [
  {
    id: "20",
    num: "01",
    title: "Pick your coffee",
    summary:
      "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    id: "21",
    num: "02",
    title: "Choose the frequency",
    summary:
      "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    id: "22",
    num: "03",
    title: "Receive and enjoy!",
    summary:
      "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];

export const LocationData = [
  {
    id: "30",
    locMap: uk,
    country: "United Kingdom",
    adress: {
      street: "68 Asfordby Rd",
      town: "Alcaston",
      code: "SY6 1YA",
      phone: "+44 1241 918425",
    },
    alt: "our location in the united state",
  },
  {
    id: "31",
    locMap: canada,
    country: "Canada",
    adress: {
      street: "1528 Eglinton Avenue",
      town: "Toronto",
      code: "Ontario M4P 1A6",
      phone: "+1 416 485 2997",
    },
    alt: "our location in the canada",
  },
  {
    id: "32",
    locMap: australia,
    country: "Australia",
    adress: {
      street: "36 Swanston Street",
      town: "Kewell",
      code: "Victoria",
      phone: "+61 4 9928 3629",
    },
    alt: "our location in the australia",
  },
];

export const OrderStepsList = [
  {
    id: "40",
    num: "01",
    title: "Pick your coffee",
    summary:
      "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    id: "41",
    num: "02",
    title: "Choose the frequency",
    summary:
      "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    id: "42",
    num: "03",
    title: "Receive and enjoy!",
    summary:
      "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];

export const SubscriptionList = [
  {
    id: "50",
    question: "How do you drink your coffee?",
    name: "preference",
    options: [
      {
        id: "501",
        type: "Capsule",
        answer: "Compatible with Nespresso systems and similar brewers",
      },
      {
        id: "502",
        type: "Filter",
        answer: "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        id: "503",
        type: "Espresso",
        answer:
          "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
  },
  {
    id: "51",
    question: "What type of coffee?",
    name: "bean",
    options: [
      {
        id: "510",
        type: "Single Origin",
        answer:
          "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        id: "511",
        type: "Decaf",
        answer:
          "Just like regular coffee, except the caffeine has been removed",
      },
      {
        id: "512",
        type: "Blended",
        answer:
          "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
  },
  {
    id: "52",
    question: "How much would you like?",
    name: "quantity",
    options: [
      {
        id: "520",
        type: "250g",
        answer: "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      {
        id: "521",
        type: "500g",
        answer: "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      {
        id: "522",
        type: "1000g",
        answer:
          "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    ],
  },
  {
    id: "53",
    question: "Want us to grind them?",
    name: "grind",
    options: [
      {
        id: "530",
        type: "Wholebean",
        answer: "Best choice if you cherish the full sensory experience",
      },
      {
        id: "531",
        type: "FilterTEST",
        answer: "For drip or pour-over coffee methods such as V60 or Aeropress",
      },
      {
        id: "532",
        type: "Cafetiére",
        answer: "Course ground beans specially suited for french press coffee",
      },
    ],
  },
  {
    id: "54",
    question: "How often should we deliver?",
    name: "deliveries",
    options: [
      {
        id: "540",
        type: "Every week",
        answer: "$7.20 per shipment. Includes free first-class shipping.",
      },
      {
        id: "541",
        type: "Every 2 weeks",
        answer: "$9.60 per shipment. Includes free priority shipping.",
      },
      {
        id: "542",
        type: "Every month",
        answer: "$12.00 per shipment. Includes free priority shipping.",
      },
    ],
  },
];
