for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // Detecting Button Clicks
    playSound(this.textContent);
    playAnimation(this.textContent);
  });
}

// Detecting KeyBoard Press
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  playAnimation(event.key);
});

function playSound(buttonContent) {
  // var buttonContent = this.textContent;
  switch (buttonContent) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(buttonContent);
      break;
  }
}

function playAnimation(currentBtn) {
  var activebtn = document.querySelector("." + currentBtn);
  activebtn.classList.add("pressed");
  setTimeout(function () {
    activebtn.classList.remove("pressed");
  }, 150);
}
