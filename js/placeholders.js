var textFields = Array.from(document.querySelectorAll(".text-field"));
textFields.forEach(function(textField) {
  textField.addEventListener("blur", function(event) {
    if(textField.value) {
      textField.classList.add("valid");
    } else if (textField.classList.contains("valid")) {
      textField.classList.remove("valid");
    }
  })
});
