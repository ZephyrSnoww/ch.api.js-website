const header = document.getElementById("header");
const root = document.documentElement;

const scrollUpButton = document.getElementById("scroll-up-button");
const scrollDownButton = document.getElementById("scroll-down-button");

let setRoot = (variable, value) => {
    root.style.setProperty(variable, value);
}

let lastScrollTop = 0;

header.onmousemove = (event) => {
    let mouseX = event.pageX;
    let mouseY = event.pageY;
    let width = header.clientWidth;
    let height = header.clientHeight;

    setRoot("--header-rotation-x", -(45 * ((mouseY - (height / 2)) / height)) + "deg");
    setRoot("--header-rotation-y", (45 * ((mouseX - (width / 2)) / width)) + "deg");
}

let preventDefault = (event) => { event.preventDefault(); }

let supportsPassive = true;
let keys = {37: 1, 38: 1, 39: 1, 40: 1};
let wheelOpt = supportsPassive ? { passive: false } : false;
let wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

let preventDefaultForScrollKeys = (event) => {
  if (keys[event.keyCode]) {
    preventDefault(event);
    return false;
  }
}

// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}
  
// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

disableScroll();

scrollDownButton.onclick = () => {
    if (window.scrollY >= document.body.scrollHeight - (window.innerHeight * 2.5)) {
        scrollDownButton.className = "scroll-button hidden";
    }
    if (window.scrollY <= window.innerHeight) {
        scrollUpButton.className = "scroll-button";
    }
    window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: "smooth"
    });
}

scrollUpButton.onclick = () => {
    if (window.scrollY <= window.innerHeight * 1.5) {
        scrollUpButton.className = "scroll-button hidden";
    }
    if (window.scrollY < document.body.scrollHeight) {
        scrollDownButton.className = "scroll-button";
    }
    window.scrollBy({
        top: -window.innerHeight,
        left: 0,
        behavior: "smooth"
    });
}