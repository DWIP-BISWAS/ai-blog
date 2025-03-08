// Set up Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('loadingAnimation').appendChild(renderer.domElement);

// Create particles
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 1000;
const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * 10;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const particlesMaterial = new THREE.PointsMaterial({
  size: 0.05,
  color: 0x00ffcc,
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  particlesMesh.rotation.x += 0.001;
  particlesMesh.rotation.y += 0.001;
  renderer.render(scene, camera);
}

animate();

// Simulate loading delay
setTimeout(() => {
  gsap.to('#loadingAnimation', {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      document.getElementById('loadingAnimation').remove();
      document.getElementById('mainContent').style.display = 'block';
    },
  });
}, 3000); // 3-second loading simulation
