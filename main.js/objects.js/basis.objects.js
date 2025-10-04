const person = {
    name: "Oleksandra",
    age: 18,
    job: "developer",
    sayHi() {
        return `Hello ${this.name}`
    }
}
for (let key in person) {
    console.log (key + ": " + person[key]);
}

person.age = 17;
person.workPlace = "home";
delete person.job;

const friend = {
    name: "Oleksiy",
    age: 20,
    job: "developer",
};
friend.greeting = person.sayHi;
const together = [friend, person];

const key = Object.keys(person);
const value = Object.values(person)

console.log(person.name);
console.log(person.age);
console.log(person.workPlace);
console.log(person);
console.log(together);
console.log(key);
console.log(value);





