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

// Створіть об'єкт shoppingCart, який зберігатиме список товарів та надаватиме методи для додавання товарів, підрахунку загальної вартості та виведення списку товарів.
const shoppingCart = {
    itemList: [],
    addItem(name, price, quantity) {
        return this.itemList.push({ name, price, quantity });
    },
    totalPrice() {
        return this.itemList.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    showList() {
        return this.itemList
    }
}
shoppingCart.addItem("Яблуко", 15, 3);
shoppingCart.addItem("Молоко", 40, 1);
shoppingCart.showList();
console.log(shoppingCart.showList());
console.log("Загальна вартість:", shoppingCart.totalPrice(), "грн");

// Створіть об'єкт socialNetworkUser, який представляє користувача соціальної мережі з полями username, friends (список друзів) та методами для додавання та видалення друзів, а також виведення списку друзів.
const socialNetworkUser = {
    username: "Oleksandra",
    friends: [],
    addFriend(name) {
        this.friends.push({name})
    },
    removeFriend(name) {
        this.friends = this.friends.filter(friend => friend.name !== name)
    },
    showFriends() {
        return this.friends
    }
}
socialNetworkUser.addFriend("Марія");
socialNetworkUser.addFriend("Андрій");
console.log(socialNetworkUser.showFriends());
socialNetworkUser.removeFriend("Андрій");
console.log(socialNetworkUser.showFriends());

// Створіть об'єкт musicPlayer, який зберігатиме список пісень та надаватиме методи для додавання нових пісень, відтворення, паузи та перемикання між піснями.
const musicPlayer = {
    songList: [],
    addNew(author, name) {
        this.songList.push({ name, author });
    },
    playSong(name) {
        const song = this.songList.find(song => song.name === name);
        if (song) {
            this.currentSong = song;
            this.isPlaying = true;
        } else (
            console.log("Такої пісні немає у списку")
        )
    },
    pauseSong() {
        if (this.isPlaying) {
            this.isPlaying = false;
            console.log("Пісня на паузі");
        } else {
            console.log("Нічого не грає")            
        }
    },
    changeSong(name) {
        this.playSong(name)
    }
}
musicPlayer.addNew("The Weeknd", "Blinding Lights");
musicPlayer.addNew("Imagine Dragons", "Believer");
musicPlayer.addNew("Ed Sheeran", "Shape of You");
console.log(musicPlayer.songList); // перевіримо, чи додалися пісні
musicPlayer.playSong("Believer");  // Грає Imagine Dragons — Believer
musicPlayer.pauseSong();           //  Пісня на паузі
musicPlayer.changeSong("Shape of You"); // Перемикаємо пісню...

// Створіть об'єкт myString, який буде мати наступні методи: метод reverse(), який параметром приймає рядок, а повертає його в перевернутому вигляді; метод ucFirst(), який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру заголовною; і метод ucWords(), який приймає рядок і робить заголовною першу літеру кожного слова цього рядка.
const myString = {
    reverse(str) {
        return str.split("").reverse().join("")
    },
    ucFirst(str) {
        const firstLetter = str[0].toUpperCase();
        return firstLetter + str.slice(1);
    },
    ucWords(str) {
        return str
        .split(" ") // розбиваємо рядок на окремі слова
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // робимо першу літеру великою
        .join(" ")
    }
}
console.log(myString.reverse("hello, my dear"));
console.log(myString.ucFirst("laptop"));
console.log(myString.ucWords("hello world")); // "Hello World"
console.log(myString.ucWords("javascript is fun")); // "Javascript Is Fun"
console.log(myString.ucWords("олександра староватова")); // "Олександра Староватова"


