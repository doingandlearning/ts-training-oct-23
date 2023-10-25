// 1. Complete the AllowedRoutes type to define allowed routes as "home" | "profile" | "settings".

// STRING LITERALS AND TEMPLATE LITERALS
type BaseRoutes = "home" | "profile" | "settings";
// 2. Transform any route in AllowedRoutes into its full URL format. E.g., "/home" | "/profile" | "/settings".
type AllowedRoutes = `/${BaseRoutes}`;

// KEYIN AND KEYOF
// 3. Develop the Permission type. It should represent an object where each key is an item from AllowedRoutes,
// and its value is a boolean indicating if a route is accessible.
type Permission = {
  [K in AllowedRoutes]?: boolean;
};

// 4. Implement the checkAccess function to return true if a route is accessible based on the provided permissions.
function checkAccess(route: AllowedRoutes, permissions: Permission): boolean {
  return !!permissions[route];
}

// 5. Adjust the UserRoles record to have keys of "admin" | "user" | "guest" and use the Permission type for its values.
// RECORD
type UserRoles = Record<"admin" | "user" | "guest", Permission>;

// 6. Fill the roles constant with some predefined permissions for each role.
// SAMPLE USAGE
const roles: UserRoles = {
  admin: { "/home": true, "/profile": true, "/settings": true },
  user: { "/home": true, "/profile": true, "/settings": false },
  guest: { "/home": true, "/profile": false, "/settings": false },
};

console.log(checkAccess("/home", roles.admin)); // Expected: true
console.log(checkAccess("/settings", roles.user)); // Expected: false
