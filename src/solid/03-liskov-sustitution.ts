class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  deleteUser(userId: string): void {
    console.log(`${this.name} ha eliminado al usuario ${userId}`);
  }
}

class GuestUser extends User {
  deleteUser(userId: string): void {
    console.log({ userId })
    throw new Error("Los invitados no pueden eliminar usuarios");
  }
}

const users: User[] = [
  new User("Admin"),
  new GuestUser("Invitado"),
];

users.forEach(user => user.deleteUser("123")); // ❌ BOOM con GuestUser