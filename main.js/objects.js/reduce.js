// Підрахунок символів: Напишіть функцію countCharacters(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна підрахувати загальну кількість символів у всіх рядках масиву та передати результат у колбек.
function countCharacters(strings, callback) {
    const res = strings.reduce((acc, num) => acc + num.length, 0);
    callback(res);
}
countCharacters(["gate", "lala", "bye"], function (res) {
    console.log(`Result = ${res}`);
})
// Знайди найбільше число у масиві без використання Math.max.
function max(arr) {
    const res = arr.reduce((m, num) => num > m ? num : m, arr[0])
    return `${res}`
};
console.log(max([4, 6, 3, 9, 99]));
// Порахуй загальну кількість символів у масиві рядків.
function all(str) {
    const res = str.reduce((acc, num) => acc + num.length, 0);
    return `${res}`
}
console.log(all(["akakak", "lol"]));

// Порахуй, скільки разів зустрічається кожне число у масиві, і поверни об’єкт.
function freq(arr) {
    const res = arr.reduce((acc, num) => {
        if (acc[num]) {
            acc[num]++;
        } else {
            acc[num] = 1;
        };
        return acc;
    }, {});
    return res;
}
console.log(freq([1, 2, 1, 3, 2, 1]));

function sum(arr) {
    const res = arr.reduce((acc, num) => {
    if (num > 5) {
        return acc + num;
    }
    return acc;
    }, 0);
    return res;
}
console.log(sum([3, 9, 8]));
// Порахуй добуток усіх чисел у масиві.
function prod(arr) {
    const res = arr.reduce((acc, num) => acc * num, 1);
    return res;
}
console.log(prod([2, 5, 7]));
// Створи один рядок з усіх елементів масиву, розділених пробілом.
function makeStr(arr) {
    const res = arr.reduce((acc, str) => acc + " " + str, "").trim();
    return res;
}
console.log(makeStr(["Hello", "from", "reduce"]));

// Створи новий масив, де кожен елемент — квадрат числа з вихідного масиву.
function sq(arr) {
    const res = arr.reduce((acc, num) => {
        acc.push(num * num);
        return acc;
    }, [])
    return res;
}
console.log(sq([1, 3, 5]));


