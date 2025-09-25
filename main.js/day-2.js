const array = [1, 2, 3, 4, 5, 6, 60];
let evenNumbers = array.filter(num => num % 2 === 0);
let min = Math.min(...array);
let max = Math.max(...array);

let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}


console.log("Even numbers:", evenNumbers);
console.log("Min:", min);
console.log("Max:", max);
console.log("Сума:", sum);
