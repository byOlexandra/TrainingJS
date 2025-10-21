// const products = [
//     {
//     name: "Wireless Headphones",
//     price: 1299,
//     description: "Bluetooth 5.0, noise cancelling, 20h battery life",
//     image: "https://picsum.photos/id/180/300/200"
//     },
//     {
//     name: "Smartwatch Pro X",
//     price: 2499,
//     description: "Heart rate monitor, GPS, waterproof",
//     image: "https://picsum.photos/id/1060/300/200"
//     },
//     {
//     name: "Mechanical Keyboard RGB",
//     price: 1899,
//     description: "Blue switches, customizable lighting, USB-C",
//     image: "https://picsum.photos/id/1011/300/200"
//     },
//     {
//     name: "4K Action Camera",
//     price: 3199,
//     description: "Wide-angle lens, 4K video recording, waterproof case",
//     image: "https://picsum.photos/id/1015/300/200"
//     }
// ];
// console.log(products);

// const container = document.createElement("div");
// container.classList.add("container");
// document.body.appendChild(container);

// for (const product of products) {
//     const card = document.createElement("div");
//     card.classList.add("product");
//     const img = document.createElement("img");
//     const title = document.createElement("h2");
//     const text = document.createElement("p");
//     const span = document.createElement("span");
//     const btn = document.createElement("button");
//     img.src = product.image;
//     img.alt = product.name;
//     title.textContent = product.name;
//     text.textContent = product.description;
//     span.textContent = product.price;
//     btn.textContent = "Add To Cart";
//     card.append(img, title, text, span, btn);
//     container.appendChild(card);
// }



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const tasks = [
//     { title: "Buy groceries", completed: false },
//     { title: "Read a book", completed: true },
//     { title: "Walk the dog", completed: false },
//     { title: "Learn DOM manipulation", completed: false }
// ];
// const div = document.createElement("div");
// div.classList.add("todo-list");
// document.body.appendChild(div)

// for (const task of tasks) {
//     const div2 = document.createElement("div");
//     div2.classList.add("task");
//     const input = document.createElement("input");
//     input.type = "checkbox";
//     input.checked = task.completed;
//     const span = document.createElement("span");
//     span.textContent = task.title;
//     const btn = document.createElement("button");
//     btn.textContent = "Delete";
//     input.addEventListener("change", () => {
//         input.classList.toggle("completed");
//     });
//     btn.addEventListener("click", () => {
//         div2.remove()
//     })
//     div2.append(input, span, btn)
//     div.appendChild(div2);
// }



