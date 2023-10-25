// STRING LITERALS AND TEMPLATE LITERALS
type AllowedRoutes = ""; // TODO: Define the allowed routes

// KEYIN AND KEYOF
type Permission = {}; // TODO: Define the permission type

function checkAccess(route: AllowedRoutes, permissions: Permission): boolean {
  // TODO: Implement the function
  return false;
}

// RECORD
type UserRoles = Record<string, Permission>; // TODO: Adjust the keys accordingly

// SAMPLE USAGE (You should aim to make this work)
const roles: UserRoles = {
  admin: { home: true, profile: true, settings: true },
  user: { home: true, profile: true, settings: false },
  guest: { home: true, profile: false, settings: false },
};

console.log(checkAccess("home", roles.admin)); // Expected: true
console.log(checkAccess("settings", roles.user)); // Expected: false
