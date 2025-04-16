class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class AdminUser extends User {
  deleteUser(userId: string): void {
    console.log({ userId })
    // Aquí se eliminaría el usuario
  }
}

class GuestUser extends User {}
const guestUser = new GuestUser("Invitado");
console.log({ guestUser })

const users: AdminUser[] = [
  new AdminUser("Admin"),
];

users.forEach(user => user.deleteUser("123")); // ❌ BOOM con GuestUser
