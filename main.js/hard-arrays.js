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



