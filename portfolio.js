document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

let button1=document.getElementById('#download-cv');
button1.addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/piyush%20portfolio/cv.html";
})


let button2=document.getElementById('#read-more');
button2.addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/piyush%20portfolio/readmore.html";
})

let button3=document.getElementById('#send-msg');
button3.addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/piyush%20portfolio/sending.html";
})






