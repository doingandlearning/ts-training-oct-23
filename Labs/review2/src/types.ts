// src/types.ts
interface Address {
  street: string;
  city: string;
  zipcode: string;
  // ... other fields
}

interface User {
  id: number;
  name: string;
  address: Address;
  // ... other fields
}
