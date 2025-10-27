const users = [
    { name: "Olena", age: 23, active: true },
    { name: "Oleh", age: 19, active: false },
    { name: "Max", age: 31, active: true },
    { name: "Sofia", age: 27, active: false },
];

const activeUsers = _.filter(users, { active: true });
console.log("Active ones: ", activeUsers);

const olderUsers = _.maxBy(users, "age");
console.log("Older ones: ", olderUsers);

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = _.countBy(fruits)
console.log(count);

const text = "apple banana apple kiwi banana apple orange";
const words = text.split(" ");
const countT = _.countBy(words);
console.log(countT);
