document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

let button1=document.getElementById('download-cv');
button1.addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/cv.html";
})
 

let button2=document.getElementById('read-more');
button2.addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/readmore.html";
})


function handleSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  alert(`Thank you, ${name}. Your message has been received!`);
  
   
  document.getElementById('contact-form').reset();
};




