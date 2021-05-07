////////////////////////////////////////////////////////////////////////////////
// GLOBAL VARIABLES
////////////////////////////////////////////////////////////////////////////////

const fadeUp = "fade-up";


//============================================================================//
//============================ PAGE SPLASH ===================================//
//============================================================================//
// 1. Fade up logo
const logoH3 = document.querySelectorAll('.splash-screen .block-logo .block-text h3')[0];
const logoH1 = document.querySelectorAll('.splash-screen .block-logo .block-text h1')[0];

setTimeout(function() {
  logoH3.classList.add(fadeUp);
  logoH1.classList.add(fadeUp);
}, 800);

//==========================================================================///
// 3. display intro content and avatar



////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// ELEMENT EVENT //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// BROWSER EVENT //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// toggles scroll event to manipulate Elements
window.addEventListener("scroll", function(event) {
    // store scrollY value
    let scrollTopVal = this.scrollY;

    // check if tablet then use transform scroll
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		if (isMobile) {
      console.log("Mobile : true");
		} else {
      smoothScrollMain(scrollTopVal);
    }

    //show elements when certain postion is reached
    const sectAbout = document.querySelectorAll('.sect-about')[0];
    const sectWorks = document.querySelectorAll('.sect-works')[0];
    const sectSkills = document.querySelectorAll('.sect-skills')[0];
    const sectEdu = document.querySelectorAll('.sect-education')[0];
    const sectContact = document.querySelectorAll('.sect-contact')[0];

    if (isElementVisible(sectAbout)) {
      const sectAboutTitle = document.querySelectorAll('.sect-about .title')[0];
      const sectAboutSlogan = document.querySelectorAll('.sect-about .slogan')[0];
      const sectAboutPara = document.querySelectorAll('.sect-about .para')[0];
      const sectAboutParaBlockCurrent = document.querySelectorAll('.sect-about .para .block-current')[0];

      if (isElementVisible(sectAboutTitle)) {
        animateMultipleEle(5, true, up, '.sect-about .title h1 span');
      }
      if (isElementVisible(sectAboutSlogan)) {
        animateMultipleEle(1, true, visible, '.sect-about .slogan div.inner');
      }
      if (isElementVisible(sectAboutPara)) {
        animateMultipleEle(1, true, visible, '.sect-about .para div.inner');
        animateMultipleEle(3, true, up, '.sect-about .block-current div.text');
        animateMultipleEle(1, true, revealed, '.sect-about .profile .inner');
      }
    } else if (isElementVisible(sectWorks)) {
      const sectWorksTitle = document.querySelectorAll('.sect-works .title')[0];
      const sectWorksSlogan = document.querySelectorAll('.sect-works .slogan')[0];
      const sectWorksItemSec = document.querySelectorAll('.sect-works .item:nth-child(2)')[0];
      const sectWorksItemThird = document.querySelectorAll('.sect-works .item:nth-child(3)')[0];

      if (isElementVisible(sectWorksTitle)) {
        animateMultipleEle(5, true, up, '.sect-works .title h1 span');
      }
      if (isElementVisible(sectWorksSlogan)) {
        animateMultipleEle(1, true, visible, '.sect-works .slogan div.inner');
      }

      sectWorksItemSec.style.transform = "translateY(" + scrollTopVal / 1000 + '%)';
      sectWorksItemThird.style.transform = "translateY(" + scrollTopVal / 1000 + '%)';
      console.log(calcScrollVal(scrollTopVal));
    } else if (isElementVisible(sectSkills)) {
      const sectSkillsTitle = document.querySelectorAll('.sect-skills .title')[0];
      const sectSkillsSlogan = document.querySelectorAll('.sect-skills .slogan')[0];
      const sectSkillsCards = document.querySelectorAll('.sect-skills .card')[0];

      if (isElementVisible(sectSkillsTitle)) {
        animateMultipleEle(6, true, up, '.sect-skills .title h1 span');
      }
      if (isElementVisible(sectSkillsCards)) {
        animateMultipleEle(4, false, notRotate, '.sect-skills .card');
      }
      if (isElementVisible(sectSkillsSlogan)) {
        animateMultipleEle(1, true, visible, '.sect-skills .slogan div.inner');
      }
    } else if (isElementVisible(sectEdu)) {
      const sectEduTitle = document.querySelectorAll('.sect-education .title')[0];
      const sectEduSlogan = document.querySelectorAll('.sect-education .slogan')[0];
      const sectEduPara = document.querySelectorAll('.sect-education .para')[0];
      const sectEduCourse = document.querySelectorAll('.sect-education .para')[0];

      if (isElementVisible(sectEduTitle)) {
        animateMultipleEle(9, true, up, '.sect-education .title h1 span');
      }
      if (isElementVisible(sectEduSlogan)) {
        animateMultipleEle(1, true, visible, '.sect-education .slogan div.inner');
      }
      if (isElementVisible(sectEduPara)) {
        animateMultipleEle(1, true, visible, '.sect-education .para div.inner');
      }
      if (isElementVisible(sectEduCourse)) {
        animateMultipleEle(1, true, revealed, '.bottom-bar .block-scroll');
      }
    } else if (isElementVisible(sectContact)) {
      const sectContactTitle = document.querySelectorAll('.sect-contact .title')[0];
      const sectContactSlogan = document.querySelectorAll('.sect-contact .slogan')[0];
      const sectContactPara = document.querySelectorAll('.sect-contact .para')[0];
      const sectContactSocialLi = document.querySelectorAll('.sect-contact .socials li')[0];

      if (isElementVisible(sectContactTitle)) {
        animateMultipleEle(7, true, up, '.sect-contact .title h1 span');
        animateMultipleEle(1, false, revealed, '.bottom-bar .block-scroll');
      }
      if (isElementVisible(sectContactSlogan)) {
        animateMultipleEle(1, true, visible, '.sect-contact .slogan div.inner');
      }
      if (isElementVisible(sectContactPara)) {
        animateMultipleEle(1, true, visible, '.sect-contact .para div.inner');
      }
      if (isElementVisible(sectContactSocialLi)) {
        animateMultipleEle(8, true, revealed, '.sect-contact .socials li');
      }
    } else {
      console.log('All Animated');
    }

}, false);




////////////////////////////////////////////////////////////////////////////////
////////////////////////////////FUNCTIONS///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////







////////////////////////////////////////////////////////////////////////////////
////////////////////////////////ANIMATION///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
