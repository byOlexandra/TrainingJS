//Напиши функцію, яка приймає массив чисел і повертає новий масив, де всі парні числа переміщені в початок, а всі непарні - в кінець.
function swap(arr) {
    const even = [];
    const odd = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        } else if (arr[i] % 2 !== 0) {
            odd.push(arr[i]);
        }
    }
    return even.concat(odd)
}
console.log(swap([1, 4, 4, 6, 7, 9, 8, 10, 22, 3]));

//Напиши функцію, яка приймає масив чисел і повертає новий масив, де кожен елемент є сумою усіх попередніх елементів.
function sum(arr) {
    let sum = 0;
    const result = []
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];  
        result.push(sum)
    }
    return result;
}
console.log(sum([1, 4, 4, 6, 7, 9, 8, 10, 22, 3]));
//! Або
function same(arr) {
    let sum = 0;
    return arr.map(num => sum += num)
}
console.log(same([1, 4, 4, 6, 7, 9, 8, 10, 22, 3]));

//Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить лише унікальні числа.
function unique(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(unique([1, 1, 3, 3, 4, 5, 4, 7]));

//Напиши функцію, яка приймає два масиви і повертає об'єднаний массив без дублювання елементів.
function noDouble(arr1, arr2) {
    const merged = arr1.concat(arr2);
    const result = []
    for (let i = 0; i < merged.length; i++) {
        if (!result.includes(merged[i])) {
            result.push(merged[i])
        }
    }
    return result;
}
console.log(noDouble([1, 4, 4, 6, 7], [1, 1, 3, 3, 4, 5, 4]));

//Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен елемент є середньоарифметичним всіх сусідніх елементів.
function average(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || i === arr.length - 1) {
            result.push(arr[i]);
        } else {
            const avg = (arr[i - 1] + arr[i + 1]) / 2;
            result.push(avg);
        }
    }
    return result;
}
console.log(average([1, 22, 30, 7, 77, 8]));

//Напиши функцію, яка приймає массив чисел і повертає новий массив, де елементи відсортовані в порядку збільшення або зменшення.
//? За спаданням
function sort(arr) {
    const result = arr.sort((a, b) => b - a);
    return result;
}
console.log(sort([1, 22, 30, 7, 77, 8, 0]));
//? За зростанням
function sortPlus(arr) {
    const result = arr.sort((a, b) => a - b);
    return result;
}
console.log(sortPlus([1, 22, 30, 7, 77, 8, 0]));

//Напиши функцію, яка приймає массив рядочків та сортує їх за довжиною елементів.
function sortLength(arr) {
    const result = arr.sort((a, b) => a.length - b.length);
    return result;
}
console.log(sortLength(["hello", "banana", "key", "hi", "suitcase", "blablabla", "y"]));
