const refs = {
    form: document.querySelector(".js-form"),
    formControl: document.querySelectorAll(".form-control"),
    list: document.querySelector(".js-list"),
    filterSelect: document.getElementById("filterBy"),
}

let items = JSON.parse(localStorage.getItem("items")) || [];

function saveToLocalStorage() {
    localStorage.setItem("items", JSON.stringify(items))
}

function diaryTemplate(obj) {
    return `
    <li class="js-list.item" id="${obj.id}">
            <p>Дата: ${obj.date}</p>
            <p>Назва: ${obj.title}</p>
            <p>Опис: ${obj.description}</p>
            <button type="button" data-type="delete">Видалити</button>
        </li>`
}

function diariesTemplate(arr) {
    return arr.map(diaryTemplate).join("")
}

refs.list.innerHTML = diariesTemplate(items)

refs.form.addEventListener("submit", e => {
    e.preventDefault()
    const id = Date.now()
    const formData = new FormData(refs.form);
    const diaryInfo = Object.fromEntries(formData.entries());
    const isEmpty = Array.from(refs.formControl).some(input => input.value.trim() === "");

    if (isEmpty) {
        refs.form.insertAdjacentHTML("beforeend", `<p>Заповніть всі поля</p>`);
        return;
    } 

    const newDiary = {
        id: id,
        date: diaryInfo.date,
        title: diaryInfo.title,
        description: diaryInfo.description,
    }

    items.unshift(newDiary);

    const markup = diaryTemplate(newDiary);
    refs.list.insertAdjacentHTML("afterbegin", markup);
    saveToLocalStorage();
    
    refs.form.reset();
    refs.form.querySelector(".error-msg")?.remove();
}
)

refs.list.addEventListener("click", e => {
    e.preventDefault()

    if (e.target.dataset.type === "delete") {
        const li = e.target.closest("li");
        const id = Number(li.id);
        items = items.filter(item => item.id !== id);
        li.remove()
        saveToLocalStorage()
    }
})


refs.filterSelect.addEventListener("change", e => {

    const filterValue = refs.filterSelect.value;

    const sortedItems = [...items];

    if (filterValue === "new-to-old") {
        sortedItems.sort((a, b) => new Date(b.date) - new Date(a.date))
    } else if (filterValue === "old-to-new") {
        sortedItems.sort((a, b) => new Date(a.date) - new Date(b.date))
    }

    refs.list.innerHTML = sortedItems.map(d => diaryTemplate(d)).join("");
    saveToLocalStorage()
})
