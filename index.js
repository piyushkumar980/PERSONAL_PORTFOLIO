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

// Function to detect if the browser is Edge
function isEdge() {
  return /Edg/.test(navigator.userAgent); // Edge has "Edg" in its userAgent string
}

// Add the 'edge' class if the browser is Edge
document.addEventListener("DOMContentLoaded", () => {
  if (isEdge()) {
    document.body.classList.add("edge");
  }
});











// Function to detect browser and display message if not Edge
function detectEdgeBrowser() {
  const userAgent = navigator.userAgent;

  // Check if the browser is not Microsoft Edge
  if (!userAgent.includes("Edg")) {
    // Create a notification element
    const warningMessage = document.createElement("div");
    warningMessage.style.position = "fixed";
    warningMessage.style.top = "0";
    warningMessage.style.left = "0";
    warningMessage.style.width = "100%";
    warningMessage.style.backgroundColor = "#f8d7da";
    warningMessage.style.color = "#721c24";
    warningMessage.style.padding = "10px";
    warningMessage.style.textAlign = "center";
    warningMessage.style.fontFamily = "Arial, sans-serif";
    warningMessage.style.zIndex = "9999";
    warningMessage.innerHTML = `
      <p>
        For the best experience, please open this site in 
        <a href="https://www.microsoft.com/edge" target="_blank" style="color: #004085; text-decoration: underline;">
          Microsoft Edge
        </a>.
      </p>
    `;
    
    // Append the warning message to the body
    document.body.appendChild(warningMessage);
  }
}

// Run the function to detect the browser when the page loads
window.onload = detectEdgeBrowser;

