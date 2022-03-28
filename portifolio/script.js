const mediaQuery = window.matchMedia('(max-width:1024px)');
const smallScreen = window.matchMedia('(max-width:540px)');

if (mediaQuery.matches) {
    const rightHeader = document.querySelector('#nav');

    while (rightHeader.firstChild) {
        rightHeader.removeChild(rightHeader.firstChild);
    }
}