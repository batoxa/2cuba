function changeColor(color) {
    const switchColorItems = [...document.getElementsByClassName("main-color")];
    switchColorItems.forEach((el) => {
        el.style.color = color;
    });
}