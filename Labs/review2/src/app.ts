import { fetchUsers } from "./api";

document.addEventListener("DOMContentLoaded", () => {
  const userList = document.getElementById("user-list") as HTMLUListElement;

  fetchUsers().then((users) => {
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user.name;
      li.addEventListener("click", () => displayUserDetails(user));
      userList.appendChild(li);
    });
  });
});

function displayUserDetails(user: User) {
  const detailsDiv = document.getElementById("user-details") as HTMLDivElement;
  detailsDiv.innerHTML = `
        <h2>${user.name}</h2>
        <p>${user.address.street}, ${user.address.city}, ${user.address.zipcode}</p>
        <!-- other user details -->
    `;
}
