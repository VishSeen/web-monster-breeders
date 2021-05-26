////////////////////////////////////////////////////////////////////////////////
// GLOBAL VARIABLES
////////////////////////////////////////////////////////////////////////////////
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const fadeUp = "fade-up";
const hide = "hide";


const blockLeftWidth = 50;

var blockImageContentHeight = 45; /** TO CHANGE FOR MEDIA QUERY VAL */
if (isMobile != true) {
    blockImageContentHeight = 75;
}



///////////////////////////////////////////////////////////////////////////////


//============================================================================//
//============================ PAGE SPLASH ===================================//
//============================================================================//
// 1. BlockLeft width set to 100vw
const blockImageContent = document.getElementsByClassName('block-image-content')[0];
blockImageContent.style.height = 0;

const blockLeft = document.getElementsByClassName('block-left')[0];
blockLeft.style.width = 100 + 'vw';


const logoH1 = document.querySelectorAll('.block-logo .block-text h1')[0];
// 2. Logo fades up
setTimeout(() => {
    const logoH3 = document.querySelectorAll('.block-logo h3')[0];

    logoH3.classList.add(fadeUp);
    logoH1.classList.add(fadeUp);
}, 1000);


// 3. BlockLeft width 50vw
setTimeout(() => {
    if (isMobile != true) {
        blockLeft.style.width = blockLeftWidth + 'vw';
    }

    blockImageContent.style.display = 'block';
}, 2500);


// 4. Fade navigations
setTimeout(() => {
    const blockNav = document.getElementsByClassName('bottom-bar')[0];
    const topBar = document.getElementsByClassName('top-bar')[0];

    blockNav.classList.remove(hide);
    topBar.classList.remove(hide);
}, 2500);


// 5. Block image heights increases
setTimeout(() => {
    blockImageContent.style.height = blockImageContentHeight + 'vh';

    if (isMobile != true) {
        const blockLogo = document.querySelectorAll('.block-left .block-logo')[0];
        blockLogo.style.marginRight = '20%';

        // blockLogo.style.justifySelf = 'start';
    }
}, 3000);

// 6. BlockLogo h1 reduce size  
setTimeout(() => {
    let textSize = parseInt(window.getComputedStyle(logoH1).fontSize);
    // let valToSub = parseInt(window.getComputedStyle(blockLeft).padding);
    let newSize = textSize - 50;

    logoH1.style.transition = 'all 1s ease-out';
    if (isMobile != true) {
        logoH1.style.fontSize = newSize + "px";
    }
}, 3000);



////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// ELEMENT EVENT //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// BROWSER EVENT //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////
////////////////////////////////FUNCTIONS///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////