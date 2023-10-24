var database = [];

function addUser(username, age, email) {
	var user = {
		id: database.length + 1,
		username: username,
		age: age,
		email: email,
		created: new Date()
	};
	database.push(user);
	return user;
}

function findUser(username) {
	for (var i = 0; i < database.length; i++) {
		if (database[i].username === username) {
			return database[i];
		}
	}
	return null;
}

function deleteUser(id) {
	var index = -1;
	for (var i = 0; i < database.length; i++) {
		if (database[i].id === id) {
			index = i;
			break;
		}
	}
	if (index > -1) {
		return database.splice(index, 1);
	}
	return null;
}

function listUsers() {
	return database;
}

console.log(addUser("john_doe", 30, "john.doe@example.com"));
console.log(addUser("jane_smith", 25, "jane.smith@example.com"));
console.log(listUsers());
console.log(deleteUser(1));
console.log(listUsers());
console.log(findUser("jane_smith"));