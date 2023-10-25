type CartItem = {
  name: string;
  price: number;
};

const calculateTotalPrice = (
  items: CartItem[],
  taxRate: number,
  discountRate: number
): number => {
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
  const taxAmount = totalPrice * taxRate;
  const discountAmount = totalPrice * discountRate;
  return totalPrice + taxAmount - discountAmount;
};

const items = [
  { name: "apple", price: 1 },
  { name: "orange", price: 1.5 },
];
console.log(calculateTotalPrice(items, 0.1, 0.05)); // 2.75
