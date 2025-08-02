import 'aframe';
import 'aframe-environment-component';

const text = document.getElementById('text');
let repeatedTextLength;

function moveText() {
  let positionX = 0;
  const speed = 0.2;

  function animate() {
    positionX += speed;

    // Reset text position for infinite scroll effect
    if (positionX > 50) {
      positionX = -100;
    }

    text.setAttribute("position", `${positionX} 15 -35`);
    requestAnimationFrame(animate);
  }

  animate();
}

function createScrollingText(textValue) {
  const repeatedText = Array(repeatedTextLength).fill(textValue).join(' ');
  text.setAttribute("text", `width: 300; lineHeight: 50; letterSpacing: 0; color: white; align: start; value: ${repeatedText}; whiteSpace: noWrap; side: double`);
}

window.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('generateBtn');
  
  button.addEventListener('click', () => {
    const textValue = document.getElementById('textInput').value;
    let x = textValue.length;

    // Adjust word repetitions depending on string length
    if (x > 0) {
      repeatedTextLength = 2*x*x - 32*x + 130;
      createScrollingText(textValue);
      moveText();
    }
  });
});