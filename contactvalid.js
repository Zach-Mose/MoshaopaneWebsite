    // Darkmode 

    const options = {
      bottom: '20px', // default: '32px'
      right: 'unset', // default: '32px'
      left: '1px', // default: 'unset'
      time: '0.5s', // default: '0.3s'
      mixColor: '#fff', // default: '#fff'
      backgroundColor: '#fff',  // default: '#fff'
      buttonColorDark: '#100f2c',  // default: '#100f2c'
      buttonColorLight: '#fff', // default: '#fff'
      saveInCookies: true, // default: true,
      label: '🌓', // default: ''
      
    }
    
    const darkmode = new Darkmode(options);
    darkmode.showWidget();
 
 
 //Contact us form validation
 const form = document.getElementById('form');
 var fullname = document.getElementById('fullname');
 var contact = document.getElementById('contact');
 var email = document.getElementById('email');
 var message2 = document.getElementById('message2');
 
 
 form.addEventListener('submit', e => {
   e.preventDefault();
   
   checkInputs();
 });
 
 function checkInputs() {
 
   // trim to remove the whitespaces
   const fullnameValue = fullname.value.trim();
   const contactValue = contact.value.trim();
   const emailValue = email.value.trim();
   const message2Value = message2.value.trim();
  
   
   
   if(fullnameValue === '') {
         setErrorFor(fullname, '*full name cannot be blank');
     } else if (!isfullname(fullnameValue)){
         setErrorFor(fullname, '*Not a valid full name');
   } else {
     setSuccessFor(fullname);
     }
     
   
   if(contactValue === '') {
         setErrorFor(contact, '*contact cannot be blank');
     } else if (!iscontact(contactValue)){
         setErrorFor(contact, '*Not a valid contact');
   } else {
     setSuccessFor(contact);
     }
     
   
 
   if(emailValue === '') {
     setErrorFor(email, '*Email cannot be blank');
   } else if (!isemail(emailValue)) {
     setErrorFor(email, '*Not a valid email');
   } else {
     setSuccessFor(email);
     }
     
 
   if(message2Value === '') {
     setErrorFor(message2, '*message cannot be blank');
   } else if (!ismessage2(message2Value)) {
     setErrorFor(message2, '*No use of symbols, numbers or special characters');
   } else {
     setSuccessFor(message2);
     
     }
     
     
 }
 
 function setErrorFor(input, message) {
   const formControl = input.parentElement;
   const small = formControl.querySelector('small');
   formControl.className = 'form-control error';
   small.innerText = message;
 }
 
 
 
 function setSuccessFor(input) {
   const formControl = input.parentElement;
   formControl.className = 'form-control success';
 }
 
 
 
 function isfullname(fullname){
     return /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/.test(fullname) ; 
 
 }
 
 
 
 function isemail(email) {
   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
 }
 
 
 function iscontact(contact)
 {
     return /^[0][6-9]\d{8}$/.test(contact); 
 
 }
 
 
 function ismessage2(message2){
     return /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/.test(message2) ; 
 
 }
 

 // Back to top button 

   
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t*t + b;
  t -= 2;
  return c/2*(t*t*t + 2) + b;
};


function setNavigation() {
  let current_location = location.pathname.split('/')[1];
  if (current_location === "") return;
  let menu_items = document.querySelector("header").getElementsByTagName("a");
  for (let i = 0, len = menu_items.length; i < len; i++) {
    if (menu_items[i].getAttribute("href").indexOf(current_location) !== -1) {
      menu_items[i].className = "active";
    }
  }
}
setNavigation()