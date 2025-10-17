const person = {
    name: "Alex",
    sayHi() {
    console.log(`Hi, I'm ${this.name}`);
    },
};

const greet = person.sayHi;
// Використай bind, щоб greet виводив "Hi, I'm Alex"
const binded = greet.bind(person);
binded();
// !-------------------------------
const user = {
    name: "Olya",
    showName() {
    console.log(this.name);
    },
};

// Використай bind, щоб через 1 секунду вивело "Olya"
setTimeout( user.showName.bind(user), 5000);

// !-------------------------------
function greett(greeting, name) {
    console.log(`${greeting}, ${name}!`);
}

const greetHello = greett.bind(null, "Hello");
greetHello("Andriy"); // має бути "Hello, Andriy!"

// !-------------------------------
const counter = {
    count: 0,
    inc() {
    this.count++;
    console.log(this.count);
    },
};

// Як зробити, щоб при кожному виклику setInterval збільшувався counter.count?
setInterval(counter.inc.bind(counter), 1000);


