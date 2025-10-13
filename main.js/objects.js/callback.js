function sumArray(numbers, callback) {
    const result = numbers.reduce((acc, num) => acc + num, 0)
    callback(result)
}
sumArray([1, 2, 3], function (result) {
    console.log(`Sum = ${result}`);
    
});

function doubleArray(numbers, callback) {
    const doubled = numbers.map(num => num * 2);
    callback(doubled);
}
doubleArray([5, 6, 7, 4], function (doubled) {
    console.log(`Doubled ${doubled}`);
});
// Фільтр слів: Напишіть функцію filterWords(words, condition, callback), яка приймає масив рядків words, функцію condition (перевірка рядка) та колбек callback. Функція повинна фільтрувати слова масиву за допомогою переданої умови та передати відфільтрований масив у колбек.
function filterWords(words, condition, callback) {
    const filtered = words.filter(condition);
    callback(filtered);
}
function isLong(word) {
    return word.length > 5;
}
filterWords(['banana', 'hey', "blabla"], isLong, function (filtered) {
    console.log(`Filtered words = ${filtered}`);    
})
// Капіталізація рядків: Напишіть функцію capitalizeStrings(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна перетворити всі рядки в масиві, роблячи першу літеру кожного рядка великої, і передати перетворений масив в колбек.
function capitalizeStrings(strings, callback) {
    const cap = strings.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());
    callback(cap);
}
capitalizeStrings(["aKakak", "laHlal"], function (cap) {
    console.log(`Capitalized = ${cap}`);
})
// Сортування чисел: Напишіть функцію sortNumbers(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна відсортувати числа в масиві за зростанням та передати відсортований масив у колбек.
function sortNumbers(numbers, callback) {
    const sorted = numbers.toSorted((a, b) => a - b);
    callback(sorted);
}
sortNumbers([1, 8, 6, 4, 9, 0], function (sorted) {
    console.log(`Sorted ${sorted}`);
});
// Пошук максимуму: Напишіть функцію findMax(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна знайти максимальне число в масиві та передати його в колбек.

function findMax(numbers, callback) {
    const found = Math.max(...numbers);
    callback(found);
}
findMax([3, 7, 4, 0, 77], function (found) {
    console.log(`Max = ${found}`);
    
})

// Перевірка на парність: Напишіть функцію checkEven(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна перевірити, чи всі числа в масиві парні, і передати результат перевірки колбек.
function checkEven(numbers, callback) {
    const checked = numbers.every((el) => el % 2 === 0);
    callback(checked)
}
checkEven([4, 6, 88, 8], function (checked) {
    console.log(`all? ${checked}`);
});
// Об'єднання рядків: Напишіть функцію concatStrings(strings, separator, callback), яка приймає масив рядків strings, рядок separator та колбек callback. Функція повинна об'єднати рядки з масиву, розділяючи їх переданим роздільником, і передати рядок, що вийшов, в колбек.
function concatStrings(strings, separator, callback) {
    const res = strings.join(separator);
    callback(res);
};
concatStrings(["hey", "lol", "mine"], "{", function (res) {
    console.log(`res = ${res}`);
});
// Перетворення в числа: Напишіть функцію parseNumbers(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна перетворити кожен рядок з масиву на число і передати новий масив чисел в колбек.
function parseNumbers(strings, callback) {
    const res = strings.map(str => Number(str));
    callback(res);
}
parseNumbers(["4", "9"], function (res) {
    console.log(`${res}`);
});


