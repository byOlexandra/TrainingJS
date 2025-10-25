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
    list: document.querySelector(".js-items")
};

function toDoTemplate(obj) {
    const id = Math.round(Math.random() * 1000);
    return `
            <li class="item">
            <h3>${obj["input-value"]}</h3>
            <h5>${obj.priority}</h5>
            <p class="item-desc">${obj.description}</p>
            <img src="${obj.image}" />
            <button data-type="show">SHOW MORE</button>
            <button data-type="delete">DELETE</button>
        </li>`
}
function toDosTemplate(arr) {
    return arr.map(toDoTemplate).join("");
}

refs.form.addEventListener("submit", e => {
    e.preventDefault();

    const formData = new FormData(refs.form);
    const toDoInfo = Object.fromEntries(formData.entries());
    console.log(toDoInfo);

    toDo.unshift(toDoInfo); 
    const markup = toDoTemplate(toDoInfo);
    refs.list.insertAdjacentHTML("afterbegin", markup);

    refs.form.reset()
})