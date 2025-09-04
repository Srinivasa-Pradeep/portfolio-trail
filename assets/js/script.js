'use strict';

// element toggle function
const elementToggleFunc = (elem) => elem.classList.toggle("active");

// sidebar toggle
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));

// contact form
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input =>
  input.addEventListener("input", () => {
    formBtn.disabled = !form.checkValidity();
  })
);

// initialize EmailJS
(function() {
  emailjs.init("aE0ve_-NMQcL7dNbR"); // your public key
})();

// handle form submit
form.addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_wdqz08h", "template_tn1lzhp", this)
    .then(() => {
      alert("Message sent successfully! 🤍");
      form.reset();
      formBtn.setAttribute("disabled", ""); // disable again after send
    }, (error) => {
      alert("Failed to send: " + JSON.stringify(error));
    });
});


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}