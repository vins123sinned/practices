class UsersStorage {
  constructor() {
    this.storage = {};
    this.id = 0;
  }

  addUser({ firstName, lastName, email, age, bio }) {
    const id = this.id;
    this.storage[id] = { id, firstName, lastName, email, age, bio };
    this.id++;
  }

  getUsers() {
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }

  updateUser(id, { firstName, lastName, email, age, bio }) {
    this.storage[id] = {id, firstName, lastName, email, age, bio};
  }

  deleteUser(id) {
    delete this.storage[id];
  }

  searchUsers(query) {
    const searchResults = [];

    Object.keys(this.storage).forEach((id) => {
      const user = this.storage[id];
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();

      if (fullName.includes(query.toLowerCase()) || user.email.includes(query.toLowerCase())) searchResults.push(user);
    });

    return searchResults;
  }
}

export const usersStorage = new UsersStorage();