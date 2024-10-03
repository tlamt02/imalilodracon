// Import the THREE.js library
import * as THREE from 'three';

// Scene setup
const scene = new THREE.Scene();

// Camera setup
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30;

// Renderer setup
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
renderer.setSize(window.innerWidth, window.innerHeight);

// Geometry and material for the Torus
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torus = new THREE.Mesh(geometry, material);

// Adding the torus to the scene
scene.add(torus);

// Adding a light to the scene
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);
// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the torus
    torus.rotation.x += 0.01; // Rotate around the X axis
    torus.rotation.y += 0.01; // Rotate around the Y axis

    // Optionally, you can animate other properties like position or scale
     torus.position.x = Math.sin(Date.now() * 0.001) * 10; // Oscillate along the X axis
     torus.scale.set(Math.sin(Date.now() * 0.1) + 1, Math.sin(Date.now() * 0.001) + 1, Math.sin(Date.now() * 0.001) + 1); // Scale animation

    // Render the scene from the perspective of the camera
    renderer.render(scene, camera);
}

// Start the animation
animate();
