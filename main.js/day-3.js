// * Це важливий коментар (буде виділений жовтим)
// ! Увага, тут може бути помилка (червоним)
// ? Питання або щось для перевірки (синім)
// // Звичайний коментар (сірим)
// TODO: доробити функцію (помаранчевим)
//Напиши функцію, яка приймає масив та виводить кожен елемент масиву у консоль.
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log();

//Напиши функцію, яка приймає масив та виводить кожен парний елемент масиву у консоль.
function task2(nums) {
    for (let i = 0; i < nums.length; i += 2) {
        console.log(nums[i])
    }
}
task2([4, 5, 7, 8, 9, 14, 16, 13, 12, 2])

//Напиши функцію, яка приймає масив чисел та виводить лише парні числа у консоль.
function evenN(even) {
    for (let i = 0; i < even.length; i++) {
        if (even[i] % 2 === 0) {
            console.log(even[i]);
        } 
    }
}
evenN([4, 5, 7, 8, 9, 14, 16, 13, 12]);

//Напиши функцію, яка приймає два параметри (arr, max). Де arr - це масив чисел. Потрібно вивести лише ті елементи масиву які більші за max.
function moreMax(arr, max) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
        console.log(arr[i])
        }
    }
    
}
moreMax([5, 0, 1, 4, 8, 9], 0);

//Напиши функцію яка приймає масив та повертає суму всіх чисел у масиві.
function sum(all) {
    let total = 0;
    for (let i = 0; i < all.length; i++) {
        total += all[i];
    }
    return total;
}
console.log(sum([2, 4, 7, 6, 5, 40]));

//Напиши функцію яка приймає масив та елемент для пошуку. Фукнція повинна порахувати скільки разів шуканий елемент зустрічається у масиві.
const array = [1, 1, 1, 1, 2, 5, 7, 1];
const elementToCount = 1;
const count = array.filter(item => item === elementToCount).length;
console.log(count);
// ?АБО
function countOfOccur(arr, elementTo) {
    let count = 0;
    for (const num of arr) {
        if (num === elementTo) {
            count++
        }
    }
    return count;
}
console.log(countOfOccur([1, 1, 1, 1, 2, 5, 7, 1], 1));
// ? If we didn’t use count++, the counter would never increase, and the result would always be 0.

//Напиши функцію яка приймає масив чисел. Функція повинна видалити усі негативні(відємні числа) з масиву та повернути новий масив.
function positiveEl(arr2) {
    let result = []
    for (const item of arr2) {
        if (item >= 0) {
            result.push(item);
        }
    }
    return result;
}
console.log(positiveEl([1, -2, -1, 7, -2, 8]));
//!АБО 
function posEl(arr2) {
    return arr2.filter(item => item >= 0);
}
console.log(posEl([1, -2, -1, 7, -2, 8, 9]));

