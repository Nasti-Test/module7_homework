const person = {
  name: "John",
  age: 30,
  fullName: ""
}

function setFullName(fullName) {
   this.fullName = fullName;
}

const setPersonFullName = setFullName.bind(person);

setPersonFullName("John Smith");

console.log("Обновленный объект person:", person);

console.log("Полное имя:", person.fullName);