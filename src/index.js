// console.log('Robot Bobby was here');
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const w = window.innerWidth; 
const h = window.innerHeight;

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;
const scene = new THREE.Scene();

const geo = new THREE.IcosahedronGeometry(1.0, 2);
const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    flatShading: true,
});

const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

const heliLight = new THREE.HemisphereLight(0xffffff, 0x000000, 1);
scene.add(heliLight);

function animate(t = 0) {
    requestAnimationFrame(animate);
    // mesh.scale.setScalar(Math.sin(t * 0.001) * 1.0)
    mesh.rotation.y = t * 0.0001;
    controls.update();
    renderer.render(scene, camera);
}

animate();


// NOTE - Robot Bobby Beginner Tutorial
// https://www.youtube.com/watch?v=XPhAR1YdD6o&ab_channel=RobotBobby