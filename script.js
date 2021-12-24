const header = document.getElementById("header");
const root = document.documentElement;

let setRoot = (variable, value) => {
    root.style.setProperty(variable, value);
}

header.onmousemove = (event) => {
    let mouseX = event.pageX;
    let mouseY = event.pageY;
    let width = header.clientWidth;
    let height = header.clientHeight;

    // console.log(`\nX: ${event.pageX} / ${header.clientWidth}\nY: ${event.pageY} / (${header.clientHeight})`);
    // console.log((mouseX - (width/2)) / width);

    setRoot("--header-rotation-x", -(45 * ((mouseY - (height / 2)) / height)) + "deg");
    setRoot("--header-rotation-y", (45 * ((mouseX - (width / 2)) / width)) + "deg");
}