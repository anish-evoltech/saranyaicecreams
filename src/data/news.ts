export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: "new-flavor" | "promo" | "event" | "update";
  image?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Introducing Mango Passion Fusion",
    excerpt:
      "Our newest creation combines tropical mangoes with tangy passion fruit.",
    content:
      "We are excited to announce our latest flavor innovation - Mango Passion Fusion! This limited-edition ice cream combines the sweetness of Alphonso mangoes with the tangy notes of passion fruit, creating a tropical paradise in every bite. Available at all our outlets starting this weekend.",
    date: "2024-12-28",
    category: "new-flavor",
    image:
      "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800&h=600&fit=crop",
  },
  {
    id: "2",
    title: "New Year Special: 20% Off All Orders",
    excerpt: "Celebrate 2025 with sweet savings on all our premium ice creams.",
    content:
      "Ring in the new year with Saranya Ice Creams! From December 31st to January 5th, enjoy 20% off on all orders. Use code SWEET2025 at checkout. Spread the joy with our gift packs, perfect for new year parties!",
    date: "2024-12-30",
    category: "promo",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=600&fit=crop",
  },
  {
    id: "3",
    title: "Extended Delivery Hours",
    excerpt: "We now deliver until 11 PM to satisfy your late-night cravings.",
    content:
      "Great news for night owls! We have extended our delivery hours until 11 PM every day. Whether it is a late movie night or a midnight celebration, Saranya Ice Creams is just a click away. Order now and get your favorites delivered fresh to your doorstep.",
    date: "2024-12-25",
    category: "update",
    image:
      "https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?w=800&h=600&fit=crop",
  },
  {
    id: "4",
    title: "Ice Cream Making Workshop",
    excerpt: "Join us for a hands-on experience at our flagship store.",
    content:
      "Learn the art of ice cream making with our master chefs! Join us at our flagship store for an exclusive workshop where you will create your own custom flavor. Limited seats available. Register now to secure your spot.",
    date: "2024-12-20",
    category: "event",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=600&fit=crop",
  },
];
