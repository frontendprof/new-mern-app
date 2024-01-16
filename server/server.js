import express from 'express';
import dotenv from 'dotenv';
import { products } from './data/products.js';
import cors from 'cors';
import connectDB from './config/db.js';

dotenv.config();
connectDB();
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.get('/', (req, res) => {
  res.send('App is running ...');
});

app.get('/api/products', (req, res) => {
  res.send(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p.id == req.params.id);
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
