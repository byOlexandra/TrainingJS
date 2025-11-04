// const refs = {
//     dropZone: document.querySelector("#dropzone"),
//     result: document.querySelector("#result")
// }

// refs.dropZone.addEventListener("dragover", e => {
//     e.preventDefault()
//     refs.dropZone.classList.add("active")
// })

// refs.dropZone.addEventListener("dragover", e => {
//     refs.dropZone.classList.remove("active")
// })

// refs.dropZone.addEventListener("drop", e => {
//     e.preventDefault()
//     refs.dropZone.classList.remove("active")

//     const files = e.dataTransfer.files;
//     if (files.length > 0) {
//         const file = files[0];
//         refs.result.textContent = `Файл: ${file.name}`
//         console.log("FILE");
        
//     }
// })

const form = document.querySelector(".form-LS");
const localStorageKey = "message"

form.elements.message.value = localStorage.getItem(localStorageKey) ?? "";

form.addEventListener("input", e => {
    localStorage.setItem(localStorageKey, e.target.value)
})

form.addEventListener("submit", e => {
    e.preventDefault()
    localStorage.removeItem(localStorageKey);
    form.reset()
})