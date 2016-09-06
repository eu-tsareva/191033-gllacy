var inputs = Array.from(document.querySelectorAll(".label-wrapper"));
inputs.forEach(function(input) {
  var textField = input.querySelector(".text-field");
  var label = input.querySelector(".label-hint");

  textField.classList.remove("valid");

  textField.addEventListener("blur", function(event) {
    if(textField.value) {
      textField.classList.add("valid");
    } else if (textField.classList.contains("valid")) {
      textField.classList.remove("valid");
    }
  })
});
