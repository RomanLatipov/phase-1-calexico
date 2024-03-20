async function getMenu() {
    const response = await fetch("http://localhost:3000/menu");
    const menu = await response.json();
    menu.forEach(e => {
        const p = document.createElement("p");
        p.textContent = e.name;
        p.setAttribute("id", e.id);
        document.querySelector("#menu-items").append(p);
    })
    displayItems(menu[0]);
    // let currentItem;
    // let cart = [];
    let numInCart = 0;
    document.querySelector("#menu-items").addEventListener("click", event => {
        event.preventDefault();
        // currentItem = menu[event.target.id-1];
        displayItems(menu[event.target.id-1]);
       
    })
    document.querySelector("form").addEventListener("submit", event => {
        event.preventDefault();
        // cart.push(currentItem);
        numInCart += parseInt(document.querySelector("#cart-amount").value);
        document.querySelector("#number-in-cart").textContent = numInCart;
    })
}
const displayItems = (item) => {
     // console.log(event.target.id);
        // console.log(menu[event.target.id-1]);
        document.querySelector("#dish-image").src =item.image;
        document.querySelector("#dish-name").textContent = item.name;
        document.querySelector("#dish-description").textContent = item.description;
        document.querySelector("#dish-price").textContent = item.price;
}
getMenu();
