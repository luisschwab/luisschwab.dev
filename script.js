/*
[1] Make JS know when *any* media query is active;
[2] Select all childs of #header-right-container and remove them;
[3] Add hamburger menu in their place;
[4] When clicked, create a new div that fills the whole screen with the menu
[5] Make a nice transition
*/

//HAMBURGER MENU
const mediaQuery = window.matchMedia('(max-width:1024px)');
const smallScreen = window.matchMedia('(max-width:540px)');



console.log(smallScreen);

if (mediaQuery.matches) {
    const rightHeader = document.querySelector('#header-right-container');

    while (rightHeader.firstChild) {
        rightHeader.removeChild(rightHeader.firstChild);
    }

    const hamButton = document.createElement('button');
    hamButton.classList.add('ham-button');

    if (smallScreen.matches) {
        hamButton.innerHTML = '<img src = "assets/img/icon.png" style="max-height: 30px; margin: 20px; display: flex" />';
    }
    else {
        hamButton.innerHTML = '<img src = "assets/img/icon.png" style="max-height: 50px; margin: 20px; display: flex" />';
    }
    rightHeader.appendChild(hamButton);

    //add event listener to toggle menu
    hamButton.addEventListener('click', () => {
        const toggle = 1;
    
        const mobileMenu = document.createElement('div');
        mobileMenu.classList.add('mobile-menu');
        rightHeader.appendChild(mobileMenu);

        const blogOption = document.createElement('div');
        const powOption = document.createElement('div');
        const reachMeOption = document.createElement('div');

        blogOption.classList.add('mobile-menu-option');
        powOption.classList.add('mobile-menu-option');
        reachMeOption.classList.add('mobile-menu-option');

        blogOption.textContent = "BLOG";
        powOption.textContent = "PROOF OF WORK";
        reachMeOption.textContent = "REACH ME";

        mobileMenu.appendChild(blogOption);
        mobileMenu.appendChild(powOption);
        mobileMenu.appendChild(reachMeOption);

    });


}

