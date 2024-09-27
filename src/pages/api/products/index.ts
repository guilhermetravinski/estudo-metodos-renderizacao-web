import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const products = [
      { id: 1, name: 'Product 1', price: 19.99, category: 'Electronics', image: '/images/product1.jpg' },
      { id: 2, name: 'Product 2', price: 29.99, category: 'Clothing', image: '/images/product2.jpg' },
      { id: 3, name: 'Product 3', price: 39.99, category: 'Furniture', image: '/images/product3.jpg' },
      { id: 4, name: 'Product 4', price: 49.99, category: 'Electronics', image: '/images/product4.jpg' },
      { id: 5, name: 'Product 5', price: 59.99, category: 'Clothing', image: '/images/product5.jpg' },
      { id: 6, name: 'Product 6', price: 69.99, category: 'Furniture', image: '/images/product6.jpg' },
      { id: 7, name: 'Product 7', price: 79.99, category: 'Electronics', image: '/images/product7.jpg' },
      { id: 8, name: 'Product 8', price: 89.99, category: 'Clothing', image: '/images/product8.jpg' },
    ];
    res.status(200).json(products);
  }
  