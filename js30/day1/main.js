window.addEventListener("keydown", function(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key) return;
    key.classList.add("pressed");
  });

window.addEventListener("keyup", function(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key) return;
    key.classList.remove("pressed");
  });
