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
