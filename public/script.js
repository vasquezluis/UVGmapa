// importar las librerias
import * as THREE from './threejs/three.module.js';
import {GLTFLoader} from './threejs/GLTFLoader.js';
import {STLLoader} from './threejs/STLLoader.js';
import {OrbitControls} from './threejs/OrbitControls.js';

// Declarar variables globales
let scene, camera, renderer, object, model, model2;
//let div = document.getElementById("myDIV");
// Canvas del html
const canvas = document.querySelector('canvas.webgl')

// crear escena con el constuctor correspondiente
scene = new THREE.Scene();
// cambiar el color de la escena
//scene.background = new THREE.Color(0x808080);

//crear cámara con el constructor correspondiente
camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        10000
    );
// ubicar la camara lejos del punto 0, 0, 0 -> 0,40,100
camera.position.set(0,41,100);



/* ---------------------- Función de modelos ----------------------*/
let loader = new GLTFLoader();
function models(){

// Crear una geometría
var geometry = new THREE.BoxGeometry(2,2,2);
var material = new THREE.MeshBasicMaterial({color: 0x00ff00}); //wareframe es para los mallas
// cubo de ayuda para el centro de la escena
// var cube = new THREE.Mesh(geometry, material);
// cube.position.set(0,0,0);
// cube.scale.set(2,2,2);
// scene.add(cube);

// modelo de b1
loader.load('/models/b/b1.gltf', result => {
    var b1 = result.scene.children[0];
    // para las sombras
    b1.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    b1.position.set(23,-1.2,0);
    b1.rotation.set(0,Math.PI/2,0);
    scene.add(b1);
});
// modelo de b2
loader.load('/models/b/b2.gltf', result => {
    var b2 = result.scene.children[0];
    // para las sombras
    b2.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    b2.position.set(20,-1.2,-30);
    b2.rotation.set(0,Math.PI/2,0);
    scene.add(b2);
});
// modelo de b3
loader.load('/models/b/b3.gltf', result => {
    var b3 = result.scene.children[0];
    // para las sombras
    b3.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    b3.position.set(20,-1.2,-43);
    b3.rotation.set(0,Math.PI/2,0);
    scene.add(b3);
});
// modelo de b4
loader.load('/models/b/b4.gltf', result => {
    var b4 = result.scene.children[0];
    // para las sombras
    b4.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    b4.position.set(20,-1.2,-56);
    b4.rotation.set(0,Math.PI/2,0);
    scene.add(b4);
});
// modelo de b5
loader.load('/models/b/b5.gltf', result => {
    var b5 = result.scene.children[0];
    // para las sombras
    b5.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    b5.position.set(20,-1.2,-69);
    b5.rotation.set(0,Math.PI/2,0);
    scene.add(b5);
});
// modelo de b6
loader.load('/models/b/b6.gltf', result => {
    var b6 = result.scene.children[0];
    // para las sombras
    b6.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    b6.position.set(20,-1.2,-82);
    b6.rotation.set(0,Math.PI/2,0);
    scene.add(b6);
});
// modelo de b7
loader.load('/models/b/b7.gltf', result => {
    var b7 = result.scene.children[0];
    // para las sombras
    b7.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    b7.position.set(20,-1.2,-95);
    b7.rotation.set(0,Math.PI/2,0);
    scene.add(b7);
});
// modelo de b8
loader.load('/models/b/b8.gltf', result => {
    var b8 = result.scene.children[0];
    // para las sombras
    b8.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    b8.position.set(20,-1.2,-108);
    b8.rotation.set(0,Math.PI/2,0);
    scene.add(b8);
});

// modelo de a1
loader.load('/models/a/a1.gltf', result => {
    var a1 = result.scene.children[0];
    // para las sombras
    a1.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    a1.position.set(65,0.4,-40);
    a1.rotation.set(0,Math.PI/2,0);
    scene.add(a1);
});
// modelo de a2
loader.load('/models/a/a2.gltf', result => {
    var a2 = result.scene.children[0];
    // para las sombras
    a2.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    a2.position.set(65,-1.2,-53);
    a2.rotation.set(0,-Math.PI/2,0);
    scene.add(a2);
});
// modelo de a3
loader.load('/models/a/a3.gltf', result => {
    var a3 = result.scene.children[0];
    // para las sombras
    a3.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    a3.position.set(65,0.4,-66);
    a3.rotation.set(0,-Math.PI/2,0);
    scene.add(a3);
});
// modelo de a4
loader.load('/models/a/a4.gltf', result => {
    var a4 = result.scene.children[0];
    // para las sombras
    a4.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    a4.position.set(65,-0.9,-92);
    a4.rotation.set(0,-Math.PI/2,0);
    scene.add(a4);
});
// modelo de a5
loader.load('/models/a/a5.gltf', result => {
    var a5 = result.scene.children[0];
    // para las sombras
    a5.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    a5.position.set(65,-1.2,-105);
    a5.rotation.set(0,-Math.PI/2,0);
    scene.add(a5);
});


// modelo de c1
loader.load('/models/c/c1.gltf', result => {
    var c1 = result.scene.children[0];
    // para las sombras
    c1.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    c1.position.set(-58,-1.2,-58);
    c1.rotation.set(0,Math.PI/2,0);
    scene.add(c1);
});
// modelo de c2
loader.load('/models/c/c2.gltf', result => {
    var c2 = result.scene.children[0];
    // para las sombras
    c2.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    c2.position.set(-50,-1.2,-73);
    c2.rotation.set(0,Math.PI/2,0);
    scene.add(c2);
});
// modelo de c3
loader.load('/models/c/c3.gltf', result => {
    var c3 = result.scene.children[0];
    // para las sombras
    c3.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    c3.position.set(-50,-1.2,-86);
    c3.rotation.set(0,Math.PI/2,0);
    scene.add(c3);
});
// modelo de c4
loader.load('/models/c/c4.gltf', result => {
    var c4 = result.scene.children[0];
    // para las sombras
    c4.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    c4.position.set(-50,-1.2,-99);
    c4.rotation.set(0,Math.PI/2,0);
    scene.add(c4);
});
// modelo de c5
loader.load('/models/c/c5.gltf', result => {
    var c5 = result.scene.children[0];
    // para las sombras
    c5.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    c5.position.set(-50,-1.2,-112);
    c5.rotation.set(0,Math.PI/2,0);
    scene.add(c5);
});

// modelo de k
loader.load('/models/varios/k.gltf', result => {
    var k = result.scene.children[0];
    // para las sombras
    k.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    k.position.set(-53,-1,-40);
    k.rotation.set(0,-Math.PI/2,0);
    scene.add(k);
});

// modelo de ojos
loader.load('/models/varios/ojos.gltf', result => {
    var c5 = result.scene.children[0];
    // para las sombras
    c5.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    c5.position.set(60,1.5,15);
    c5.rotation.set(0,Math.PI,0);
    scene.add(c5);
});
// modelo de bodegacomedor
loader.load('/models/varios/bodegacmoedor.gltf', result => {
    var R = result.scene.children[0];
    // para las sombras
    R.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    R.position.set(15,-1,-155);
    R.rotation.set(0,0,0);
    scene.add(R);
});
// modelo de cafeteria
loader.load('/models/varios/cafeteria.gltf', result => {
    var cafeteria = result.scene.children[0];
    // para las sombra
    cafeteria.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    cafeteria.position.set(-5,-2.5,-165);
    cafeteria.rotation.set(0,0,0);
    scene.add(cafeteria);
});
// modelo de salon mayor
loader.load('/models/varios/mayor.gltf', result => {
    var mayor = result.scene.children[0];
    // para las sombras
    mayor.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    mayor.position.set(-35,2,-165);
    mayor.rotation.set(0,0,0);
    scene.add(mayor);
});
// modelo de baño salon mayor
loader.load('/models/varios/bañomayor.gltf', result => {
    var bmayor = result.scene.children[0];
    // para las sombras
    bmayor.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    bmayor.position.set(-65,-1,-165);
    bmayor.rotation.set(0,0,0);
    scene.add(bmayor);
});
// modelo de salon altiplano
loader.load('/models/varios/salonalti.gltf', result => {
    var salti = result.scene.children[0];
    // para las sombras
    salti.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    salti.position.set(25,-1,140);
    salti.rotation.set(0,Math.PI/2,0);
    scene.add(salti);
});
// modelo de 3
loader.load('/models/varios/e.gltf', result => {
    var e = result.scene.children[0];
    // para las sombras
    e.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    e.position.set(-40,-1,80);
    e.rotation.set(0,Math.PI,0);
    scene.add(e);
});
// modelo de e
loader.load('/models/varios/ebodega.gltf', result => {
    var enodega = result.scene.children[0];
    // para las sombras
    enodega.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    enodega.position.set(-40,-1,97);
    enodega.rotation.set(0,Math.PI,0);
    scene.add(enodega);
});
// modelo de f
loader.load('/models/varios/f.gltf', result => {
    var f = result.scene.children[0];
    // para las sombras
    f.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    f.position.set(-70,-1.2,60);
    f.rotation.set(0,-Math.PI/2,0);
    scene.add(f);
});
// modelo de m1
loader.load('/models/varios/m1.gltf', result => {
    var m1 = result.scene.children[0];
    // para las sombras
    m1.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    m1.position.set(-92,-1,60);
    m1.rotation.set(0,-Math.PI/2,0);
    scene.add(m1);
});
// modelo de m2
loader.load('/models/varios/m2.gltf', result => {
    var m2 = result.scene.children[0];
    // para las sombras
    m2.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    m2.position.set(-105,-1,60);
    m2.rotation.set(0,-Math.PI/2,0);
    scene.add(m2);
});
// modelo de n
loader.load('/models/varios/n.gltf', result => {
    var n = result.scene.children[0];
    // para las sombras
    n.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    n.position.set(-116,-1,60);
    n.rotation.set(0,-Math.PI/2,0);
    scene.add(n);
});
// modelo de ñ
loader.load('/models/varios/n.gltf', result => {
    var nh = result.scene.children[0];
    // para las sombras
    nh.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    nh.position.set(-90,-1,100);
    nh.rotation.set(0,Math.PI/2,0);
    scene.add(nh);
});
// modelo de ñ2
loader.load('/models/varios/n.gltf', result => {
    var nh2 = result.scene.children[0];
    // para las sombras
    nh2.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    nh2.position.set(-105,-1,100);
    nh2.rotation.set(0,Math.PI/2,0);
    scene.add(nh2);
});
// modelo de ñ3
loader.load('/models/varios/nh3.gltf', result => {
    var nh2 = result.scene.children[0];
    // para las sombras
    nh2.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    nh2.position.set(-116,-1,100);
    nh2.rotation.set(0,Math.PI/2,0);
    scene.add(nh2);
});
// modelo de d
loader.load('/models/varios/d.gltf', result => {
    var d = result.scene.children[0];
    // para las sombras
    d.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    d.position.set(-60,-1,140);
    d.rotation.set(0,Math.PI,0);
    scene.add(d);
});
// modelo de Garita
loader.load('/models/varios/garita.gltf', result => {
    var garita = result.scene.children[0];
    // para las sombras
    garita.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    garita.position.set(0,-1.5,160);
    garita.rotation.set(0,-Math.PI/2,0);
    scene.add(garita);
});
// modelo de invernadero
loader.load('/models/varios/inver.gltf', result => {
    var inver = result.scene.children[0];
    // para las sombras
    inver.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    inver.position.set(-20,-1,150);
    inver.rotation.set(0,0,0);
    scene.add(inver);
});


/* ============ INTECAP ============ */
// modelo de 1 y 2
loader.load('/models/intecap/12.gltf', result => {
    var mod12 = result.scene.children[0];
    // para las sombras
    mod12.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    mod12.position.set(-120,-1,10);
    mod12.rotation.set(0,-Math.PI/2,0);
    scene.add(mod12);
});
// modelo de 3 y 4
loader.load('/models/intecap/34.gltf', result => {
    var mod34 = result.scene.children[0];
    // para las sombras
    mod34.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    mod34.position.set(-120,1.5,-18);
    mod34.rotation.set(0,-Math.PI/2,0);
    scene.add(mod34);
});
// modelo de grande
loader.load('/models/intecap/grande.gltf', result => {
    var mod34 = result.scene.children[0];
    // para las sombras
    mod34.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    mod34.position.set(-123,1.5,-35);
    mod34.rotation.set(0,Math.PI/2,0);
    scene.add(mod34);
});
// modelo de 6 y 7
loader.load('/models/intecap/67.gltf', result => {
    var mod67 = result.scene.children[0];
    // para las sombras
    mod67.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    mod67.position.set(-120,-1,-51);
    mod67.rotation.set(0,Math.PI/2,0);
    scene.add(mod67);
});

// modelo de 8 y 9
loader.load('/models/intecap/67.gltf', result => {
    var mod89 = result.scene.children[0];
    // para las sombras
    mod89.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    mod89.position.set(-120,-1,-65);
    mod89.rotation.set(0,Math.PI/2,0);
    scene.add(mod89);
});
// modelo de 10 y 11
loader.load('/models/intecap/67.gltf', result => {
    var mod1011 = result.scene.children[0];
    // para las sombras
    mod1011.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    mod1011.position.set(-120,-1,-79);
    mod1011.rotation.set(0,Math.PI/2,0);
    scene.add(mod1011);
});


/* ============ Terreno ============ */
// modelo de pasto
loader.load('/models/terreno/piso.gltf', result => {
    let suelo = result.scene.children[0];
    // para las sombras
    suelo.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    suelo.position.set(0,-4,-10);
    suelo.scale.set(2.5,3,2.9);
    scene.add(suelo);
});
// modelo de calle
loader.load('/models/terreno/camino.gltf', result => {
    var calle1 = result.scene.children[0];
    // para las sombras
    calle1.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    calle1.position.set(42.5,-2.5,-22);
    calle1.rotation.set(0,Math.PI,0);
    scene.add(calle1);
});
// modelo de calle
loader.load('/models/terreno/camino.gltf', result => {
    var calle2 = result.scene.children[0];
    // para las sombras
    calle2.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    calle2.position.set(-140,-2.5,5);
    calle2.rotation.set(0,0,0);
    scene.add(calle2);
});
// modelo de calle entrada
loader.load('/models/terreno/caminoentrada.gltf', result => {
    var calle2 = result.scene.children[0];
    // para las sombras
    calle2.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    calle2.position.set(5.6,-2.5,145);
    calle2.rotation.set(0,0,0);
    scene.add(calle2);
});
// modelo de calle entrada
loader.load('/models/terreno/caminoentrada.gltf', result => {
    var calle2 = result.scene.children[0];
    // para las sombras
    calle2.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    calle2.position.set(-5.6,-2.5,145);
    calle2.rotation.set(0,0,0);
    scene.add(calle2);
});
// modelo de campo1
loader.load('/models/terreno/footcamp.gltf', result => {
    var campo1 = result.scene.children[0];
    // para las sombras
    campo1.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    campo1.position.set(5,-2.5,70);
    campo1.rotation.set(0,Math.PI,0);
    scene.add(campo1);
});
// modelo de campo2
loader.load('/models/terreno/footcamp.gltf', result => {
    var campo2 = result.scene.children[0];
    // para las sombras
    campo2.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    campo2.position.set(100,-2.5,-150);
    campo2.rotation.set(0,Math.PI/2,0);
    scene.add(campo2);
});
// modelo de cancha 1
loader.load('/models/terreno/canchas1.gltf', result => {
    var cancha1 = result.scene.children[0];
    // para las sombras
    cancha1.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    cancha1.position.set(-15,-2.5,-70);
    cancha1.rotation.set(0,Math.PI/2,0);
    scene.add(cancha1);
});
// modelo de cancha 2
loader.load('/models/terreno/canchas1.gltf', result => {
    var cancha2 = result.scene.children[0];
    // para las sombras
    cancha2.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    cancha2.position.set(-15,-2.5,-90);
    cancha2.rotation.set(0,Math.PI/2,0);
    scene.add(cancha2);
});
// modelo de campok
loader.load('/models/terreno/campok.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-36,-2.7,-8);
    arbolito.scale.set(3,1,2.6);
    arbolito.rotation.set(0,Math.PI,0);
    scene.add(arbolito);
});

/* ============ Arbolitos ============ */
// modelo de arbol1 / antes de las canchas
loader.load('/models/nature/arbol4.gltf', result => {
    var arbol4 = result.scene.children[0];
    // para las sombras
    arbol4.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbol4.position.set(-30,-3,-55);
    arbol4.scale.set(1,1,1);
    arbol4.rotation.set(0,Math.PI/2,0);
    scene.add(arbol4);
});
// modelo de arbol2 / despues de las canchas
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-10,-2.5,-105);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI/2,0);
    scene.add(arbolito);
});
// modelo de arbol3 / despues de las canchas
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-20,-2.5,-110);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI,0);
    scene.add(arbolito);
});
// modelo de arbol4 / despues de las canchas
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-10,-2.5,-115);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI,0);
    scene.add(arbolito);
});
// modelo de arbol5 / despues de b8
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(15,-2.5,-125);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI,0);
    scene.add(arbolito);
});
// modelo de arbol6 / despues de b8
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(35,-2.5,-130);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI/2,0);
    scene.add(arbolito);
});
// modelo de arbol7 / antes de a4
loader.load('/models/nature/arbol4.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(47,-2.5,-98);
    arbolito.scale.set(1,1,1);
    arbolito.rotation.set(0,Math.PI,0);
    scene.add(arbolito);
});
// modelo de arbol8 / antes de a4
loader.load('/models/nature/arbol4.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(50,-2.5,-75);
    arbolito.scale.set(1,1,1);
    arbolito.rotation.set(0,Math.PI/2,0);
    scene.add(arbolito);
});
// modelo de arbol9 / antes de a4
loader.load('/models/nature/arbol4.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(60,-2.5,-80);
    arbolito.scale.set(1,1,1);
    arbolito.rotation.set(0,Math.PI/2,0);
    scene.add(arbolito);
});
// modelo de arbol10 / antes de a4
loader.load('/models/nature/arbol4.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(70,-2.5,-80);
    arbolito.scale.set(1,1,1);
    arbolito.rotation.set(0,Math.PI,0);
    scene.add(arbolito);
});
// modelo de arbol11 / antes de a1
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(50,-2.5,-20);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI,0);
    scene.add(arbolito);
});
// modelo de arbol12 / frente al hospital de ojos
loader.load('/models/nature/arbol4.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(50,-2.5,25);
    arbolito.scale.set(1,1,1);
    arbolito.rotation.set(0,Math.PI,0);
    scene.add(arbolito);
});
// modelo de arbol13 / frente al estacionamiento
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(50,-2.5,45);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI,0);
    scene.add(arbolito);
});
// modelo de arbol14 / frente al estacionamiento
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(50,-2.5,65);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI/2,0);
    scene.add(arbolito);
});
// modelo de arbol15 / frente al estacionamiento
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(50,-2.5,75);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI,0);
    scene.add(arbolito);
});
// modelo de arbol16 / frente al estacionamiento
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(50,-2.5,85);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI,0);
    scene.add(arbolito);
});
// modelo de arbol17 / junto al salon altiplano
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(13,-2.5,130);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI,0);
    scene.add(arbolito);
});
// modelo de arbol18 / junto al salon altiplano
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(13,-2.5,140);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI,0);
    scene.add(arbolito);
});
// modelo de arbol19 / despues de garita
loader.load('/models/nature/arbol2.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(0,-2.5,135);
    arbolito.scale.set(2,2,2);
    arbolito.rotation.set(0,Math.PI,0);
    scene.add(arbolito);
});
// modelo de arbol20 / al lado del vivero
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-13,-2.5,140);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI,0);
    scene.add(arbolito);
});
// modelo de arbol21 / al lado E
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-40,-2.5,105);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI/2,0);
    scene.add(arbolito);
});
// modelo de arbol22 / frente a E
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-32,-2.5,90);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI/2,0);
    scene.add(arbolito);
});
// modelo de arbol23 / frente a E
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-32,-2.5,80);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI/2,0);
    scene.add(arbolito);
});
// modelo de arbol24 / frente a ñ
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-85,-2.5,100);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI/2,0);
    scene.add(arbolito);
});
// modelo de arbol25 / frente a ñ
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-85,-2.5,105);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI,0);
    scene.add(arbolito);
});
// modelo de arbol26 / frente a INTECAP 
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-105,-2.5,40);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI,0);
    scene.add(arbolito);
});
// modelo de arbol27 / frente a INTECAP 
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-115,-2.5,50);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI,0);
    scene.add(arbolito);
});
// modelo de arbol28 / frente a INTECAP 
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-125,-2.5,50);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI/2,0);
    scene.add(arbolito);
});
// modelo de arbol29 / decoración INTECAP 
loader.load('/models/nature/arbol1.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-137,-2.5,20);
    arbolito.scale.set(1,1,1);
    arbolito.rotation.set(0,Math.PI/2,0);
    scene.add(arbolito);
});
// modelo de arbol30 / decoración INTECAP 
loader.load('/models/nature/arbol1.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-137,-2.5,13);
    arbolito.scale.set(1,1,1);
    arbolito.rotation.set(0,Math.PI/2,0);
    scene.add(arbolito);
});
// modelo de arbol31 / decoración INTECAP 
loader.load('/models/nature/arbol1.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-137,-2.5,6);
    arbolito.scale.set(1,1,1);
    arbolito.rotation.set(0,Math.PI/2,0);
    scene.add(arbolito);
});
// modelo de arbol32 / decoración INTECAP 
loader.load('/models/nature/arbol1.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-137,-2.5,-1);
    arbolito.scale.set(1,1,1);
    arbolito.rotation.set(0,Math.PI/2,0);
    scene.add(arbolito);
});
// modelo de arbol33 / decoración INTECAP 
loader.load('/models/nature/arbol1.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-137,-2.5,-8);
    arbolito.scale.set(1,1,1);
    arbolito.rotation.set(0,Math.PI/2,0);
    scene.add(arbolito);
});
// modelo de arbol34 / decoración INTECAP 
loader.load('/models/nature/arbol1.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-137,-2.5,-15);
    arbolito.scale.set(1,1,1);
    arbolito.rotation.set(0,Math.PI/2,0);
    scene.add(arbolito);
});
// modelo de arbol35 / despues de INTECAP 
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-130,-2.5,-100);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI/2,0);
    scene.add(arbolito);
});
// modelo de arbol36 / despues de INTECAP 
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-123,-2.5,-100);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI,0);
    scene.add(arbolito);
});
// modelo de arbol37 / despues de INTECAP 
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-116,-2.5,-100);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI/2,0);
    scene.add(arbolito);
});
// modelo de arbol38 / al lado de INTECAP 
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-90,-2.5,-70);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI/2,0);
    scene.add(arbolito);
});
// modelo de arbol39 / al lado de INTECAP 
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-90,-2.5,-60);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI/2,0);
    scene.add(arbolito);
});
// modelo de arbol40 / al lado de INTECAP 
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-90,-2.5,-50);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI,0);
    scene.add(arbolito);
});
// modelo de arbol41 / al lado de k
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-5,-2.5,-10);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI,0);
    scene.add(arbolito);
});
// modelo de arbol42 / al lado de k
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-5,-2.5,9);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI,0);
    scene.add(arbolito);
});
// modelo de arbol43 / al lado de k
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-5,-2.5,15);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI/2,0);
    scene.add(arbolito);
});
// modelo de arbol44 / antes de campok
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-35,-2.5,30);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI/2,0);
    scene.add(arbolito);
});
// modelo de arbol45 / antes de campok
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-35,-2.5,40);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI,0);
    scene.add(arbolito);
});
// modelo de arbol46 / antes de campok
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-45,-2.5,35);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI/2,0);
    scene.add(arbolito);
});
// modelo de arbol47 / antes de campok
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-50,-2.5,45);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI/2,0);
    scene.add(arbolito);
});
// modelo de arbol48 / antes de campok
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-60,-2.5,45);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI,0);
    scene.add(arbolito);
});
// modelo de arbol49 / antes de campok
loader.load('/models/nature/arbolito.gltf', result => {
    var arbolito = result.scene.children[0];
    // para las sombras
    arbolito.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    arbolito.position.set(-65,-2.5,30);
    arbolito.scale.set(0.5,0.5,0.5);
    arbolito.rotation.set(0,Math.PI,0);
    scene.add(arbolito);
});

// modelo carro1
loader.load('/models/carros/carro1.gltf', result => {
    var carrito1 = result.scene.children[0];
    // para las sombras
    carrito1.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    carrito1.position.set(44,-1.5,0);
    carrito1.scale.set(.7,0.2,.7);
    carrito1.rotation.set(0,-Math.PI/2,0);
    scene.add(carrito1);
});
// modelo carro 2
loader.load('/models/carros/carro2.gltf', result => {
    var carrito2 = result.scene.children[0];
    // para las sombras
    carrito2.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    carrito2.position.set(40.5,-2,35);
    carrito2.scale.set(1,1,1);
    carrito2.rotation.set(0,Math.PI*2,0);
    scene.add(carrito2);
});
// modelo carro 3
loader.load('/models/carros/carro3.gltf', result => {
    var carrito3 = result.scene.children[0];
    // para las sombras
    carrito3.traverse(n =>{ 
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    carrito3.position.set(38.5,-2,126);
    carrito3.scale.set(1,1,1);
    carrito3.rotation.set(0,Math.PI/2,0);
    scene.add(carrito3);
});

// modelo texto entrada
loader.load('/models/text/entrada.gltf', result => {
    var entradatext = result.scene.children[0];
    // para las sombras
    entradatext.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    entradatext.position.set(11.5,15,160);
    entradatext.scale.set(5,5,5);
    entradatext.rotation.set(-Math.PI/2,Math.PI,0);
    scene.add(entradatext);
    
});
// modelo texto intecap
loader.load('/models/text/intecap.gltf', result => {
    var intecaptext = result.scene.children[0];
    // para las sombras
    intecaptext.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    intecaptext.position.set(-120,15,-20);
    intecaptext.scale.set(5,5,5);
    intecaptext.rotation.set(-Math.PI/2,Math.PI,Math.PI/2);
    scene.add(intecaptext);
});
// modelo texto h de ojos
loader.load('/models/text/ojos.gltf', result => {
    var ojostext = result.scene.children[0];
    // para las sombras
    ojostext.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    ojostext.position.set(60,15,5);
    ojostext.scale.set(5,5,5);
    ojostext.rotation.set(-Math.PI/2,Math.PI,-Math.PI/2);
    scene.add(ojostext);
});
// modelo texto h de ojos
loader.load('/models/text/uvg.gltf', result => {
    var uvgtext = result.scene.children[0];
    // para las sombras
    uvgtext.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    uvgtext.position.set(0,15,0);
    uvgtext.scale.set(5,5,5);
    uvgtext.rotation.set(Math.PI/2,0,0);
    scene.add(uvgtext);
});
// modelo texto campo agricola
loader.load('/models/text/cagricola.gltf', result => {
    var agricolatext = result.scene.children[0];
    // para las sombras
    agricolatext.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    agricolatext.position.set(-150,15,-165);
    agricolatext.scale.set(5,5,5);
    agricolatext.rotation.set(Math.PI/2,0,0);
    scene.add(agricolatext);
});

// TEXTO
// modelo texto a1
loader.load('/models/text/a1.gltf', result => {
    var a1text = result.scene.children[0];
    // para las sombras
    a1text.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    a1text.position.set(63,5,-40);
    a1text.scale.set(3,3,3);
    a1text.rotation.set(Math.PI/2,0,0);
    scene.add(a1text);
});
// modelo texto a2
loader.load('/models/text/a2.gltf', result => {
    var a2text = result.scene.children[0];
    // para las sombras
    a2text.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    a2text.position.set(63,5,-53);
    a2text.scale.set(3,3,3);
    a2text.rotation.set(Math.PI/2,0,0);
    scene.add(a2text);
});
// modelo texto a3
loader.load('/models/text/a3.gltf', result => {
    var a3text = result.scene.children[0];
    // para las sombras
    a3text.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    a3text.position.set(63,5,-66);
    a3text.scale.set(3,3,3);
    a3text.rotation.set(Math.PI/2,0,0);
    scene.add(a3text);
});
// modelo texto a4
loader.load('/models/text/a4.gltf', result => {
    var a4text = result.scene.children[0];
    // para las sombras
    a4text.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    a4text.position.set(63,5,-92);
    a4text.scale.set(3,3,3);
    a4text.rotation.set(Math.PI/2,0,0);
    scene.add(a4text);
});
// modelo texto a5
loader.load('/models/text/a5.gltf', result => {
    var a5text = result.scene.children[0];
    // para las sombras
    a5text.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    a5text.position.set(63,5,-105);
    a5text.scale.set(3,3,3);
    a5text.rotation.set(Math.PI/2,0,0);
    scene.add(a5text);
});
// modelo texto b1
loader.load('/models/text/b1.gltf', result => {
    var b1text = result.scene.children[0];
    // para las sombras
    b1text.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    b1text.position.set(21.5,5,0);
    b1text.scale.set(3,3,3);
    b1text.rotation.set(Math.PI/2,0,0);
    scene.add(b1text);
});
// modelo texto b2
loader.load('/models/text/b2.gltf', result => {
    var b2text = result.scene.children[0];
    // para las sombras
    b2text.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    b2text.position.set(19,5,-30);
    b2text.scale.set(3,3,3);
    b2text.rotation.set(Math.PI/2,0,0);
    scene.add(b2text);
});
// modelo texto b3
loader.load('/models/text/b3.gltf', result => {
    var b3text = result.scene.children[0];
    // para las sombras
    b3text.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    b3text.position.set(19,5,-43);
    b3text.scale.set(3,3,3);
    b3text.rotation.set(Math.PI/2,0,0);
    scene.add(b3text);
});
// modelo texto b4
loader.load('/models/text/b4.gltf', result => {
    var b4text = result.scene.children[0];
    // para las sombras
    b4text.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    b4text.position.set(19,5,-56);
    b4text.scale.set(3,3,3);
    b4text.rotation.set(Math.PI/2,0,0);
    scene.add(b4text);
});
// modelo texto b5
loader.load('/models/text/b5.gltf', result => {
    var b5text = result.scene.children[0];
    // para las sombras
    b5text.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    b5text.position.set(19,5,-69);
    b5text.scale.set(3,3,3);
    b5text.rotation.set(Math.PI/2,0,0);
    scene.add(b5text);
});
// modelo texto b6
loader.load('/models/text/b6.gltf', result => {
    var b6text = result.scene.children[0];
    // para las sombras
    b6text.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    b6text.position.set(19,5,-82);
    b6text.scale.set(3,3,3);
    b6text.rotation.set(Math.PI/2,0,0);
    scene.add(b6text);
});
// modelo texto b7
loader.load('/models/text/b7.gltf', result => {
    var b7text = result.scene.children[0];
    // para las sombras
    b7text.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    b7text.position.set(19,5,-95);
    b7text.scale.set(3,3,3);
    b7text.rotation.set(Math.PI/2,0,0);
    scene.add(b7text);
});
// modelo texto b8
loader.load('/models/text/b8.gltf', result => {
    var b8text = result.scene.children[0];
    // para las sombras
    b8text.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    b8text.position.set(19,5,-108);
    b8text.scale.set(3,3,3);
    b8text.rotation.set(Math.PI/2,0,0);
    scene.add(b8text);
});
// modelo texto c1
loader.load('/models/text/c1.gltf', result => {
    var c1text = result.scene.children[0];
    // para las sombras
    c1text.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    c1text.position.set(-59.5,5,-58);
    c1text.scale.set(3,3,3);
    c1text.rotation.set(Math.PI/2,0,0);
    scene.add(c1text);
});
// modelo texto c2
loader.load('/models/text/c2.gltf', result => {
    var c2text = result.scene.children[0];
    // para las sombras
    c2text.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    c2text.position.set(-51.5,5,-73);
    c2text.scale.set(3,3,3);
    c2text.rotation.set(Math.PI/2,0,0);
    scene.add(c2text);
});
// modelo texto c3
loader.load('/models/text/c3.gltf', result => {
    var c3text = result.scene.children[0];
    // para las sombras
    c3text.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    c3text.position.set(-51.5,5,-86);
    c3text.scale.set(3,3,3);
    c3text.rotation.set(Math.PI/2,0,0);
    scene.add(c3text);
});
// modelo texto c4
loader.load('/models/text/c4.gltf', result => {
    var c4text = result.scene.children[0];
    // para las sombras
    c4text.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    c4text.position.set(-51.5,5,-99);
    c4text.scale.set(3,3,3);
    c4text.rotation.set(Math.PI/2,0,0);
    scene.add(c4text);
});
// modelo texto c5
loader.load('/models/text/c5.gltf', result => {
    var c5text = result.scene.children[0];
    // para las sombras
    c5text.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    c5text.position.set(-51.5,5,-112);
    c5text.scale.set(3,3,3);
    c5text.rotation.set(Math.PI/2,0,0);
    scene.add(c5text);
});

// modelo texto k1
loader.load('/models/text/k1.gltf', result => {
    var k1text = result.scene.children[0];
    // para las sombras
    k1text.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    k1text.position.set(-39,5,-40);
    k1text.scale.set(3,3,3);
    k1text.rotation.set(Math.PI/2,0,0);
    scene.add(k1text);
});
// modelo texto cafeteria
loader.load('/models/text/cafe.gltf', result => {
    var cafetext = result.scene.children[0];
    // para las sombras
    cafetext.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    cafetext.position.set(-11,5,-165);
    cafetext.scale.set(3,3,3);
    cafetext.rotation.set(Math.PI/2,0,0);
    scene.add(cafetext);
});
// modelo texto salon mayor
loader.load('/models/text/smayor.gltf', result => {
    var mayortext = result.scene.children[0];
    // para las sombras
    mayortext.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    mayortext.position.set(-39.5,12,-165);
    mayortext.scale.set(3,3,3);
    mayortext.rotation.set(Math.PI/2,0,0);
    scene.add(mayortext);
});
// modelo texto salon altiplano
loader.load('/models/text/l.gltf', result => {
    var ltext = result.scene.children[0];
    // para las sombras
    ltext.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    ltext.position.set(25,5,140);
    ltext.scale.set(3,3,3);
    ltext.rotation.set(Math.PI/2,0,Math.PI);
    scene.add(ltext);
});
// modelo texto e
loader.load('/models/text/e.gltf', result => {
    var etext = result.scene.children[0];
    // para las sombras
    etext.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    etext.position.set(-40,5,81);
    etext.scale.set(3,3,3);
    etext.rotation.set(Math.PI/2,0,-Math.PI/2);
    scene.add(etext);
});
// modelo texto f
loader.load('/models/text/f.gltf', result => {
    var ftext = result.scene.children[0];
    // para las sombras
    ftext.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    ftext.position.set(-70,5,61);
    ftext.scale.set(3,3,3);
    ftext.rotation.set(Math.PI/2,0,-Math.PI/2);
    scene.add(ftext);
});
// modelo texto m1
loader.load('/models/text/m1.gltf', result => {
    var m1text = result.scene.children[0];
    // para las sombras
    m1text.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    m1text.position.set(-92,5,61.5);
    m1text.scale.set(3,3,3);
    m1text.rotation.set(Math.PI/2,0,-Math.PI/2);
    scene.add(m1text);
});
// modelo texto m2
loader.load('/models/text/m2.gltf', result => {
    var m2text = result.scene.children[0];
    // para las sombras
    m2text.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    m2text.position.set(-105,5,61.5);
    m2text.scale.set(3,3,3);
    m2text.rotation.set(Math.PI/2,0,-Math.PI/2);
    scene.add(m2text);
});
// modelo texto n
loader.load('/models/text/n.gltf', result => {
    var ntext = result.scene.children[0];
    // para las sombras
    ntext.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    ntext.position.set(-116,5,61);
    ntext.scale.set(3,3,3);
    ntext.rotation.set(Math.PI/2,0,-Math.PI/2);
    scene.add(ntext);
});
// modelo texto d
loader.load('/models/text/caja.gltf', result => {
    var cajatext = result.scene.children[0];
    // para las sombras
    cajatext.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    cajatext.position.set(-57.5,5,140);
    cajatext.scale.set(3,3,3);
    cajatext.rotation.set(Math.PI/2,0,Math.PI);
    scene.add(cajatext);
});
// modelo texto invernadero
loader.load('/models/text/inver.gltf', result => {
    var invertext = result.scene.children[0];
    // para las sombras
    invertext.traverse(n =>{
        if(n.isMesh){
            n.castShadow = true;
            n.receiveShadow = true;
            if(n.material.map) n.material.map.anisotropy = 16;
        }
    });
    invertext.position.set(-17,5,150);
    invertext.scale.set(3,3,3);
    invertext.rotation.set(Math.PI/2,0,Math.PI);
    scene.add(invertext);
});



};



/* ---------------------- Actualización de tamaños ----------------------*/
const sizes = {
    width: window.innerWidth *0.99,
    height: window.innerHeight *0.91
}

window.addEventListener('resize', () =>{
    // Update sizes
    sizes.width = window.innerWidth *0.99
    sizes.height = window.innerHeight *0.91
,
    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));





/* ---------------------- Configuracion de controles ----------------------*/
// crear variable para usar orbitcontrols
let controls = new OrbitControls(camera, renderer.domElement);
// distancia de acercamiento y alejamiento
//40,160
controls.minDistance = 40;
controls.maxDistance = 150;
// configuración de rotación máxima
controls.maxPolarAngle = Math.PI / 3;
// movimiento lateral
controls.screenSpacePanning = false;
controls.enableRotate = true;


/* ---------------------- Configuracion de skybox ----------------------*/
let cubeloader = new THREE.CubeTextureLoader();
var skybox = cubeloader.load([
    "img/skybox/posx.jpg",
    "img/skybox/negx.jpg",
    "img/skybox/posy.jpg",
    "img/skybox/negy.jpg",
    "img/skybox/posz.jpg",
    "img/skybox/negz.jpg"
]);
scene.background = skybox;

/* ---------------------- Configuracion de luces ----------------------*/
// ambient
let ambientLight = new THREE.AmbientLight( 0xFFFFFF, 0.5 );
    scene.add(ambientLight); 

// hem light
//let hemilight = new THREE.HemisphereLight( 0x0000ff, 0x00ff00, 0.6 ); 
let hemilight = new THREE.HemisphereLight(0xF3F3F3, 0x000000, 2);
    scene.add(hemilight);
    // para el tono de la luz en la escena en general
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 2.3;


// luz direccional
const dirLight = new THREE.DirectionalLight( 0xffffff, 2 );
    dirLight.color.setHSL( 0.1, 1, 0.95 );
    dirLight.position.set( - 1, 1.75, 1 );
    dirLight.position.multiplyScalar( 30 );
    scene.add( dirLight );

    // sombra de la luz direccional
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    const d = 250;
    dirLight.shadow.camera.left = - d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = - d;

    dirLight.shadow.camera.far = 3500;
    dirLight.shadow.bias = - 0.0001;

    // helper de luz    
    //const dirLightHelper = new THREE.DirectionalLightHelper( dirLight, 10 );
    //scene.add( dirLightHelper );
                

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

/* ---------------------- Cargado de modelos 3D ----------------------*/
models();



// agregar el domELement al documento html
document.body.appendChild(renderer.domElement);

// para animación
const clock = new THREE.Clock()

// crear función para llamar a toda la configuracion
const tick = () => {

    const elapsedTime = clock.getElapsedTime();

    // Update Orbital Controls
    // controls.reset();
    // controls.update();

    // Render
    renderer.render(scene, camera);
    // console.log("positcion: ", camera.position);
    // console.log("rotacion: ", camera.rotation);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);

}

// llamar a la función general

tick();


export {camera, scene, model, renderer, controls, loader};