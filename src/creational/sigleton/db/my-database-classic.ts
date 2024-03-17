import { User } from '../interfaces/user';

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;
  private users: User[] = [ { name: 'Alekiss', age: 28 },
  { name: 'Kaua', age: 17 },
  { name: 'Rodrigo', age: 34 },
];

  private constructor() {}

  static get instance(): MyDatabaseClassic {
    if (MyDatabaseClassic._instance === null) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remover(index: number): void {
    if (index >= 0 && index < this.users.length) {
      const removerUser = this.users.splice(index, 1)[0];
      console.log(`Usuário ${(removerUser.name, removerUser.age)} removido`);
    }
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }

}