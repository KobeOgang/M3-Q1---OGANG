import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
scene.background = new THREE.Color(0x85a5e);
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
document.body.appendChild( renderer.domElement );

//Orbit Controls
const cameraControls = new OrbitControls( camera, renderer.domElement );
camera.position.set( 6, 20 , 20 );
cameraControls.update();

//Textures
const woodenTexture = new THREE.TextureLoader().load( 'assets/textures/woodenTexture.jpg' );
const wallTexture = new THREE.TextureLoader().load( 'assets/textures/wallTexture.jpg' );
const sofaTexture = new THREE.TextureLoader().load( 'assets/textures/sofaTexture2.jpg' );
const screenTexture = new THREE.TextureLoader().load( 'assets/textures/maddVladd.png' );

//Lights
const dl = new THREE.DirectionalLight( 0x46877d, 0.3);
dl.position.set(10, 20, 10);
scene.add( dl );

const al = new THREE.AmbientLight( 0xa3a3a3, 0.1 );
scene.add( al );

const width = 10;
const height = 10;
const intensity = 1;
const rectLight = new THREE.RectAreaLight( 0x73fdff, intensity,  width, height );
rectLight.position.set( 0, 6, -11.48 );
rectLight.rotation.set(0, Math.PI, 0);
scene.add( rectLight )

const pointLight = new THREE.PointLight( 0xffff00, 8, 200 );
const pointLight2 = new THREE.PointLight( 0xf7834d, 8, 200 );
pointLight.position.set( -9, 8, 6 );
pointLight2.position.set( 9, 3, 10 );
scene.add( pointLight );
scene.add( pointLight2 );

//Floor
const floorGeometry = new THREE.BoxGeometry( 25, 1, 25 );
const floorMaterial = new THREE.MeshStandardMaterial( { map: woodenTexture, roughness: 0.1 } );
const floor = new THREE.Mesh( floorGeometry, floorMaterial );
floor.receiveShadow = true; 
scene.add( floor );

//Walls
const wallGeometry = new THREE.BoxGeometry(1, 15, 25 );
const wallGeometry2 = new THREE.BoxGeometry(25, 15, 1 );
const wallMaterial = new THREE.MeshStandardMaterial( { map: wallTexture } );
const wall = new THREE.Mesh( wallGeometry, wallMaterial );
const wall2 = new THREE.Mesh( wallGeometry2, wallMaterial );
wall.castShadow = true;
wall2.castShadow = true;
scene.add( wall );
scene.add( wall2 );

//Wall adjustments
wall.position.x = -12.5;
wall.position.y = 7;
wall2.position.z = -12;
wall2.position.y = 7;

//TV Table
const tblGeometry = new THREE.BoxGeometry(8, 2, 2 );
const tblMaterial = new THREE.MeshStandardMaterial( { color: 0x857c6d } );
const tbl = new THREE.Mesh( tblGeometry, tblMaterial );
tbl.castShadow = true; 
scene.add( tbl );

//tbl adjustments
tbl.position.y = 1.5;
tbl.position.z = -10.5;

//TV Monitor
const tvGeometry = new THREE.BoxGeometry(7.5, 4, .5 );
const tvMaterial = new THREE.MeshLambertMaterial( { color: 0x626566 } );
const tv = new THREE.Mesh( tvGeometry, tvMaterial );
tv.castShadow = true;
scene.add( tv );

//tv adjustments
tv.position.y = 6;
tv.position.z = -11.5;

//TV screen
const screenGeometry = new THREE.BoxGeometry(7, 3.5, .5 );
const screenMaterial = new THREE.MeshBasicMaterial( { map: screenTexture } );
const screen = new THREE.Mesh( screenGeometry, screenMaterial );
screen.position.copy(rectLight.position);
scene.add( screen );

//Sofa
const sofaGeometry = new THREE.BoxGeometry(10, 1.5, 4 );
const sofaGeometry2 = new THREE.BoxGeometry(10, 4, 1 );
const sofaGeometry3 = new THREE.BoxGeometry(1, 2, 2 );
const sofaMaterial = new THREE.MeshStandardMaterial( { map: sofaTexture } );
const sofa = new THREE.Mesh( sofaGeometry, sofaMaterial );
const sofa2 = new THREE.Mesh( sofaGeometry2, sofaMaterial );
const sofa3 = new THREE.Mesh( sofaGeometry3, sofaMaterial );
const sofa4 = new THREE.Mesh( sofaGeometry3, sofaMaterial );
sofa.castShadow = true; // Enable shadow casting for the sofa
sofa2.castShadow = true;
sofa3.castShadow = true;
sofa4.castShadow = true;
scene.add( sofa );
scene.add( sofa2 );
scene.add( sofa3 );
scene.add( sofa4 );

//Sofa adjustments
sofa.position.y=1.2;
sofa.position.z=2;
sofa2.position.y=2.5;
sofa2.position.z=3.5;
sofa3.position.y=2;
sofa3.position.x=4.5;
sofa3.position.z=2;
sofa4.position.y=2;
sofa4.position.x=-4.5;
sofa4.position.z=2;

//Speakers
const speakerGeometry = new THREE.BoxGeometry(3, 8, 2 );
const speakerMaterial = new THREE.MeshStandardMaterial( { color: 0x857c6d } );
const speaker = new THREE.Mesh( speakerGeometry, speakerMaterial );
const speaker2 = new THREE.Mesh( speakerGeometry, speakerMaterial );
scene.add( speaker );
scene.add( speaker2 );

//Speaker adjustments
speaker.position.y = 4;
speaker.position.x = 9;
speaker.position.z = -10;
speaker2.position.y = 4;
speaker2.position.x = -9;
speaker2.position.z = -10;

//Design stuff for aesthetic
const desGeometry = new THREE.SphereGeometry( .8, 32, 16 ); 
const desMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
const desMaterial2 = new THREE.MeshBasicMaterial( { color: 0xf7834d } ); 
const des = new THREE.Mesh( desGeometry, desMaterial ); 
const des2 = new THREE.Mesh( desGeometry, desMaterial2 ); 
des.position.copy(pointLight.position);
des2.position.copy(pointLight2.position);
scene.add( des );
scene.add( des2 );

//Design stands
const standGeometry = new THREE.CapsuleGeometry( 0.2, 7, 4, 8 ); 
const standGeometry2 = new THREE.CapsuleGeometry( 0.2, 3, 4, 8 ); 
const standMaterial = new THREE.MeshStandardMaterial( {color: 0x4f4f4f} ); 
const stand = new THREE.Mesh( standGeometry, standMaterial ); 
const stand2 = new THREE.Mesh( standGeometry2, standMaterial ); 
scene.add( stand );
scene.add( stand2 );

//Stand adjustments
stand.position.x = -9;
stand.position.y = 4;
stand.position.z = 6;
stand2.position.x = 9;
stand2.position.y = 1.5;
stand2.position.z = 10;

function animate() {
	requestAnimationFrame( animate );
    cameraControls.update();
	renderer.render( scene, camera );
}
animate();