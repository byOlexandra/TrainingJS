const refs = {
    form: document.querySelector(".js-form"),
    input: document.querySelector(".form-control"),
    list: document.querySelector(".js-list"),
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

refs.clearBtn.addEventListener("click", e => {
    e.preventDefault();
    items = [];
    refs.list.innerHTML = "";
    saveToLocalStorage()
})

const mainTitle = `<h1 class="title">Hi!😘 Add a contact here</h1>`;
document.body.insertAdjacentHTML("afterbegin", mainTitle)