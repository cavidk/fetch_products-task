import express from 'express';
const app = express();

// Hardcoded product data
const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 19.99,
    image: 'https://picsum.photos/200',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 29.99,
    image: 'https://picsum.photos/200',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 39.99,
    image: 'https://picsum.photos/200',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 49.99,
    image: 'https://picsum.photos/200',
  },
  {
    id: 5,
    name: 'Product 5',
    price: 59.99,
    image: 'https://picsum.photos/200',
  },
  {
    id: 6,
    name: 'Product 6',
    price: 69.99,
    image: 'https://picsum.photos/200',
  },
  {
    id: 7,
    name: 'Product 7',
    price: 79.99,
    image: 'https://picsum.photos/200',
  },
  {
    id: 8,
    name: 'Product 8',
    price: 89.99,
    image: 'https://picsum.photos/200',
  },
  {
    id: 9,
    name: 'Product 9',
    price: 99.99,
    image: 'https://picsum.photos/200',
  },
  {
    id: 10,
    name: 'Product 10',
    price: 109.99,
    image: 'https://picsum.photos/200',
  },
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

export default app; 