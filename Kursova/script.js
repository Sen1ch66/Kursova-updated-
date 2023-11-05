const footer = document.querySelector("footer");

function isFooterVisible() {
  const footerPosition = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  
  return footerPosition.top - windowHeight <= 0;
}


function showFooter() {
  footer.style.opacity = "1";
}


window.addEventListener("scroll", () => {
  if (isFooterVisible()) {
    showFooter();
  }
});

const showButton = document.getElementById("showButton");
const elementToFade = document.getElementById("second-part");
function fadeInElement() {
  elementToFade.style.opacity = "1";
  elementToFade.classList.remove("hidden");
}
showButton.addEventListener("click", () => {
  fadeInElement();
});

const hideButton = document.getElementById("showButton");
showButton.addEventListener("click", () => {
    hideButton.style.display = "none"; 
});

const hiddenButton = document.getElementById("hiddenButton");
const diskleimer = document.getElementById("diskleimer");

hiddenButton.addEventListener("click", function() {
    diskleimer.style.display = "none";
});




