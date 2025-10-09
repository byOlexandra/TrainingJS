// Створи об'єкт із властивостями firstName (рядок), lastName (рядок) та age (число). Додай метод getFullName, який повертає повне ім'я у форматі: [firstName] [lastName]. Також додай метод incrementAge, який збільшує вік на 1.

const person = {
    firstName: "Sasha",
    lastName: "Starovatova",
    age: 17,
    getFullName() {
        return `Ось ваше повне ім'я => ${this.firstName + " " + this.lastName}`
    },
    incrementAge() {
        this.age++;
        return `Збільшений вік ${this.age}`
    }
}
console.log(person.getFullName());
console.log(person.incrementAge());

// Створи об'єкт із властивостями bankName (рядок), accountNumber (число) та balance (число). Додай метод deposit, який приймає суму як аргумент і додає її до балансу, а також метод withdraw, який приймає суму і зменшує баланс, якщо сума не перевищує наявний баланс. Метод має повертати новий баланс.
const bank = {
    bankname: "Mono",
    accountNumber: `01010101`,
    balance: 100,
    deposit(money) {
        this.balance += money;
        return `Баланс = ${this.balance}`
    },
    withdraw(sum) {
        if (sum <= this.balance) {
            this.balance -= sum;
            return `Баланс = ${this.balance}`
        } else {
            return "Недостатньо коштів"
        }
    }
}
console.log(bank.balance);
console.log(bank.deposit(350));
console.log(bank.withdraw(27));
console.log(bank.withdraw(500));

// Створи об'єкт з властивостями width (число), height (число). Додай метод calculateArea, який повертає площу прямокутника, та метод calculatePerimeter, який повертає периметр.
const geometry = {
    calculateArea(width, height) {
        const area = height * width;
        return `Area equals ${area}`
    },
    calculatePerimeter(width, height) {
        const perimeter = 2 * (height + width);
        return `Perimeter equals ${perimeter}`
    }
}
console.log(geometry.width);
console.log(geometry.height);
console.log(geometry.calculateArea(20, 3));
console.log(geometry.calculatePerimeter(20, 20));

// Створи об'єкт із властивостями name (рядок), position (рядок) та salary (число). Додай метод getInfo, який повертає рядок у форматі: [name] працює на позиції [position] із зарплатою [salary].
const worker = {
    name: "Vasya",
    position: "accountant",
    salary: 3500,
    getInfo() {
        return `${this.name} працює на позиції ${this.position} із зарплатою ${this.salary}$`
    },
    raiseSalary() {
        const raised = this.salary * 1.2;
        return raised;  
    }
}
console.log(worker.salary);
console.log(worker.getInfo());
console.log(worker.raiseSalary());

// Створи об'єкт із властивостями countryName (рядок), capital (рядок) та population (число). Додай метод getDetails, який повертає рядок у форматі: Країна: [countryName], столиця: [capital], населення: [population].
const location = {
    countryName: "Ukraine",
    capital: "Kyiv",
    population: 29,
    getDetails() {
        return `Країна: ${this.countryName}, столиця: ${this.capital}, населення: ${this.population} million`
    }
}
console.log(location.countryName);
console.log(location.getDetails());

// Створи об'єкт із властивостями itemName (рядок), quantity (число) та pricePerItem (число). Додай метод calculateTotalPrice, який повертає загальну вартість, множачи quantity на pricePerItem.
const items = {
    itemName: "Chair",
    quantity: 17,
    pricePerItem: 1060,
    calculateTotalPrice() {
        const totalPrice = this.quantity * this.pricePerItem;
        return `Загальна вартість ${totalPrice}`
    }
}
console.log(items.calculateTotalPrice());

// Створи об'єкт із властивостями email (рядок) та password (рядок). Додай метод checkLogin, який приймає два аргументи (email і password) і повертає true, якщо вони збігаються зі значеннями об'єкта.
const register = {
    email: "blabla@gmail.com",
    password: "xdkksdks",
    checkLogin(email, password) {
        const isCorrect = this.email === email && this.password === password;
        return isCorrect;
    }
}
console.log(register.checkLogin("blabla@gmail.com", "xdkksdks"));
console.log(register.checkLogin("blabla@gmil.com", "xdkksds"));

// Створи об'єкт із властивостями temperature (число) та unit (рядок, що приймає значення "C" або "F"). Додай метод convertToCelsius, який переводить температуру з Фаренгейта в Цельсій, якщо unit дорівнює "F", та метод convertToFahrenheit, який робить зворотнє перетворення.
const temp = {
    temperature: 20,
    unit: "C",
    convertToCelsius() {
        if (this.unit === "F") {
            this.temperature = (this.temperature - 32) * 5 / 9;
            this.unit = "C";
            return `Converted to Celsius: ${this.temperature.toFixed(2)} *C`
        } else {
            return "Its already converted to C";
        }
    },
    convertToFahrenheit() {
        if (this.unit === "C") {
            this.temperature = (this.temperature * 9) / 5 + 32;
            this.unit = "F";
            return `Converted to Fahrenheit: ${this.temperature.toFixed(2)} *F`
        } else {
            return "Its already converted to F";
        }
    }
}
console.log(temp.convertToFahrenheit()); 
console.log(temp.convertToCelsius()); 

// Створи об'єкт із властивостями studentName (рядок), grade (число) та subject (рядок). Додай метод upgradeGrade, який збільшує значення grade на 1, та метод getReport, який повертає рядок у форматі: [studentName] має оцінку [grade] з предмету [subject].
const score = {
    
}
