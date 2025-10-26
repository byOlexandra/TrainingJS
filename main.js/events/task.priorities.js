const toDo = [
{
    id: 1715087635763,
    title: "Fix bug",
    description: "Fix critical layout issue in mobile view",
    image: "https://example.com/bug.jpg",
    priority: "high"
},
{
    id: 1715087635764,
    title: "Add dark mode",
    description: "Implement dark mode for better UX at night",
    image: "https://example.com/darkmode.jpg",
    priority: "medium"
},
{
    id: 1715087635765,
    title: "Update README",
    description: "Add setup instructions and usage examples",
    image: "https://example.com/docs.jpg",
    priority: "low",
},
{
    id: 1715087635766,
    title: "Optimize images",
    description: "Compress and optimize all website images for faster load",
    image: "https://example.com/optimize.jpg",
    priority: "medium"
},
{
    id: 1715087635767,
    title: "Fix API response",
    description: "Resolve mismatch between backend and frontend data structures",
    image: "https://example.com/api.jpg",
    priority: "high"
},
{
    id: 1715087635768,
    title: "Add search feature",
    description: "Implement global search for products and articles",
    image: "https://example.com/search.jpg",
    priority: "high"
},
{
    id: 1715087635769,
    title: "Improve accessibility",
    description: "Add ARIA labels and keyboard navigation support",
    image: "https://example.com/accessibility.jpg",
    priority: "medium"
},
{
    id: 1715087635770,
    title: "Refactor codebase",
    description: "Clean up old code and improve structure for maintainability",
    image: "https://example.com/refactor.jpg",
    priority: "low"
},
{
    id: 1715087635771,
    title: "Integrate analytics",
    description: "Add Google Analytics to track user interactions",
    image: "https://example.com/analytics.jpg",
    priority: "medium"
},
{
    id: 1715087635772,
    title: "Deploy to production",
    description: "Finalize testing and deploy the latest version",
    image: "https://example.com/deploy.jpg",
    priority: "high"
}
]

const refs = {
    form: document.querySelector(".js-form"),
    input: document.querySelector(".form-control"),
    list: document.querySelector(".js-items"),
    modalOverlay: document.querySelector(".modal-overlay"),
    modalClose: document.querySelector(".modal-close"),
    modalContent: document.querySelector("#modal-content"),
    box: document.querySelector(".box")
};

let items = JSON.parse(localStorage.getItem("items")) || [];

function toDoTemplate(obj) {
    return `
            <li class="item" data-id="${obj.id}">
            <div class="content-container">
                <h3>${obj.title}</h3>
                <h5>${obj.priority}</h5>
                <p class="item-desc">${obj.description}</p>
                <img src="${obj.image}" />
            </div>
            <div class="btns">
                <button data-type="show">SHOW MORE</button>
                <button data-type="delete">DELETE</button>
            </div>
        </li>`
}
function toDosTemplate(arr) {
    return arr.map(toDoTemplate).join("");
}

function saveToLocalStorage() {
    localStorage.setItem("items", JSON.stringify(items));
}

refs.list.innerHTML = toDosTemplate(items);

refs.form.addEventListener("submit", e => {
    e.preventDefault();

    const formData = new FormData(refs.form);
    const toDoInfo = Object.fromEntries(formData.entries());
    console.log(toDoInfo);

    const newTask = {
        id: Date.now(),
        title: toDoInfo["input-value"],
        description: toDoInfo.description.trim(),
        image: toDoInfo.image.trim(),
        priority: toDoInfo.priority,
    }

    items.unshift(newTask); 
    const markup = toDoTemplate(newTask);
    refs.list.insertAdjacentHTML("afterbegin", markup);
    saveToLocalStorage()

    refs.form.reset()
})

toDosTemplate(items)

refs.list.addEventListener("click", (e) => {
    if (e.target.dataset.type === "delete") {
        e.preventDefault();
        const li = e.target.closest("li");
        const id = Number(li.dataset.id); // якщо треба видаляти з items
        li.remove();

        // Видаляємо з масиву items і зберігаємо в localStorage
        items = items.filter(item => item.id !== id);
        saveToLocalStorage();
    }
});

toDosTemplate(items)


refs.list.addEventListener('click', (e) => {
    if (e.target.dataset.type === 'show') {
        const li = e.target.closest('li');
        const title = li.querySelector('h3').textContent;
        const desc = li.querySelector('.item-desc').textContent;

        refs.modalContent.innerHTML = `<strong>${title}</strong><p>${desc}</p>`;
        refs.modalOverlay.classList.remove('hidden');
    }
});

refs.modalClose.addEventListener('click', (e) => {
    refs.modalOverlay.classList.add('hidden');
});

refs.modalOverlay.addEventListener('click', (e) => {
    if (e.target === refs.modalOverlay) {
        refs.modalOverlay.classList.add('hidden');
    }
});

const position = {
    top: 100,
    left: 100,
}

refs.box.addEventListener("click", () => {

    position.left += 10;
    position.top += 10;

    refs.box.style.left = `${position.left}px`;
    refs.box.style.top = `${position.top}px`;
})