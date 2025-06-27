import express from 'express';
import products from './models/products.js';
const app = express();

app.get('/api/products', (req, res) => {
  res.json(products);
});

export default app; 