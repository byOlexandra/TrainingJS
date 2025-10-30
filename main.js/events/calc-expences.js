const refs = {
    form: document.querySelector(".js-form"),
    list: document.querySelector(".js-list"),
    formControl: document.querySelectorAll("input"),
}

function expenceTemplate(obj) {
    return `
    <li class="expence-item" id="${obj.id}">
    <p>Category:  ${obj.category}</p>
    <p class="amount">Amount:  ${obj.amount}</p>
    <p>Date:  ${obj.date}</p>
    <button data-type="delete">DELETE</button>
    </li>`
}
function expencesTemplate(arr) {
    return arr.map(expenceTemplate).join("")
}

let items = JSON.parse(localStorage.getItem("items")) || [];

function saveToLocalStorage() {
    localStorage.setItem("items", JSON.stringify(items))
}

refs.list.innerHTML = expencesTemplate(items)

refs.form.addEventListener("submit", e => {
    e.preventDefault()
    const formData = new FormData(refs.form);
    const expenceData = Object.fromEntries(formData.entries());
    const isEmpty = Array.from(refs.formControl).some(input => input.value.trim() === "");
    if (isEmpty) {
        const markup = ` <p class="error-msg">Fill in all the fields</p>`;
        refs.form.insertAdjacentHTML("beforeend", markup);
        return;        
    }

    const newExpence = {
        id: Date.now(),
        amount: expenceData.amount,
        category: expenceData.category,
        date: expenceData.date,
    }

    items.unshift(newExpence);
    
    const markup = expenceTemplate(newExpence);
    refs.list.insertAdjacentHTML("afterbegin", markup);

    saveToLocalStorage();
    refs.form.reset();
    refs.form.querySelector(".error-msg")?.remove();
})

refs.list.addEventListener("click", e => {
    if (e.target.dataset.type === "delete") {
        const li = e.target.closest("li");
        const id = Number(li.id);
        items = items.filter(item => item.id !== id)
        li.remove()
        saveToLocalStorage()
    }
})
