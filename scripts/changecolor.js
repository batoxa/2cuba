function changeColor(color) {
    const switchColorItems = [...document.getElementsByClassName("main-color")];
    switchColorItems.forEach((el) => {
        el.style.color = color;
    });
}

// function clickRed() {
//     const switchColorItems = [...document.getElementsByClassName("main-color")];
//     switchColorItems.forEach((el) => {
//         el.classList.add("main-color-red");
//         el.classList.remove("main-color-blue");
//     });
// }
// function clickRed() {
//     const switchColorItems = [...document.getElementsByClassName("main-color")];
//     console.log(switchColorItems.length);
//     switchColorItems.forEach((el) => {
//         el.style = "background-color: darkred";
//     });
// }
