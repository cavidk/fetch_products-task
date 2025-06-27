export const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    description: "A sample product.",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Product 2",
    price: 20,
    description: "Another sample product.",
    image: "https://via.placeholder.com/150"
  }
];

export function fetchProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500); // Simulate network delay
  });
} 