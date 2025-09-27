//Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив де будуть лише ті елементи які зустрічаються і в arr1 і arr2.
function equalEl(arr1, arr2) {
    const newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            newArr.push(arr1[i]);
        }
    }
    return newArr;
}
console.log(equalEl(["t", "l", "o", "r", "e", "m", "t"], ["o", "t", "e"]));

//Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив де будуть лише елементи масиву arr1 яких не має у масиві arr2.
function unequal(arr1, arr2) {
    const arr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            arr.push(arr1[i])
        }
    }
    return arr;
}
console.log(unequal(["t", "l", "o", "r", "e", "m", "t"], ["o", "t", "e"]));

//Напиши функцію яка приймає масив та знаходить мінімальний елемент.
function findMin() {
    return Math.min(...arguments);
}
console.log(findMin(5, 7, 4, 8, 32, 1));

//Напиши функцію яка приймає масив та знаходить максимальний елемент.
function findMax(...arr) {
    return Math.max(...arr);
}
console.log(findMax(5, 7, 154, 4, 8, 32, 1));

//Напиши функцію яка приймає масив та повертає масив лише з тих елементів які більші за середнє значення всіх елементів масиву.
function more(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    let avg = sum / arr.length;
    return arr.filter(el => el > avg);
}
console.log(more([5, 7, 154, 4, 8, 32, 1]));

//Напиши функцію яка приймає масив та повертає масив лише з тих елементів які більші за власний індекс.
function moreInd(arr) {
    return arr.filter((el, index) => el > index);
}
console.log(moreInd([0, 1, 3, 4, 2, 7]));

//Напишіть функцію, яка приймає масив чисел. Функція повинна знайти мінімальний елемент та видалити його з масиву.
function deleteEl(...arr) {
    const min = Math.min(...arr);
    return arr.filter(el => el !== min);
}
console.log(deleteEl(0, 1, 3, 4, 2, 7, -10));

//Напиши функцію яка приймає два параметри start та end. Функія повина повернути масив де будуть числа з діапазону але лише ті у яких не має цифри 5. К прикладу числа (51, 25, 15,256) не підходять бо містять символ "5" у собі.
function last(start, end) {
    const array = [];
    for (let i = start; i <= end; i++) {
        if (!String(i).includes('5')) {
            array.push(i);
        }
    }
    return array;
}
console.log(last(4, 26));

