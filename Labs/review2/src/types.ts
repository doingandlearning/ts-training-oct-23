interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  //... other properties
}

interface UserDetails {
  // Define the properties you want to fetch for a specific user.
  // For this example, I'll assume you have a few other properties compared to the User interface.
  id: number;
  name: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
  };
  //... other properties
}
