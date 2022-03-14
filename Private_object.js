const username = Symbol('username');
const password = Symbol('password');

const user = {
  username: 'trigun',
  password: '123456',
  age: 32
};

console.log(user.username);
console.log(user.password);