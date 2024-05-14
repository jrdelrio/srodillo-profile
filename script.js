document.addEventListener("DOMContentLoaded", function () {
  const elem = document.querySelector(".intro");
  const text = elem.innerText;
  elem.innerText = "";
  let cursorPosition = 0;

  function typeWriterEffect() {
    if (cursorPosition < text.length) {
      elem.textContent += text.charAt(cursorPosition);
      cursorPosition++;
      setTimeout(typeWriterEffect, 100); // Ajusta la velocidad de escritura aquí
    }
  }

  typeWriterEffect();
});
