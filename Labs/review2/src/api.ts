const BASE_URL = "/api";

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch("/api/users");
    const users = await response.json();
    return users;
  } catch (err) {
    console.error("Error fetching users:", err);
    return [];
  }
};

export const fetchUserData = async (userId: number) => {
  try {
    const response = await fetch(`/api/users/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const userData: UserDetails = await response.json();
    displayUserData(userData);
  } catch (err) {
    console.error("Error fetching specific user data:", err);
  }
};

const displayUserData = (userData: UserDetails) => {
  const detailsContainer = document.getElementById("userDetailsContainer");
  if (detailsContainer) {
    detailsContainer.innerHTML = `
      <h2>${userData.name}</h2>
      <p>Address: ${userData.address.street}, ${userData.address.suite}, ${userData.address.city}, ${userData.address.zipcode}</p>
      <p>Phone: ${userData.phone}</p>
      <p>Website: <a href="${userData.website}" target="_blank">${userData.website}</a></p>
      <p>Company: ${userData.company.name} - ${userData.company.catchPhrase}</p>
      `;

    detailsContainer.hidden = false;
  }
};
