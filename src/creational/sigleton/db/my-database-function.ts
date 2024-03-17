import { User } from '../interfaces/user';

export const MyDatabaseFunction = (function () {
  const users: User[] = [
    { name: 'Alekiss', age: 28 },
    { name: 'Kaua', age: 17 },
    { name: 'Rodrigo', age: 34 },
  ];

  return {
    add(user: User): void {
      users.push(user);
    },

    remover(userremove: User): void {
      const index = users.findIndex(user => user.name === userremove);
      if (index !== -1) {
        console.log('Lista antes');
        console.log(users);
          users.splice(index, 1);
          
          console.log('Usuário ${user} removido');
          console.log('Lista depois da remoção');
        console.log(users);
      } 
    },


    show(): void {
      for (const user of users) {
        console.log(user);
      }
    },
  };
})();