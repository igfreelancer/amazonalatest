import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: "tuser",
      email: 'engr.tuser@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: "john",
      email: 'user@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 3.5,
      numReviews: 10,
      description: "hight quality product",
    },
    {
      
      name: "Adidas fit Shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 100,
      countInStock: 20,
      brand: "Nike",
      rating: 4.0,
      numReviews: 10,
      description: "hight quality product",
    },
    {
      
      name: "Lacoste Free Shirt",
      category: "Shirts",
      image: "/images/p3.jpg",
      price: 220,
      countInStock: 0,
      brand: "Nike",
      rating: 4.8,
      numReviews: 10,
      description: "hight quality product",
    },
    {
      
      name: "Nike Slim Pant",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 78,
      countInStock: 5,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "hight quality product",
    },
    {
      
      name: "Puma Slim Pants",
      category: "Pants",
      image: "/images/p5.jpg",
      price: 65,
      countInStock: 13,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "hight quality product",
    },
    {
      
      name: "Adidas Fit Pant",
      category: "Pants",
      image: "/images/p6.jpg",
      countInStock: 0,
      price: 139,
      brand: "Adidas",
      rating: 5,
      numReviews: 15,
      description: "hight quality product",
    },
  ],
};

export default data;