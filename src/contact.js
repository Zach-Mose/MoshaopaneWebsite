//Contact us form validation
const form = document.getElementById('form');
var fullname = document.getElementById('fullname');
var contact = document.getElementById('contact');
var email = document.getElementById('email');
var message2 = document.getElementById('message2');


form.addEventListener('submit', e => {
  e.preventDefault();  
  checkInputs();  
  //document.getElementById('form').submit();
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
      
    if(contactValue === '') {
      setErrorFor(contact, '*contact cannot be blank');
    } else if (!iscontact(contactValue)){
      setErrorFor(contact, '*Not a valid contact');
    } else {
      setSuccessFor(contact);

        if(emailValue === '') {
          setErrorFor(email, '*Email cannot be blank');
        } else if (!isemail(emailValue)) {
          setErrorFor(email, '*Not a valid email');
        } else {
          setSuccessFor(email);

            if(message2Value === '') {
              setErrorFor(message2, '*message cannot be blank');
            } else if (!ismessage2(message2Value)) {
              setErrorFor(message2, '*No use of symbols, numbers or special characters');
            } else {
              setSuccessFor(message2);  
              document.getElementById('form').submit();
            }
        }
    }
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