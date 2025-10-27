const refs = {
    list: document.querySelector(".js-list"),
    form: document.querySelector(".js-form"),
    deleteBtn: document.querySelector('[data-type="delete"]'),
    filter: document.querySelector("#filter-date")
}

let items = JSON.parse(localStorage.getItem("items")) || [];

function moodTemplate(obj) { 
    return `
    <li class="mood-item" id="${obj.id}">
        <h4>${obj.date}</h4>
        <p class="mood-status">${obj.mood}</p>
        <p class="mood-comment">${obj.comment}</p>
        <button data-type="delete">delete</button>
    </li>`
}
function moodsTemplate(arr) {
    return arr.map(moodTemplate).join("")
}
function saveToLocalStorage() {
    localStorage.setItem("items", JSON.stringify(items));
}

refs.list.innerHTML = moodsTemplate(items);

refs.form.addEventListener("submit", e => {
    e.preventDefault()

    const formData = new FormData(refs.form);
    const moodInfo = Object.fromEntries(formData.entries());

    const newMood = {
        id: Date.now(),
        date: moodInfo.date,
        mood: moodInfo.mood.trim(),
        comment: moodInfo.comment.trim(),
    }
    
    items.unshift(newMood);
    const markup = moodTemplate(newMood);
    refs.list.insertAdjacentHTML("afterbegin", markup);
    saveToLocalStorage();
    refs.form.reset()
})

refs.list.addEventListener("click", e => {
    e.preventDefault()
    if (e.target.dataset.type === "delete") {
        const li = e.target.closest("li");
        const id = Number(li.id);
        items = items.filter(item => item.id !== id);
        li.remove();
        saveToLocalStorage()
    }
})

refs.filter.addEventListener("input", e => {
    e.preventDefault()
    const selectedDate = refs.filter.value;
    if (!selectedDate) {
        refs.list.innerHTML = moodsTemplate(items)
        return;
    }
    const filteredItems = items.filter(item => item.date === selectedDate);
    refs.list.innerHTML = moodsTemplate(filteredItems)
})

