import * as THREE from "three";

let scene, camera, renderer, sun, earth, orbit;

function init() {
  // Create scene
  scene = new THREE.Scene();

  // Create camera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  camera.position.z = 30;

  // Create renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Create Sun
  const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
  const sunMaterial = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    map: new THREE.TextureLoader().load(
      "./2k_sun.jpg",
    ),
  });
  sun = new THREE.Mesh(sunGeometry, sunMaterial);
  scene.add(sun);

  // Create Earth
  const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
  const earthMaterial = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load(
      "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg",
    ),
  });
  earth = new THREE.Mesh(earthGeometry, earthMaterial);

  // Create orbit group for Earth
  orbit = new THREE.Group();
  orbit.add(earth);
  scene.add(orbit);

  // Position Earth
  earth.position.x = 0;
  earth.position.z = 10;

  // Start animation
  animate();
}

function animate() {
  requestAnimationFrame(animate);

  // Rotate Sun
  sun.rotation.y += 0.01;

  // Rotate Earth around its axis
  earth.rotation.y += 0.01;

  // Rotate Earth around Sun
  orbit.rotation.y += 0.001;

  renderer.render(scene, camera);
}

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

init();
