// Ensure ThreeJS is in global scope for the 'examples/'
global.THREE = require("three");

// Include any additional ThreeJS examples below
require("three/examples/js/controls/OrbitControls");

const canvasSketch = require("canvas-sketch");
const { Mesh } = require("three");

const settings = {
  // Make the loop animated
  animate: true,
  // Get a WebGL canvas rather than 2D
  context: "webgl"
};

const sketch = ({ context }) => {
  // Create a renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: context.canvas
  });

  // WebGL background color
  renderer.setClearColor("#000", 1);

  // Setup a camera
  const camera = new THREE.PerspectiveCamera(50, 1, 0.01, 500);
  camera.position.set(2, 4, -5);
  camera.lookAt(new THREE.Vector3());

  // Setup camera controller
  const controls = new THREE.OrbitControls(camera, context.canvas);

  // Setup your scene
  const scene = new THREE.Scene();

  // Setup a geometry
  const earth = new THREE.SphereGeometry(1, 32, 16);
  const moon = new THREE.SphereGeometry(0.5, 32, 16);

  // adding textures 

  const loader = new THREE.TextureLoader();
  const earthTexture = loader.load("earth.jpg");
  const moonTexture = loader.load("moon.jpg");

  // Setup a material
  const earthMaterial = new THREE.MeshBasicMaterial({
    map: earthTexture
  });

  const moonMaterial = new THREE.MeshBasicMaterial({
    map: moonTexture
  });

  // Setup a mesh with geometry + material
  const earthMesh = new THREE.Mesh(earth, earthMaterial);
  scene.add(earthMesh);

  const moonMesh = new THREE.Mesh(moon, moonMaterial);
  moonMesh.position.set(3, .5, 0);
  moonMesh.scale.setScalar(0.4)
  scene.add(moonMesh);

  // draw each frame
  return {
    // Handle resize events here
    resize({ pixelRatio, viewportWidth, viewportHeight }) {
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(viewportWidth, viewportHeight, false);
      camera.aspect = viewportWidth / viewportHeight;
      camera.updateProjectionMatrix();
    },
    // Update & render your scene here, and add animation
    render({ time }) {
      moonMesh.rotation.y = time * 0.1;
      earthMesh.rotation.y = time * 0.2;
      controls.update();
      renderer.render(scene, camera);
    },
    // Dispose of events & renderer for cleaner hot-reloading
    unload() {
      controls.dispose();
      renderer.dispose();
    }
  };
};

canvasSketch(sketch, settings);
