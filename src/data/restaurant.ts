export const restaurant = {
  name: "Casa Bella Trattoria",
  tagline:
    "Traditional Italian cuisine made with passion, family recipes, and the finest ingredients.",
  address: "123 Example Street, Melbourne VIC",
  phone: "(03) 9000 0000",
  email: "hello@casabellatrattoria.com",
  mapEmbed:
    "https://www.google.com/maps?q=Melbourne+VIC&output=embed",
  hours: [
    { day: "Monday", time: "Closed" },
    { day: "Tuesday – Thursday", time: "5:00 PM – 10:00 PM" },
    { day: "Friday – Saturday", time: "5:00 PM – 11:00 PM" },
    { day: "Sunday", time: "12:00 PM – 9:00 PM" },
  ],
};

export type MenuItem = { name: string; description: string; price: string };
export type MenuCategory = { id: string; title: string; subtitle: string; items: MenuItem[] };

export const menu: MenuCategory[] = [
  {
    id: "antipasti",
    title: "Antipasti",
    subtitle: "To begin",
    items: [
      { name: "Bruschetta al Pomodoro", description: "Grilled sourdough, vine-ripened tomatoes, garlic, basil, extra virgin olive oil.", price: "$16" },
      { name: "Calamari Fritti", description: "Lightly floured calamari, lemon, aioli, parsley.", price: "$22" },
      { name: "Burrata with Fresh Tomatoes", description: "Pugliese burrata, heirloom tomatoes, basil oil, sea salt.", price: "$24" },
    ],
  },
  {
    id: "pasta",
    title: "Pasta",
    subtitle: "Handmade daily",
    items: [
      { name: "Spaghetti Carbonara", description: "Guanciale, pecorino romano, egg yolk, cracked pepper.", price: "$28" },
      { name: "Tagliatelle Bolognese", description: "Slow-cooked beef and pork ragù, parmigiano reggiano.", price: "$30" },
      { name: "Ravioli Ricotta e Spinaci", description: "House ravioli, sage brown butter, toasted pine nuts.", price: "$29" },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    subtitle: "From our wood oven",
    items: [
      { name: "Margherita", description: "San Marzano tomato, fior di latte, basil, olive oil.", price: "$24" },
      { name: "Diavola", description: "Tomato, mozzarella, spicy salami, chilli, oregano.", price: "$27" },
      { name: "Prosciutto & Funghi", description: "Mozzarella, prosciutto di Parma, wild mushrooms, rocket.", price: "$29" },
    ],
  },
  {
    id: "desserts",
    title: "Dolci",
    subtitle: "Sweet endings",
    items: [
      { name: "Tiramisu", description: "Mascarpone, espresso-soaked savoiardi, cocoa, marsala.", price: "$14" },
      { name: "Panna Cotta", description: "Vanilla bean cream, macerated berries, amaretti crumb.", price: "$13" },
      { name: "Cannoli", description: "Crisp Sicilian shells, sweet ricotta, pistachio, dark chocolate.", price: "$13" },
    ],
  },
];

export const testimonials = [
  { name: "Person 1.", rating: 5, text: "The handmade tagliatelle transported me straight back to Bologna. Service was warm and unhurried — exactly what an evening out should feel like." },
  { name: "Person 2.", rating: 5, text: "Authentic flavours, generous portions and a wine list that surprises. The carbonara is the best in Melbourne, full stop." },
  { name: "Person 3.", rating: 5, text: "From the moment we walked in we felt like family. The tiramisu alone is worth the trip across town." },
];

export type Reservation = {
  id: string;
  createdAt: string;
  guests: number;
  date: string;
  time: string;
  seating: "Indoor" | "Outdoor" | "Bar seating";
  name: string;
  email: string;
  phone: string;
  requests: string;
};
