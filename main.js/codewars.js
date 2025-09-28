//!Створіть функцію, яка завжди повертає True/ true для кожного елемента у заданому списку. Однак, якщо елементом є слово «flick», перемкніться на постійне повернення протилежного логічного значення.
function flickSwitch(arr) {
    const result = [];
    let state = true;
    for (const item of arr) {
    if (item === "flick") {
        state = !state
    }
    result.push(state)
    }
    return result
}
console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick', 'codewars', 'flick', 'code', 'wars']));

//!Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
};
console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));

//!Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.
function removeSmallest(numbers) {
    const copy = [...numbers]
    if (copy.length === 0) return [];
    const min = Math.min(...copy);
    const index = copy.indexOf(min);
    copy.splice(index, 1);
    return copy;
}
console.log(removeSmallest([1, 2, 3, 4, 5, 5, 3, 2, 1, 4]));
