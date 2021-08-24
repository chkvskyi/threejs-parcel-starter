import { PerspectiveCamera, Scene, Vector3, WebGLRenderer } from "three";
import { SeedScene } from "./objects/SeedScene";

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(5, 5, 5);
camera.lookAt(new Vector3(0, 0, 0));

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x7ec0ee, 1);

document.body.appendChild(renderer.domElement);

const seedScene = new SeedScene();
scene.add(seedScene)

const onAnimationFrameHandler = (timeStamp) => {
    renderer.render(scene, camera);
    seedScene.update(timeStamp)
    window.requestAnimationFrame(onAnimationFrameHandler);
}
window.requestAnimationFrame(onAnimationFrameHandler);

console.log(camera)

const windowResizeHanlder = () => { 
    const { innerHeight, innerWidth } = window;
    renderer.setSize(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
  };
  windowResizeHanlder();
  window.addEventListener('resize', windowResizeHanlder);