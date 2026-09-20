let clickMenu = function() {
    const nav = document.querySelector("#navbar");
    const items = document.querySelector("#menu-overlay");
    const botton = document.querySelector("#menu-button");

    if (items.style.display === 'none' || items.style.display === "") {
        items.style.display = 'block';
        botton.innerHTML = "X";
    } else {
        items.style.display = 'none';
        botton.innerHTML = "☰";
    }

    if (items.style.display === 'block') {
        nav.style.position = 'fixed';
    } else {
        nav.style.position = 'static';
    }
};