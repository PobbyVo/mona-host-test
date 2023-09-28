export default function CanvasModule() {

    
    // $(function () {
    //     "use strict";
    
    //     var weatherPressure = 0;
    //     var weatherSpeed = 0;

    //     // should have weather data or defaults in place
    
    //     // assuming jquery loaded
    //     var serImg = $(".banner-img-server-js");
    //     var container = $("#logo-anim");
    //     var containerW = container.width();
    //     var containerH = container.height();
    
    //     var scene;
    //     var camera;
    //     var renderer;
    
    //     $(document).ready(function () {
    //         // start anim
    //         initAnim();
    //     });
    
    //     function initAnim() {
    //         scene = new THREE.Scene();
    //         //  75
    //         camera = new THREE.PerspectiveCamera(75, containerW / containerH, 1, 1000);
    //         camera.position.z = 650;
    //         renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    //         renderer.setSize(containerW, containerH);
    //         renderer.setPixelRatio(window.devicePixelRatio);
    //         container.append(renderer.domElement);
    
    //         doWebGL();

    //         function doWebGL() {
    //             var TWO_PI = Math.PI * 2;
    //             var HALF_PI = Math.PI / 2;
    //             var QUARTER_PI = Math.PI / 4;
    
    //             var maxVLayers = 24;
    //             var minVLayers = 4;
    //             var vLayers = Math.round( ((maxVLayers - minVLayers) * weatherPressure) + minVLayers );
                
    //             var tailResolution = 90; // segments in tail for full circumference
    //             var maxTailLength = 0.5; //complex: 0.25 /  small: 0.5 // Norm: 0.33
    //             var tailSegments = Math.round(tailResolution * maxTailLength);
    //             // var vMaxRadius = containerH / 1.4;
    //             var vMaxRadius = containerH * 1.1;
    //             // var vMaxRadius = containerH;
    //             // var vHeight = containerH * 1.4;
    //             var vHeight = containerH * 1.8;
    //             var yOffset = -vHeight / 2 - 30; // half height and push toward bottom of canvas
    
    //             var camInit = 0.7;//HALF_PI;
    //             var camTarget = 0.5;
    
    //             var maxPlotRadius = 25; // size of dot
    //             var minPlotRadius = 7;
    //             var plotRadius = maxPlotRadius - Math.round((maxPlotRadius - minPlotRadius) * weatherPressure);
    
    //             var maxTailWeight = plotRadius; // half plot diameter 
    
    //             var minRotationIncrement = TWO_PI / 600;
    //             var maxRotationIncrement = TWO_PI / 150;
    //             var linearRotationPerFrame = ((maxRotationIncrement - minRotationIncrement) * weatherSpeed) + minRotationIncrement;
    
    //             var maxAnimationLength = 5; //20; // seconds
    //             var animationProgress = 0;
    
    //             var plotColor = 0x5AFFFA;
    //             var plotOpacity = 1;
    
    //             var tailColor = 0x5AFFFA;
    //             var tailOpacity = 0.33;

    //             var vSpheregeometry = new THREE.SphereGeometry(plotRadius, 20, 20);
    //             var vSphereMaterial = new THREE.MeshBasicMaterial({ color: plotColor });
    //             var vTailMaterial = new THREE.MeshBasicMaterial({ color: tailColor, side: THREE.DoubleSide, wireframe: false, transparent: true, opacity: tailOpacity });
    
    //             var targetFrameRate = 30;
    
    //             var vSpheres = [];
    //             var vTails = [];
    //             var initRotations = [];
    //             var targetRotations = [];
    
    //             init();
    
    //             function init() {
    //                 createServer();
    //                 createVSpheres();
    //                 createVTails();
    //             }

    //             function createServer() {
    //                 const serverMaterial = new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture('./assets/images/banner-server.png')})
    //                 var serverMesh = new THREE.Mesh(new THREE.PlaneGeometry(serImg.width(), serImg.height()), serverMaterial)
    //                 scene.add(serverMesh)
    //             }
    
    //             function createVSpheres() {
    //                 for (var i = 0; i < vLayers; i++) {
    //                     var sphereMesh = new THREE.Mesh(vSpheregeometry, vSphereMaterial);
    //                     scene.add(sphereMesh);
    //                     vSpheres[i] = sphereMesh;
    //                     initRotations[i] = getRandom(0, 1);
    //                     targetRotations[i] = getRandom(0, 1);
    //                 }
    //             }
    
    //             function createVTails() {
    //                 for (var i = 0; i < vLayers; i++) {
    //                     var vTailGeometry = new THREE.PlaneGeometry(0, 0, tailSegments, 1); // arbitary w,h
    //                     var tailMesh = new THREE.Mesh(vTailGeometry, vTailMaterial);
    //                     scene.add(tailMesh);
    //                     vTails[i] = tailMesh;
    //                 }
    //             }
    
    //             function drawLayers() {
    //                 for (var l = 1; l <= vLayers; l++) {
    //                     var layerAnimationTarget = targetRotations[l] * TWO_PI; // (value of property, like angle in radians) 
    //                     var layerAnimationLength = maxAnimationLength; // (time) this could be randomised later
    //                     var layerAnimationFrames = layerAnimationLength * targetFrameRate;
    //                     var layerAnimationProgress = Math.min((animationProgress / layerAnimationFrames), 1);
    //                     var layerAnimationProgressEased = GSAPEase(layerAnimationProgress);
    //                     var layerAngleStart = initRotations[l] * TWO_PI + t * (linearRotationPerFrame * layerAnimationProgressEased);
    //                     var layerAnimationNext = layerAngleStart + (layerAnimationProgressEased * layerAnimationTarget);
    
    //                     tail(l, layerAnimationNext, layerAnimationProgressEased);
    //                     plot(l, layerAnimationNext, layerAnimationProgressEased);
    //                 }
    //             }
    
    //             function plot(layer, next, progress) {
    //                 var plotCenterX = 0;
    //                 var plotCenterY = 0;
    //                 var plotCenterZ = 0;
    //                 // var layerScale = Math.tan((QUARTER_PI / vLayers) * layer);
    //                 var layerScale = 1;
    
    //                 var layerRadius = vMaxRadius * layerScale;
    
    //                 var nextX = plotCenterX + (layerRadius * Math.cos(next));
    //                 var nextY = (yOffset + (vHeight / vLayers) * layer);
    //                 var nextZ = plotCenterZ + (layerRadius * Math.sin(next));
    
    //                 var sphere = vSpheres[layer - 1];
    //                 var sphereScale = layerScale * progress;
    //                 sphere.scale.set(sphereScale, sphereScale, sphereScale);
    //                 sphere.position.set(nextX, nextY, nextZ);
    //             }
    
    //             function tail(layer, next, progress) {
    //                 var plotCenterX = 0;
    //                 var plotCenterY = 0;
    //                 var plotCenterZ = 0;
    //                 // var layerScale = Math.tan((QUARTER_PI / vLayers) * layer);
    //                 var layerScale = 1;
    //                 var layerRadius = vMaxRadius * layerScale;
    
    //                 var radianIncrement = (TWO_PI * progress) / tailResolution;
    //                 //var tailLength = maxTailLength*progress;  
    
    //                 var tail = vTails[layer - 1];
    //                 var tailVertexPairs = tail.geometry.vertices.length / 2;
    
    //                 for (var v = tailVertexPairs - 1; v >= 0; v--) {
    
    //                     var pProximity = 1 - (Math.max(1, v) / tailVertexPairs);
    //                     var tailWeight = (progress * (maxTailWeight * layerScale)) * pProximity;
    
    //                     var nextAngle = next - (v * radianIncrement);
    //                     var nextX = plotCenterX + (layerRadius * Math.cos(nextAngle));
    //                     var nextY = (yOffset + (vHeight / vLayers) * layer) + tailWeight / 2;
    //                     var nextZ = plotCenterZ + (layerRadius * Math.sin(nextAngle));
    
    
    //                     tail.geometry.vertices[v].x = nextX;
    //                     tail.geometry.vertices[v].y = nextY;
    //                     tail.geometry.vertices[v].z = nextZ;
    
    //                     var oppositeV = v + tailVertexPairs;
    //                     tail.geometry.vertices[oppositeV].x = nextX;
    //                     tail.geometry.vertices[oppositeV].y = nextY - tailWeight;
    //                     tail.geometry.vertices[oppositeV].z = nextZ;
    
    //                     tail.geometry.verticesNeedUpdate = true;
    
    //                 }
    //             }

    //             var t = 0;
    
    //             // camera.position.z = 550;
    
    //             var render = function () {
    //                 requestAnimationFrame(render);
    //                 animationProgress++;
    //                 drawLayers();
    
    //                 t++;
    //                 // animateCamera();
    //                 renderer.render(scene, camera);
    //             };
    
    //             render();

    //             var rotation = HALF_PI;
    //             function animateCamera() {
    //                 var camAnimationLength = maxAnimationLength; // could be adjusted later
    //                 var camAnimationFrames = camAnimationLength * targetFrameRate;
    //                 var camAnimationProgress = Math.min((animationProgress / camAnimationFrames), 1);
    //                 // console.log(camAnimationProgress);
    //                 var camAnimationProgressEased = GSAPEase(camAnimationProgress);
    
    //                 rotation = map_range(camAnimationProgressEased, 0, 1, camInit, camTarget)
    
    //                 //rotation -= 0.0025;
    //                 camera.position.x = 0;
    //                 camera.position.y = Math.sin(rotation) * 600;
    //                 camera.position.z = Math.cos(rotation) * 600;
    //                 camera.lookAt(scene.position); // the origin
    //             }
    
    //             /* alternative to above, the GSAP library */
    //             function GSAPEase(t) {
    //                 return t;
    //                 // return Power4.easeInOut.getRatio(t);
    //                 // return Expo.easeInOut.getRatio(t);
    //             }
    
    //             // input, input low, input high, target low, target high 
    //             function map_range(value, low1, high1, low2, high2) {
    //                 return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
    //             }
    
    //             /* get random value frim range */
    //             function getRandom(min, max) {
    //                 return Math.random() * (max - min) + min;
    //             }
    //         }
    //     }
    // });
}