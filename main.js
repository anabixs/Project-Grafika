import * as THREE from "three";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader();

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xa8def0);
