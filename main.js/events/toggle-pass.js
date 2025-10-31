const refs = {
    showBtn: document.querySelector(".showPassBtn")
}

document.querySelector(".showPassBtn").addEventListener("click", e => {
    e.preventDefault()
    const value = document.querySelector("#pass");
    value.type = value.type === "password" ? "text" : "password";
    refs.showBtn.textContent = value.type === "password" ? "👁 Показати" : "🚫 Сховати"
})