export type Food = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  tags: Array<FoodTag>;
};

export const foodTags = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Dessert",
  "Drink",
  "Appetizer",
  "Spicy",
  "Vegetarian",
  "Alcoholic",
] as const;

export type FoodTag = (typeof foodTags)[number];

export const foods: Array<Food> = [
  {
    id: 1,
    name: "Burger",
    image: "burger.jpg",
    price: 8.99,
    description:
      "This ain't your average burger. Topped with our tangy cheddar cheese sauce, fresh lettuce, and tomato.",
    tags: ["Lunch", "Dinner"],
  },
  {
    id: 2,
    name: "Banana Blueberry French Toast",
    image: "banana-french-toast.jpg",
    price: 9.99,
    description: "Delicious french toast with banana and blueberry.",
    tags: ["Breakfast"],
  },
  {
    id: 3,
    name: "Cajun Pasta",
    image: "cajun-pasta.jpg",
    price: 16.99,
    description: "Creole-style pasta that's guaranteed to make you sweat.",
    tags: ["Lunch", "Dinner", "Spicy"],
  },
  {
    id: 4,
    name: "Charcuterie Board",
    image: "charcuterie.jpg",
    price: 14.99,
    description:
      "Delicious assortment of locally-sourced meats, cheeses, and spreads.",
    tags: ["Appetizer"],
  },
  {
    id: 5,
    name: "Raspberry Cheesecake",
    image: "cheesecake.jpg",
    price: 7.99,
    description: "Heavenly cheesecake with a sweet raspberry topping.",
    tags: ["Dessert"],
  },
  {
    id: 6,
    name: "Chicken Slammer",
    image: "chicken-slammer.jpg",
    price: 11.99,
    description:
      "Our outrageous chicken sandwich topped with pickled onions and jalapenos.",
    tags: ["Lunch", "Dinner", "Spicy"],
  },
  {
    id: 7,
    name: "Death by Chocolate",
    image: "death-by-chocolate.jpg",
    price: 8.99,
    description:
      "Decadent chocolate pudding topped with chocolate cookies, chocolate frosting, and whipped cream.",
    tags: ["Dessert"],
  },
  {
    id: 8,
    name: "Pile 'O Donuts",
    image: "donuts.jpg",
    price: 6.99,
    description: "Delicious assortment of unique donuts. Guaranteed to please!",
    tags: ["Dessert"],
  },
  {
    id: 9,
    name: "Italian Meatballs",
    image: "italian-meatballs.jpg",
    description: "Spiced meatballs served with a rich tomato sauce.",
    price: 13.99,
    tags: ["Dinner"],
  },
  {
    id: 10,
    name: "Lamb Chop",
    image: "lamb-chop.jpg",
    description: "Delicious lamb chop topped with a Mango chutney.",
    price: 19.99,
    tags: ["Dinner"],
  },
  {
    id: 11,
    name: "Mango Lassi",
    image: "mango-lassi.jpg",
    description: "Creamy Mango-flavored delight, served ice cold.",
    price: 4.99,
    tags: ["Drink"],
  },
  {
    id: 12,
    name: "Mojito",
    image: "mojito.jpg",
    description: "A refreshing minty cocktail.",
    price: 6.99,
    tags: ["Drink", "Alcoholic"],
  },
  {
    id: 13,
    name: "Old Fashioned",
    image: "old-fashioned.jpg",
    description: "A classic cocktail with a twist.",
    price: 7.99,
    tags: ["Drink", "Alcoholic"],
  },
  {
    id: 14,
    name: "Pesto Bowtie Pasta",
    image: "pesto-bowtie-pasta.jpg",
    description:
      "Delicious whole wheat pasta topped with our zesty pesto sauce.",
    price: 12.99,
    tags: ["Lunch", "Dinner"],
  },
  {
    id: 15,
    name: "BBQ Chicken Pizza",
    image: "pizza.jpg",
    description:
      "Our homemade thin-crust pizza topped with BBQ chicken and our house cheese blend.",
    price: 14.99,
    tags: ["Lunch", "Dinner"],
  },
  {
    id: 16,
    name: "Pork Chop",
    image: "pork-chop.jpg",
    description: "Thick-cut Pork Chop with a sweet apple glaze.",
    price: 16.99,
    tags: ["Dinner"],
  },
  {
    id: 17,
    name: "Pork Ramen",
    image: "ramen.jpg",
    description: "Delicious bowl of ramen with pork and vegetables.",
    price: 11.99,
    tags: ["Lunch", "Dinner"],
  },
  {
    id: 18,
    name: "Salmon Salad",
    image: "salmon-salad.jpg",
    description:
      "Fresh salad topped with grilled salmon, mixed vegetables, and our house vinaigrette.",
    price: 14.99,
    tags: ["Lunch", "Dinner", "Vegetarian"],
  },
  {
    id: 19,
    name: "Salmon Steak",
    image: "salmon.jpg",
    description: "Seared salmon steak topped with a sweet mango glaze.",
    price: 18.99,
    tags: ["Dinner"],
  },
  {
    id: 20,
    name: "Chicken Street Tacos",
    image: "street-tacos.jpg",
    description: "Delicious chicken tacos with a spicy mango salsa.",
    price: 9.99,
    tags: ["Lunch", "Dinner", "Spicy"],
  },
  {
    id: 21,
    name: "Veggie Sammy",
    image: "veggie-sammy.jpg",
    description: "Fresh grilled veggies on our homemade toasted sourdough.",
    price: 8.99,
    tags: ["Lunch", "Dinner", "Vegetarian"],
  },
];
