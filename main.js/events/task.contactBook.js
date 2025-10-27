const refs = {
    form: document.querySelector(".js-form"),
    input: document.querySelector(".form-control"),
    searchInput: document.querySelector(".js-search-input"),
    list: document.querySelector(".js-list"),
    searchBtn: document.querySelector(".searchBtn"),
    deleteBtn: document.querySelector('[data-type="delete"]'),
    clearBtn: document.querySelector(".clearAllBtn")
}

function contactTemplate(obj) {
    return `
    <li class="contact-item" data-id="${obj.id}">
        <h3>${obj.name}</h3>
        <p>${obj.phone}</p>
        <p>${obj.email}</p>
        <button data-type="delete">DELETE</button>
    </li>`
}
function contactsTemplate(arr) {
    return arr.map(contactTemplate).join("")
}

function saveToLocalStorage() {
    localStorage.setItem("items", JSON.stringify(items));
}

let items = JSON.parse(localStorage.getItem("items")) || [];

refs.list.innerHTML = contactsTemplate(items)

refs.form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(refs.form);
    const info = Object.fromEntries(formData.entries());

    const newContact = {
        id: Date.now(),
        name: info.name.trim(),
        phone: info.phone.trim(),
        email: info.email.trim(),
    }

    items.unshift(newContact);
    const markup = contactTemplate(newContact);
    refs.list.insertAdjacentHTML("afterbegin", markup);
    saveToLocalStorage();

    refs.form.reset()
})

refs.searchBtn.addEventListener("click", e => {
    e.preventDefault()
    const value = refs.searchInput.value.trim().toLowerCase();
    if (value === "") {
        refs.list.innerHTML = contactsTemplate(items);
        return;
    }
    const filtered = items.filter(item => {
        return item.name.toLowerCase().includes(value)
    })    
    refs.list.innerHTML = contactsTemplate(filtered)
})

refs.list.addEventListener("click", e => {
    e.preventDefault()
    if (e.target.dataset.type === "delete") {
        const li = e.target.closest("li");
        const id = Number(li.dataset.id)
        li.remove();

        items = items.filter(item => item.id !== id)
        saveToLocalStorage()
    }
})

refs.clearBtn.addEventListener("click", e => {
    e.preventDefault();
    items = [];
    refs.list.innerHTML = "";
    saveToLocalStorage()
})

const mainTitle = `<h1 class="title">Hi!😘 Add a contact here</h1>`;
document.body.insertAdjacentHTML("afterbegin", mainTitle)