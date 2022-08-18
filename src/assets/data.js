import terrain from "../assets/terrain.svg";
import stories from "../assets/stories.svg";
import options from "../assets/options.svg";
import bag from "../assets/bag.svg";
import play from "../assets/play.svg";
import stack from "../assets/stack.svg";
import template from "../assets/template.svg";
import products from "../assets/products.svg";
import reels from "../assets/reels.svg";
import checkout from "../assets/checkout.svg";
import views from "../assets/views.svg";
import heart from "../assets/heart.svg";
import card from "../assets/credit-card.svg";

const sidebar = [
  {
    id: 1,
    optionName: "Sleepy Owl",
    optionItems: [
      {
        icon: terrain,
        alt: "Overview",
        active: true,
        name: "Overview",
      },
      {
        icon: stories,
        alt: "Reel Store",
        name: "Reel Store",
      },
    ],
  },
  {
    id: 2,
    optionName: "Setup",
    optionItems: [
      {
        icon: play,
        alt: "My Reels",
        name: "My Reels",
        newTag: "New",
      },
      {
        icon: bag,
        alt: "Products",
        name: "Products",
      },
      {
        icon: stack,
        alt: "Mapping",
        name: "Mapping",
      },
    ],
  },
  {
    id: 3,
    optionName: "Configurations",
    optionItems: [
      {
        icon: options,
        alt: "Analytics",
        name: "Analytics",
      },
      {
        icon: template,
        alt: "Connections",
        name: "Connections",
      },
    ],
  },
];

const cards = [
  {
    id: 1,
    icon: products,
    count: "25",
    cardTitle: "Products",
    cardDesc: "Added on Reel Cart",
    whiteBg: true,
  },
  {
    id: 2,
    icon: reels,
    count: "100",
    cardTitle: "Reels",
    cardDesc: "Added on Reel Cart",
    whiteBg: true,
  },
  {
    id: 3,
    icon: reels,
    count: "0",
    cardTitle: "Add To Cart",
    cardDesc:
      "Make sure that your videos are explaining your products correctly. That will get you the Add to Carts.",
  },
  {
    id: 4,
    icon: checkout,
    count: "25",
    cardTitle: "Initiate Checkout",
    cardDesc: "Total Number of checkouts that happened from Reel Kart",
  },
  {
    id: 5,
    icon: views,
    count: "0",
    cardTitle: "Views",
    cardDesc: "Make sure your like is visible on your store.",
  },
  {
    id: 6,
    icon: heart,
    count: "0",
    cardTitle: "Engagement",
    cardDesc: "No one has engaged with your videos yet.",
  },
  {
    id: 7,
    icon: card,
    count: "0",
    cardTitle: "Revenue",
    cardDesc:
      "This is where you’ll be able to see revenue generated from Rell Kart",
  },
];

export { sidebar, cards };
