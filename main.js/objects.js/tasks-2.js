//Створіть об'єкт contactBook, який зберігатиме список контактів та надаватиме методи для додавання, видалення та пошуку контактів.
const contactBook = {
    contacts: [],
    addContact(name, phone) {
        return this.contacts.push({name, phone})
    },
    delContact(name) {
        return this.contacts = this.contacts.filter(contact => contact.name != name);
    },
    searchContact(name) {
        return this.contacts.find(contact => contact.name === name)
    },
    showAll() {
        return this.contacts;
    }
}
contactBook.addContact("Олександр", "123456789");
contactBook.addContact("Марія", "987654321");
console.log(contactBook.searchContact("Марія")); // { name: "Марія", phone: "987654321" }
console.log(contactBook.searchContact("Олександр")); // { name: "Марія", phone: "987654321" }
console.log(contactBook.delContact("Олександр"));
console.log(contactBook.showAll()); // залишиться лише Марія

// Створіть об'єкт rectangle, який представлятиме прямокутник з методами для обчислення його площі та периметра. Об'єкт повинен приймати довжини двох сторін під час створення.
const rectangle = (width, height) => ({
    width,
    height,
    getArea() {
        return this.width * this.height;
    },
    getPerimeter() {
        return 2 * (this.width + this.height)
    }
});
const myRect = rectangle(5, 10);
console.log(myRect.getArea());
console.log(myRect.getPerimeter());

// Створіть об'єкт toDoList, який зберігатиме список задач та надаватиме методи для додавання нових завдань, позначки задачі як виконаної та виведення списку завдань.
const todoList = {
    list: [],
    addTask(task) {
        return this.list.push({task, done: false});
    },
    completeTask(taskName) {
        const task = this.list.find(t => t.task === taskName);
        if (task) {
            task.done = true;
        } else {
            console.log("Not found");
        }
    },
    showTasks() {
        this.list.forEach(t => {
            console.log(`${t.task} — ${t.done ? "✅" : "❌"}`);            
        })
    }
}

console.log(todoList.addTask("Купити хліб"));
todoList.addTask("Вивчити JS");
todoList.showTasks();
// Купити хліб — ❌
// Вивчити JS — ❌
todoList.completeTask("Купити хліб");
todoList.showTasks();

// Створіть об'єкт bankAccount, який представлятиме банківський рахунок із методами для депозиту, зняття коштів та перевірки балансу. Врахуйте обробку можливих помилок (наприклад, недостатньо коштів).
const bankAccount = {
    balance: 0,
    deposit(amount) {
        this.balance += amount;
    },
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Недостатньо коштів");
        }
    },
    checkBalance() {
        console.log(this.balance);
    },
}
bankAccount.deposit(100);
bankAccount.checkBalance();   // 100
bankAccount.withdraw(50);
bankAccount.checkBalance();   // 50
bankAccount.withdraw(100);    // Недостатньо коштів
bankAccount.checkBalance();   

// Створіть об'єкт libraryCatalog, який зберігатиме список книг у бібліотеці та надаватиме методи для додавання нових книг, пошуку книг за автором та ISBN, а також виведення списку всіх книг.
const libraryCatalog = {
    books: [],
    addBook(title, author, code) {
        this.books.push({ title, author, code });
    },
    findByAuthor(author) {
        return this.books.find(book => book.author === author);
    },
    findByISBN(code) {
        return this.books.find(book => book.code === code);
    },
    showBooks() {
        console.log(this.books);        
    }
}
// Додаємо книги
libraryCatalog.addBook("451° за Фаренгейтом", "Рей Бредбері", "978-966-03-8735-1");
libraryCatalog.addBook("Місто", "Валер'ян Підмогильний", "978-617-12-9001-2");
libraryCatalog.addBook("Злочин і кара", "Федір Достоєвський", "978-617-09-6770-3");
// Виводимо всі книги
libraryCatalog.showBooks();
// Пошук за автором
console.log(libraryCatalog.findByAuthor("Рей Бредбері")); 
// Пошук за ISBN
console.log(libraryCatalog.findByISBN("978-617-12-9001-2"));

// Створіть об'єкт temperatureConverter, який матиме методи для конвертації температур між градусами Цельсія та Фаренгейта.
const temperatureConverter = {
    celsiusToFahrenheit(celsius) {
        return celsius * 9 / 5 + 32;
    },
    fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
}
console.log(temperatureConverter.celsiusToFahrenheit(0));    // має бути 32
console.log(temperatureConverter.fahrenheitToCelsius(212));  // має бути 100
