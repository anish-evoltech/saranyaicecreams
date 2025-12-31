import vanillaImg from "@/assets/product-vanilla.png";
import chocolateImg from "@/assets/product-chocolate.png";
import strawberryImg from "@/assets/product-strawberry.png";
import mangoImg from "@/assets/product-mango.png";

export interface Product {
  id: string;
  name: string;
  price: number;
  wholesalePrice: number;
  image: string;
  description: string;
  category: string;
  stock: number;
  featured?: boolean;
  weight?: string;
  ingredients?: string[];
  nutritionalInfo?: {
    calories: number;
    protein: string;
    fat: string;
    carbs: string;
  };
  minWholesaleQty?: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Vanilla",
    price: 149,
    wholesalePrice: 120,
    image: vanillaImg,
    description:
      "Creamy Madagascar vanilla with caramel swirls. A timeless classic.",
    category: "Classic",
    stock: 50,
    featured: true,
    weight: "500ml",
    minWholesaleQty: 10,
    ingredients: [
      "Fresh Milk",
      "Madagascar Vanilla",
      "Sugar",
      "Cream",
      "Caramel Swirls",
    ],
    nutritionalInfo: {
      calories: 207,
      protein: "3.5g",
      fat: "11g",
      carbs: "24g",
    },
  },
  {
    id: "2",
    name: "Belgian Chocolate",
    price: 179,
    wholesalePrice: 145,
    image: chocolateImg,
    description:
      "Rich Belgian dark chocolate with chocolate chips. For true chocolate lovers.",
    category: "Classic",
    stock: 35,
    featured: true,
    weight: "500ml",
    minWholesaleQty: 10,
    ingredients: [
      "Fresh Milk",
      "Belgian Chocolate",
      "Cocoa Powder",
      "Sugar",
      "Chocolate Chips",
    ],
    nutritionalInfo: {
      calories: 250,
      protein: "4g",
      fat: "14g",
      carbs: "28g",
    },
  },
  {
    id: "3",
    name: "Fresh Strawberry",
    price: 159,
    wholesalePrice: 130,
    image: strawberryImg,
    description:
      "Made with real strawberries for a fruity, refreshing experience.",
    category: "Fruity",
    stock: 45,
    featured: true,
    weight: "500ml",
    minWholesaleQty: 10,
    ingredients: [
      "Fresh Milk",
      "Real Strawberries",
      "Sugar",
      "Cream",
      "Natural Flavors",
    ],
    nutritionalInfo: {
      calories: 180,
      protein: "3g",
      fat: "8g",
      carbs: "25g",
    },
  },
  {
    id: "4",
    name: "Alphonso Mango",
    price: 189,
    wholesalePrice: 155,
    image: mangoImg,
    description:
      "Premium Alphonso mangoes blended to perfection. Summer in a scoop.",
    category: "Fruity",
    stock: 30,
    featured: true,
    weight: "500ml",
    minWholesaleQty: 10,
    ingredients: [
      "Fresh Milk",
      "Alphonso Mango Pulp",
      "Sugar",
      "Cream",
      "Natural Flavors",
    ],
    nutritionalInfo: {
      calories: 195,
      protein: "3.2g",
      fat: "9g",
      carbs: "26g",
    },
  },
];

export const categories = ["All", "Classic", "Fruity", "Premium", "Seasonal"];
