//Напиши функцію, яка створює об'єкт з ім'ям і віком.
//Функція повинна приймати два аргументи: ім'я (рядок) і вік (число).
//Поверни цей об'єкт.
function createObject(name, age) {
    const obj = {
        name,
        age,
    }
    return obj;
}
console.log(createObject("Vika", 22));

//Напиши функцію, яка приймає об'єкт і додає до нього нову властивість "address" (рядок).
//Поверни оновлений об'єкт.
function addAddress(obj, address) {
    obj.place = address;
    return obj;
}
console.log(addAddress({1: "hi"}, "address"));

//Напиши функцію, яка приймає об'єкт і новий вік.
//Функція повинна змінити значення властивості "age" в об'єкті на нове значення.
//Поверни оновлений об'єкт.
function changeAge(obj, newAge) {
    obj.age = newAge;
    return obj;
}
console.log(changeAge({ age: 30 }, 20));

//Напиши функцію, яка приймає об'єкт і видаляє з нього властивість "age".
//Поверни оновлений об'єкт.
function deleteAge(obj) {
    delete obj.age;
    return obj;
}
console.log(deleteAge({ name: "anna", age: 33 }));

//Напиши функцію, яка приймає об'єкт і повертає значення властивості "name".
function showName(obj) {
    return obj.name;
}
console.log(showName({name: "Oleg", age: 77}));

//Напиши функцію, яка приймає об'єкт і повертає true, якщо властивість "address" існує в об'єкті, і false, якщо ні.
function ifAddres(obj) {
    return !!obj.address;
}
console.log(ifAddres({address: "lalala", job: "worker" }));
//!Or
function ifAddres2(obj) {
    if (obj.address) {
        return true; 
    }
    return false;
}
console.log(ifAddres2({job: "worker" }));

//Напиши функцію, яка приймає два об'єкти і об'єднує їх в один.
//Якщо у об'єктів є однакові властивості, значення другого об'єкта мають замінити значення першого.
//Поверни результат.
function mix(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
console.log(mix({ name: "lala", age: 77 }, { name: "inna", work: "vatsak" }));

//Напиши функцію, яка створює об'єкт з трьома властивостями: ім'ям, віком і адресою.
//Якщо ім'я та вік не передані, встанови їх значення за замовчуванням ("Unknown", 0 відповідно).
//Поверни об'єкт.
function create(name, age, address) {
    if (!name && !age) {
        name = "Unknown";
        age = 0;
    }
    const indiv = {
        name,
        age,
        address,
    };
    
    return indiv;
}
console.log(create(undefined, 5, "lala"));

//Напиши функцію, яка приймає об'єкт та нові значення для імені та віку. Функція повинна змінити обидві властивості в об'єкті. Поверни оновлений об'єкт.
function changeValues(obj, newName, newAge) {
    obj.name = newName;
    obj.age = newAge;
    return obj;
}
console.log(changeValues({ name: "Oleksiy", age: 20, sex: "male" }, "cat", "10"));

//Напиши функцію, яка приймає об'єкт та нову властивість "email" (якщо її немає).
//Якщо в об'єкті вже є "email", нічого не роби.
//Поверни оновлений об'єкт.
function addEmail(obj, newEmail) {
    if (!obj.email) {
        obj.email = newEmail;
    }
    return obj;
}
const person1 = { name: "Anna" };
const person2 = { name: "Vika", email: "vika@example.com" };

console.log(addEmail(person1, "anna@example.com"));
// { name: 'Anna', email: 'anna@example.com' }

console.log(addEmail(person2, "new@example.com"));
// { name: 'Vika', email: 'vika@example.com' } — нічого не змінилося

//Напиши функцію, яка приймає об'єкт і змінює тип значення властивості "age" з числа на рядок.
//Поверни оновлений об'єкт.
function changeStr(obj) {
    obj.age = String(obj.age);
    return obj;
}
console.log(changeStr({ name: "Anna", age: 25 }));

//Напиши функцію, яка приймає об'єкт і змінює значення властивості "address", але тільки якщо ця властивість вже існує.
//Якщо її немає, поверни об'єкт без змін.
function changeAddress(obj, newAddress) {
    if (obj.address) {
        obj.address = newAddress;
    }
    return obj;
}
console.log(changeAddress({address: "lalala"}, "bababa"));

//Напиши функцію, яка приймає об'єкт користувача з властивостями name та сity. Та повертає рядок "User {імя користувача} from {місто користувача}!"
function foo(obj) {
    return `User ${obj.name} from ${obj.city}!`
}
console.log(foo({ name: "Anna", city: "Kyiv" }));

//Напиши функцію, яка приймає масив з ключами і значеннями (наприклад, [["name", "John"], ["age", 25], ["address", "123 Street"]]) і створює об'єкт з цих пар. Поверни об'єкт.
function createObj(obj) {
    const newObj = Object.fromEntries(obj);
    return newObj;
}
console.log(createObj([["name", "John"], ["age", 25], ["address", "123 Street"]]));

//Напиши функцію, яка приймає масив об'єктів і змінює в кожному з них властивість "age", збільшуючи її на 1. Поверни оновлений масив об'єктів.
function addOne(arr) {
    for (const item of arr) {
        item.age += 1;
    }
    return arr;
}
console.log(addOne([
    { name: "Anna", age: 25 },
    { name: "Vika", age: 30 }
]));

let arr = [1, 2, 3];
arr.forEach(el => console.log(el * 2));
console.log(arr);
