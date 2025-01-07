document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});



// document.getElementById("cv-button").addEventListener("click", function () {
//   window.open("portfolio 2/images/piyushcv.jpg", "_blank");
// });









function openLink(url) {
  window.open(url, "_blank"); // for opening the URL in a new tab
}

const images = document.querySelectorAll(".image-container img");
const textBlocks = document.querySelectorAll(".text-block");
  
images.forEach((image) => {
  image.addEventListener("mouseover", function () {
    // Hide all text blocks
    textBlocks.forEach((block) => block.classList.remove("active"));

    // Show the associated text block
    const targetId = this.getAttribute("data-target");
    document.getElementById(targetId).classList.add("active");
  });
});

// Initially show the first text block
document.getElementById("text1").classList.add("active");

function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  alert(`Thank you, ${name}. Your message has been received!`);

  document.getElementById("contact-form").reset();
}

let mybutton = document.getElementById("scrollToTopBtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
