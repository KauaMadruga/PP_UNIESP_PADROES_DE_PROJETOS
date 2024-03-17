import { User } from '../interfaces/user';

const users: User[] = [];

export const MyDatabaseModule = {
  add(user: User): void {
    users.push(user);
  },

  remover(index: number): void {
    if (index >= 0 && index < users.length) {
      const removerUser = users.splice(index, 1)[0];
      console.log(`Usuário ${(removerUser.name, removerUser.age)} removido`);
    }
  },


  show(): void {
    for (const user of users) {
      console.log(user);
    }
  },
};