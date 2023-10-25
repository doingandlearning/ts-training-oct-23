import { fetchUserData, fetchUsers } from "./api";
import "./styles.css";

const displayUsers = (users: User[]) => {
  const container = document.getElementById("userContainer");
  if (container) {
    container.innerHTML = "";
  }

  users.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.className = "userCard";

    const userName = document.createElement("h2");
    userName.textContent = user.name;
    userCard.appendChild(userName);

    const userUsername = document.createElement("p");
    userUsername.textContent = `Username: ${user.username}`;
    userCard.appendChild(userUsername);

    const userEmail = document.createElement("p");
    userEmail.textContent = `Email: ${user.email}`;
    userCard.appendChild(userEmail);

    const fetchDataButton = document.createElement("button");
    fetchDataButton.textContent = "Fetch Data";
    fetchDataButton.addEventListener("click", () => fetchUserData(user.id));
    userCard.appendChild(fetchDataButton);

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
