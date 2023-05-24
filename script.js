

$(document).ready(function () {
  $('.carosal').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: 'linear',
    adaptiveHeight: true,
    arrows: false,

  });
});





// form



const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const texts = document.getElementById('text-area');
const div = document.querySelectorAll('.form-control');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();

});



function checkInputs() {
  // the values from input
    console.log('submited');
    username.value ? setSuccessFor(username) : setErrorFor(username, 'This field is required');
    texts.value ? setSuccessFor(texts) : setErrorFor(texts, 'This field is required');
    mobile.value ? setSuccessFor(mobile) : setErrorFor(mobile, 'This field is required');
   
    const emailValue = email.value.trim();
    if(emailValue === ''){
      setErrorFor(email, 'This field is required');
    }else if(!isEmail(emailValue)){
      setErrorFor(email, 'Please enter a valid email address!');
    }else{
      setSuccessFor(email);
    }


    var i = 0;
    for(i=0;i<div.length;i++){
      var element = div[i];
      console.log('shifa----'+i)
      var formclass = element.classList.contains('error');
      if(formclass){
      console.log('error');
      form.classList.add('error_found');
        break;
      }else {
        console.log('success');
        form.classList.remove('error_found');
      }
    }
    
    // success message
    
    var abc = form.classList.contains('error_found');
    if(!abc){
      alert('success');
    }
    
  
  


}




// onchange


function changeInputs(input) {
  // the values from input
  
    input.value ? setSuccessFor(input) : setErrorFor(input, 'This field is required');
    if(input.id=='email'){
      const emailValue = input.value.trim();
    if(emailValue === ''){
      setErrorFor(email, 'sdsThis field is required');
    }else if(!isEmail(emailValue)){
      setErrorFor(email, 'Please enter a valid email address!');
    }else{
      setSuccessFor(email);
    }
    }
  
}





function isEmail(email){
  return /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i.test(email);

}



function setErrorFor(input, message) {
  const formControl = input.parentElement;   //form-control
  const small = formControl.querySelector('small');
  // add error message inside small
  small.innerText = message;
  // add eror class
  formControl.className = 'form-control error';
  

}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success'
}



// const signup = document.querySelector('.signup');

// function sendMsg(e){
//   e.preventDefault();

  
// const name = document.querySelector('.name');
// const gmail = document.querySelector('.gmail');
// const msg = document.querySelector('.msg');

// Email.send({
//   SecureToken : "855e189f-860b-4e86-b2c9-2968b6103cef",
//   To : '255navaf@gmail.com',
//   From : gmail.value,
//   Subject : "Contact Form",
//   Body : msg.value,
// }).then(
// message => alert(message)
// );

// }


// function sendEmail() {
//   Email.send({
//     SecureToken: "<your generated token>",
//     To: 'recipient@example.com',
//     From: "sender@example.com",
//     Subject: "Test Email",
//     Body: "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>",
//     Attachments: [{
//       name : "smtp.png",
//       path : "https://…/smtp.png"
//     }]
//   }).then(
//     message => alert(message)
//   );
// }






// signup.addEventListener('submit', sendEmail);






