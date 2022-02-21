for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    playInstrument(this.innerHTML);
    animateButton(this.innerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  playInstrument(event.key);
  animateButton(event.key);
});

function playInstrument(key) {
  var soundFilePath = "";

  switch (key.toLowerCase()) {
    case "w":
      soundFilePath = "sounds/tom-1.mp3";
      break;
    case "a":
      soundFilePath = "sounds/tom-2.mp3";
      break;
    case "s":
      soundFilePath = "sounds/tom-3.mp3";
      break;
    case "d":
      soundFilePath = "sounds/tom-4.mp3";
      break;
    case "j":
      soundFilePath = "sounds/snare.mp3";
      break;
    case "k":
      soundFilePath = "sounds/crash.mp3";
      break;
    case "l":
      soundFilePath = "sounds/kick-bass.mp3";
      break;
    default:
      console.log(`instrument => ${key}`);
  }

  if (soundFilePath != "") {
    audio = new Audio(soundFilePath);
    audio.play();
  }
}

function animateButton(currentKey) {
  var currentButton = document.querySelector("." + currentKey);

  if (currentButton) {
    currentButton.classList.add("pressed");
    setTimeout(function() {
      currentButton.classList.remove("pressed");
    }, 200);
  }

}
