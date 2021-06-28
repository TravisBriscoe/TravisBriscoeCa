// 
// Document variables
const aboutThisPageContent = document.querySelector('.welcome');
const aboutMeContent = document.querySelector('.about-me');
const myBusinessContent = document.querySelector('.my-business');
const myCredsContent = document.querySelector('.my-creds');
const portfolioContent = document.querySelector('.my-portfolio');
const contactMeContent = document.querySelector('.contact-me');

// 
// Link Variables
const aboutLink = document.querySelector('.about-this--link');
const aboutMeLink = document.querySelector('.about-me--link');
const myBusinessLink = document.querySelector('.my-business--link');
const credentialsLink = document.querySelector('.my-credentials--link');
const portfolioLink = document.querySelector('.my-portfolio--link');
const contactMeLink = document.querySelector('.contact-me--link');

// Alternating Text for Links
const aboutLinkText = document.querySelector('.nav__bar-replace-links--page');
const aboutMeLinkText = document.querySelector('.nav__bar-replace-links--about');
const myBusinessLinkText = document.querySelector('.nav__bar-replace-links--business');
const credentialsLinkText = document.querySelector('.nav__bar-replace-links--creds');
const portfolioLinkText = document.querySelector('.nav__bar-replace-links--port');
const contactMeLinkText = document.querySelector('.nav__bar-replace-links--contact');

//
// Form data variabls
// const inputName = document.querySelector('.contact-form-name');
// const inputEmail = document.querySelector('.contact-form-email');
// const inputTel = document.querySelector('.contact-form-tel');
// const inputSubject = document.querySelector('.contact-form-subject');
// const inputMsg = document.querySelector('.contact-form-msg');

//
// Menu State
let menuState = 'aboutThisPageContent';
aboutLink.classList.add('hidden');
aboutLinkText.classList.remove('hidden');

console.log(aboutMeLinkText)

//
// Helper Function
const pageHide = function(visiting, left) {
  if (left === 'aboutThisPageContent') { left = [aboutLink, aboutThisPageContent, aboutLinkText]; } 
  if (left === 'aboutMeContent') { left = [aboutMeLink, aboutMeContent, aboutMeLinkText]; }
  if (left === 'myBusinessContent') { left = [myBusinessLink, myBusinessContent, myBusinessLinkText]; }
  if (left === 'portfolioContent') { left = [portfolioLink, portfolioContent, portfolioLinkText]; }
  if (left === 'myCredsContent') { left = [credentialsLink, myCredsContent, credentialsLinkText]; }
  if (left === 'contactMeContent') { left = [contactMeLink, contactMeContent, contactMeLinkText]; }

  console.log(left);
  console.log(visiting);

  if (visiting === 'aboutThisPageContent' && left[0] !== aboutLink) {
    aboutThisPageContent.classList.remove('hidden');
    aboutLinkText.classList.remove('hidden');
    aboutLink.classList.add('hidden');
    left[0].classList.remove('hidden');
    left[1].classList.add('hidden');
    left[2].classList.add('hidden');
  } else if (visiting === 'aboutMeContent' && left[0] !== aboutMeLink) {
    aboutMeLinkText.classList.remove('hidden');
    aboutMeContent.classList.remove('hidden');
    aboutMeLink.classList.add('hidden');
    left[0].classList.remove('hidden');
    left[1].classList.add('hidden');
    left[2].classList.add('hidden');
  } else if (visiting === 'myBusinessContent' && left[0] !== myBusinessLink) {
    myBusinessContent.classList.remove('hidden');
    myBusinessLinkText.classList.remove('hidden');
    myBusinessLink.classList.add('hidden');
    left[0].classList.remove('hidden');
    left[1].classList.add('hidden');
    left[2].classList.add('hidden');
  } else if (visiting === 'portfolioContent' && left[0] !== portfolioLink) {
    portfolioContent.classList.remove('hidden');
    portfolioLinkText.classList.remove('hidden');
    portfolioLink.classList.add('hidden');
    left[0].classList.remove('hidden');
    left[1].classList.add('hidden');
    left[2].classList.add('hidden');
  } else if (visiting === 'myCredsContent' && left[0] !== credentialsLink) {
    myCredsContent.classList.remove('hidden');
    credentialsLinkText.classList.remove('hidden');
    credentialsLink.classList.add('hidden');
    left[0].classList.remove('hidden');
    left[1].classList.add('hidden');
    left[2].classList.add('hidden');
  } else if (visiting === 'contactMeContent' && left[0] !== contactMeLink) {
    contactMeContent.classList.remove('hidden');
    contactMeLinkText.classList.remove('hidden');
    contactMeLink.classList.add('hidden');
    left[0].classList.remove('hidden');
    left[1].classList.add('hidden');
    left[2].classList.add('hidden');
  }
}

//
// Click handlers
aboutLink.addEventListener('click', () => {
  pageHide('aboutThisPageContent', menuState)
  console.log(menuState)
  menuState = 'aboutThisPageContent'
});

aboutMeLink.addEventListener('click', function() {
  pageHide('aboutMeContent', menuState);
  console.log(menuState)
  menuState = 'aboutMeContent'
});


myBusinessLink.addEventListener('click', function() {
  pageHide('myBusinessContent', menuState)
  console.log(menuState)
  menuState = 'myBusinessContent'
});

credentialsLink.addEventListener('click', function() {
  pageHide('myCredsContent', menuState)
  console.log(menuState)
  menuState = 'myCredsContent'
});

portfolioLink.addEventListener('click', function() {
  pageHide('portfolioContent', menuState)
  console.log(menuState)
  menuState = 'portfolioContent'
});

contactMeLink.addEventListener('click', function() {
  pageHide('contactMeContent', menuState)
  console.log(menuState)
  menuState = 'contactMeContent'
});