import 'aframe';
import 'aframe-environment-component';
import * as THREE from 'three';
import { Font } from 'three/examples/jsm/loaders/FontLoader.js';
import fontData from './helvetiker_bold.typeface.json';

const font = new Font(fontData);
const text = document.getElementById('text');
let repeatedTextLength;

function moveText() {
  let positionX = 0;
  const speed = 0.2;

  function animate() {
    positionX += speed;

    // Reset when text moves too far
    if (positionX > 50) {
      positionX = -100; // Adjust depending on text width
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
    if (x > 0) {
      repeatedTextLength = 2*x*x - 32*x + 130;
      console.log("String Length: ", x);
      console.log("Repeated text length: ", repeatedTextLength);
      createScrollingText(textValue);
      moveText();
    }

    // const scene = document.querySelector('a-scene');

    // const textEntity = document.createElement('a-entity');

    // const geometry = new THREE.TextGeometry(textValue, {
    //   font: font,
    //   size: 1,
    //   height: 0.2,
    // });

    // const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0xff6600 }));

    // // Attach raw Three.js mesh to A-Frame entity
    // textEntity.setObject3D('mesh', mesh);

    // textEntity.setAttribute('position', '0 1.5 -2');
    // scene.appendChild(textEntity);
  });
});