// JavaScript code to create the menu bar here
// Create an empty div element to hold the menu bar
window.onload = function(){
    let menuBar = document.createElement("div");
    menuBar.id = "menu-bar";
    // other code here



// Create an unordered list for the menu items
let menuList = document.createElement("ul");

// Create an array of menu items
let menuItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "Contact", url: "/contact" }
];

// Loop through the array to create the menu items
for (let i = 0; i < menuItems.length; i++) {
    let menuItem = document.createElement("li");
    let link = document.createElement("a");
    link.href = menuItems[i].url;
    link.innerText = menuItems[i].name;
    menuItem.appendChild(link);
    menuList.appendChild(menuItem);
}

// Add the unordered list to the menu bar div
menuBar.appendChild(menuList);

// Append the menu bar to the body of the document
document.body.appendChild(menuBar);
}