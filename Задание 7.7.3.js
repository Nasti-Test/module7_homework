const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 19 },
  { name: "David", age: 16 },
  { name: "Eva", age: 25 }
];

const adults = users.filter(user => user.age >=);

const names = adults.map(user => user.name);

console.log("Совершеннолетние пользователи:", adults);
console.log("Имена совершеннолетних пользователей:", names);
