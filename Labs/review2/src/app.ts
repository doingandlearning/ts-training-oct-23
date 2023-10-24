interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  //... other properties
}

const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch("/api/users");
    const users = await response.json();
    return users;
  } catch (err) {
    console.error("Error fetching users:", err);
    return [];
  }
};

const displayUsers = (users: User[]) => {
  const container = document.getElementById("userContainer");
  if (container) {
    container.innerHTML = "";
  }
  users.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.className = "userCard";
    userCard.innerHTML = `
          <h2>${user.name}</h2>
          <p>Username: ${user.username}</p>
          <p>Email: ${user.email}</p>
          <button onclick="fetchUserData(${user.id})">Fetch Data</button>
      `;

    container?.appendChild(userCard);
  });
};

const init = async () => {
  const users = await fetchUsers();
  displayUsers(users);

  const searchBar = document.getElementById("searchBar") as HTMLInputElement;
  searchBar.addEventListener("input", (event) => {
    const filteredUsers = users.filter((user) =>
      user.name
        .toLowerCase()
        .includes(
          (event.currentTarget! as HTMLInputElement).value.toLowerCase()
        )
    );
    displayUsers(filteredUsers);
  });
};

init();
