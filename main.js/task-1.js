function isNumEven(number) {
    if (number % 2 === 0) {
        return `Number ${number} is even`;
    } else {
        return `Number ${number} is odd`;
    }
}
function isMaximum(a, b, c) {
    return Math.max(a, b, c);
}
function isNumOdd(a) {
    return a % 3 === 0 || a % 5 === 0 ? "Number is fine" : "Number is infine"; 
}
function isPositive(z) {
    if (z > 0) {
        return `Ураааа позитивне`;
    } else if (z < 0) {
        return `Негативне((`;
    } else {
        return`Зеро`;
    }
}
function studentScore(score) {
    if (score >= 90) {
        return `Відмінно`;
    } else if (score >= 70) {
        return `Добре`;
    } else if (score >= 50) {
        return `Задовільно`;
    } else {
        return `Незадовільно`;
    }
}
function getAbs(mod) {
    return mod >= 0 ? mod : -mod;
}
function leapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}
function calc(a, b, operator) {
    if (operator === "+") {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "*") {
        return a * b;
    } else if (operator === "/") {
        return a / b;
    } else {
        return "Invalid operator"
    }
}
//Задача на знаходження парного числа
console.log(isNumEven(7));
console.log(isNumEven(2));
console.log(isNumEven(5));
//Знайти найбільше число
console.log(isMaximum(5, 7, 27));
//Чи ділиться число на 3 і 5 одночасно
console.log(isNumOdd(15));
console.log(isNumOdd(17));
//Знайти позитивне/негативне число
console.log(isPositive(0));
console.log(isPositive(-10));
console.log(isPositive(10000));
//Оцінка студента
console.log(studentScore(92));
console.log(studentScore(49));
console.log(studentScore(70));
//Отримати абсолютне значення
console.log(getAbs(5));
console.log(getAbs(-5));
console.log(getAbs(-10000));
//Дізнатись високосний рік
console.log(leapYear(2000));
console.log(leapYear(1900));
console.log(leapYear(2024));
console.log(leapYear(2023));
//Калькулятор (+,-,*,/)
console.log(calc(6, 7, "+"));
console.log(calc(7, 8, "*"));
console.log(calc(6, 7, "'"));





