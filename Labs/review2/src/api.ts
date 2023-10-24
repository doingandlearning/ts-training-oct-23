const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetchUsers(): Promise<User[]> {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) throw new Error("Failed to fetch users.");
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}
