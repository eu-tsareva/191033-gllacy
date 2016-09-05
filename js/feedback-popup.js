var popup = document.querySelector(".modal-content-block");
var popupShowBtn = document.querySelector(".feedback-btn");
var popupCloseBtn = document.querySelector(".modal-content-close");
var overlay = document.querySelector(".modal-overlay");
var form = popup.querySelector("form");
var nameInput = form.querySelector("input[name=name]");
var emailInput = form.querySelector("input[name=email]");
var questionArea = form.querySelector("textarea");
var nameStored = localStorage.getItem("name");
var emailStored = localStorage.getItem("email");

function closePopup(event) {
  event = event || window.event;
  event.preventDefault();
  popup.classList.remove("modal-error-animate");
  popup.classList.remove("modal-show-animate");
  overlay.classList.remove("modal-show");
}

popupCloseBtn.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup);
window.addEventListener("keydown", function(event) {
  if(popup.classList.contains("modal-show-animate")  && event.keyCode === 27)
    closePopup();
})

popupShowBtn.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-show");
  popup.classList.add("modal-show-animate");
  if (nameStored  && emailStored) {
    nameInput.value =  nameStored;
    nameInput.classList.add("valid");
    emailInput.value =  emailStored;
    emailInput.classList.add("valid");
    questionArea.focus();
  } else {
    nameInput.focus();
  }
});

form.addEventListener("submit", function(event) {
  if (!nameInput.value || !emailInput.value || !questionArea.value) {
    event.preventDefault();
    popup.classList.remove("modal-error-animate");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error-animate");
  } else {
    nameStored = localStorage.setItem("name", nameInput.value);
    emailStored = localStorage.setItem("email", emailInput.value);
  }
});
