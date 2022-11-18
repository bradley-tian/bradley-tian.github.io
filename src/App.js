
import './main.css'
import { useEffect } from 'react'
import * as THREE from 'three'
import Section from './Sections'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

function App() {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

    const canvas = document.getElementById('ThreeJSCanvas');

    const renderer = new THREE.WebGLRenderer({
      canvas,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(40);
    renderer.render(scene, camera);

    //Torus Geometry and Materials
    const geometry = new THREE.TorusGeometry(8, 3, 16, 100)
    const material = new THREE.MeshStandardMaterial({
      color: 0xFFFFFF,
      wireframe: true,
    });

    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus)

    //Lighting
    const pointLight = new THREE.PointLight(0x00F9FF);
    pointLight.position.set(30, 20, 30)
    scene.add(pointLight)

    const ambientLight = new THREE.AmbientLight(0xFF4BFC, 0.6);
    scene.add(ambientLight)

    //Helpers
    // const lightHelper = new THREE.PointLightHelper(pointLight);
    // const gridHelper = new THREE.GridHelper(200, 50);
    // scene.add(lightHelper, gridHelper);

    //Object Generation
    function addStar() {
      const geometry = new THREE.SphereGeometry(0.15, 12, 12);
      const material = new THREE.MeshBasicMaterial({
        color: 0xFFFFFF,
      })
      const star = new THREE.Mesh(geometry, material);
      const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

      star.position.set(x, y, z);
      scene.add(star)
    }

    Array(200).fill().forEach(addStar)

    //Texture Loading
    const background = new THREE.TextureLoader().load('src/assets/galaxy.jpeg');
    scene.background = background;

    const loadManager = new THREE.LoadingManager();
    const loader = new THREE.TextureLoader(loadManager);

    const myTexture = loader.load('src/assets/photoSelf.jpeg');
    const sideTexture = loader.load('src/assets/galaxy.jpeg');

    const materials = [
      new THREE.MeshBasicMaterial({map: sideTexture}),
      new THREE.MeshBasicMaterial({map: sideTexture}),
      new THREE.MeshBasicMaterial({map: sideTexture}),
      new THREE.MeshBasicMaterial({map: sideTexture}),
      new THREE.MeshBasicMaterial({map: myTexture}),
      new THREE.MeshBasicMaterial({map: myTexture}),
    ];

    const myself = new THREE.Mesh(
      new THREE.BoxGeometry(1.05, 1.05, 0.03),
      materials,
    );
    // myself.material.side = THREE.DoubleSide;

    myself.position.x = 1.05;
    myself.position.y = 0.2;
    myself.position.z = -1.5; 
    scene.add(myself);

    //Professional Experiences 
    const fonts = new FontLoader();
    fonts.load('src/neonFonts.json',
    (droidFont) => {
      const textGeo = new TextGeometry('Professional Experiences', {
        height: 0.02,
        size: 0.18,
        font: droidFont,
      });
      const textMat = new THREE.MeshStandardMaterial({
        color: 0xFFFFFF,
      });
      const proTitle = new THREE.Mesh(textGeo, textMat);
      proTitle.position.x = -2.5;
      proTitle.position.y = 0.2;
      proTitle.position.z = 7;
      scene.add(proTitle);
    });

    const buttonGeo = new THREE.OctahedronGeometry(0.42, 0)
    const buttonMat = new THREE.MeshStandardMaterial({
      color: 0xFFFFFF,
    });

    const professional = new THREE.Mesh(buttonGeo, buttonMat);
    scene.add(professional);
    professional.position.x = 2.6;
    professional.position.y = 0.3;
    professional.position.z = 6.7;

    //Google Ball
    const googleTexture = new THREE.TextureLoader().load('src/assets/googleTexture.png');
    const googleBall = new THREE.Mesh(
      new THREE.SphereGeometry(1.6, 32, 32),
      new THREE.MeshBasicMaterial({
        map: googleTexture,
        shadowSide: THREE.BackSide,
      })
    )
    scene.add(googleBall);
    googleBall.position.z = 11;
    googleBall.position.x = 6.2;

    //Poof Ball
    const poofTexture = new THREE.TextureLoader().load('src/assets/poofTexture.png');
    const poofBall = new THREE.Mesh(
      new THREE.SphereGeometry(1.6, 32, 32),
      new THREE.MeshBasicMaterial({
        map: poofTexture,
        shadowSide: THREE.BackSide,
      })
    )
    scene.add(poofBall);
    poofBall.position.z = 17.8;
    poofBall.position.x = -5.6;

    //LaunchParty Ball
    const LPTexture = new THREE.TextureLoader().load('src/assets/LPTexture.png');
    const LPBall = new THREE.Mesh(
      new THREE.SphereGeometry(1.6, 32, 32),
      new THREE.MeshBasicMaterial({
        map: LPTexture,
        shadowSide: THREE.BackSide,
      })
    )
    scene.add(LPBall);
    LPBall.position.z = 27;
    LPBall.position.y = 0.3;
    LPBall.position.x = 6.2;

    //M1 Ball
    const M1Texture = new THREE.TextureLoader().load('src/assets/M1FinanceTexture.png');
    const M1Ball = new THREE.Mesh(
      new THREE.SphereGeometry(1.6, 32, 32),
      new THREE.MeshBasicMaterial({
        map: M1Texture,
        shadowSide: THREE.BackSide,
      })
    )
    scene.add(M1Ball);
    M1Ball.position.z = 33.6;
    M1Ball.position.y = 0.4;
    M1Ball.position.x = -5.8;

    //Awards
    fonts.load('src/neonFonts.json',
    (droidFont) => {
      const textGeo = new TextGeometry('Awards', {
        height: 0.02,
        size: 0.26,
        font: droidFont,
      });
      const textMat = new THREE.MeshStandardMaterial({
        color: 0xFFFFFF,
      });
      const awardTitle = new THREE.Mesh(textGeo, textMat);
      awardTitle.position.x = -0.1;
      awardTitle.position.y = 0.8;
      awardTitle.position.z = 47;
      scene.add(awardTitle);
    });

    const award = new THREE.Mesh(buttonGeo, buttonMat);
    scene.add(award);
    award.position.x = 2.15;
    award.position.y = 0.9;
    award.position.z = 47;

    //Controls
    function moveCamera() {
      const top = document.body.getBoundingClientRect().top;

      camera.position.z = top * (-0.01);
      camera.position.x = top * (-0.0002);
      camera.position.y = top * (-0.0002);

    }

    document.body.onscroll = moveCamera;
    moveCamera();

    // const controls = new OrbitControls(camera, renderer.domElement);

    function animate() {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      torus.rotation.z -= 0.01;

      myself.rotation.x += 0.0001;
      myself.rotation.y += 0.002;

      professional.rotation.x += 0.01;
      professional.rotation.y += 0.005;

      googleBall.rotation.y += 0.03;
      poofBall.rotation.y -= 0.02;
      LPBall.rotation.y += 0.025;
      M1Ball.rotation.y -= 0.035;

      award.rotation.x += 0.01;
      award.rotation.y += 0.005;

      // controls.update();

      renderer.render(scene, camera);
    }

    animate();

  }, []);

  return (

    <div>
      <canvas id="ThreeJSCanvas"></canvas>
      <Section/>
    </div>

  )
}

export default App
