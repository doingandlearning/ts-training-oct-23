type Product = {
  id: number;
  name: string;
  price: number;
};

const filterByPrice = (products: Product[], threshold: number): Product[] => {
  return products.filter((product) => product.price >= threshold);
};

const products = [
  { id: 1, name: "laptop", price: 1000 },
  { id: 2, name: "phone", price: 500 },
];
console.log(filterByPrice(products, 600)); // [{ id: 1, name: 'laptop', price: 1000 }]
