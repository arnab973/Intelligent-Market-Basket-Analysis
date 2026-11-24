/**
 * BasketIQ - Premium 3D WebGL Visualization Engine
 * Powered by Three.js
 * 
 * Features:
 * 1. Global 3D ambient data constellation & particle starfield with mouse parallax
 * 2. Hero Interactive 3D Shopping Basket & Orbiting Floating Grocery Items with 360° drag controls
 */

// =========================================================================
// 1. GLOBAL AMBIENT 3D BACKGROUND CONSTELLATION
// =========================================================================
let bgScene, bgCamera, bgRenderer;
let bgParticles, bgLines, bgNodesGroup;
let bgMouseX = 0, bgMouseY = 0;
let bgTargetX = 0, bgTargetY = 0;

function initGlobalBackground() {
  const container = document.getElementById('webgl-container');
  if (!container) return;

  bgScene = new THREE.Scene();
  bgScene.fog = new THREE.FogExp2(0x030712, 0.0016);

  bgCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 3000);
  bgCamera.position.z = 700;

  bgRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  bgRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  bgRenderer.setSize(window.innerWidth, window.innerHeight);
  container.innerHTML = '';
  container.appendChild(bgRenderer.domElement);

  // Ambient lighting
  const ambLight = new THREE.AmbientLight(0xffffff, 0.6);
  bgScene.add(ambLight);

  const pLight1 = new THREE.PointLight(0x38bdf8, 2.0, 1000);
  pLight1.position.set(250, 150, 200);
  bgScene.add(pLight1);

  const pLight2 = new THREE.PointLight(0xa855f7, 1.8, 1000);
  pLight2.position.set(-250, -150, 150);
  bgScene.add(pLight2);

  // Background Starfield Particles
  const starCount = 1200;
  const starGeo = new THREE.BufferGeometry();
  const starPositions = new Float32Array(starCount * 3);
  const starColors = new Float32Array(starCount * 3);

  const palette = [
    [0.22, 0.74, 0.97], // cyan
    [0.66, 0.33, 0.97], // purple
    [0.06, 0.72, 0.51], // emerald
    [0.96, 0.62, 0.07]  // amber
  ];

  for (let i = 0; i < starCount * 3; i += 3) {
    starPositions[i] = (Math.random() - 0.5) * 2200;
    starPositions[i + 1] = (Math.random() - 0.5) * 2200;
    starPositions[i + 2] = (Math.random() - 0.5) * 1600;

    const col = palette[Math.floor(Math.random() * palette.length)];
    starColors[i] = col[0];
    starColors[i + 1] = col[1];
    starColors[i + 2] = col[2];
  }

  starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

  const starMat = new THREE.PointsMaterial({
    size: 2.5,
    vertexColors: true,
    transparent: true,
    opacity: 0.65,
    blending: THREE.AdditiveBlending
  });

  bgParticles = new THREE.Points(starGeo, starMat);
  bgScene.add(bgParticles);

  // Floating Affinity Nodes & Laser Links
  bgNodesGroup = new THREE.Group();
  bgLines = new THREE.Group();

  const affinityNodes = [
    { name: "Bananas", color: 0xfacc15, size: 18, pos: [-220, 110, 40] },
    { name: "Organic Strawberries", color: 0xef4444, size: 16, pos: [190, 80, 60] },
    { name: "Organic Hass Avocado", color: 0x10b981, size: 15, pos: [90, -110, 90] },
    { name: "Organic Baby Spinach", color: 0x22c55e, size: 14, pos: [-70, -90, 40] },
    { name: "Sparkling Seltzer", color: 0x06b6d4, size: 13, pos: [220, -80, -30] },
    { name: "Bell Peppers", color: 0xf97316, size: 13, pos: [-190, -70, 70] },
    { name: "Lemons & Limes", color: 0xfde047, size: 12, pos: [-140, 160, -50] }
  ];

  const sphereGeo = new THREE.SphereGeometry(1, 24, 24);
  affinityNodes.forEach(node => {
    const mat = new THREE.MeshPhysicalMaterial({
      color: node.color,
      emissive: node.color,
      emissiveIntensity: 0.5,
      roughness: 0.2,
      metalness: 0.1,
      clearcoat: 0.8
    });
    const mesh = new THREE.Mesh(sphereGeo, mat);
    mesh.position.set(...node.pos);
    mesh.scale.setScalar(node.size);
    mesh.userData = { initialPos: [...node.pos], phase: Math.random() * Math.PI * 2 };
    bgNodesGroup.add(mesh);
  });

  // Connecting Affinity Edges
  const edgePairs = [[0, 1], [0, 2], [1, 2], [2, 3], [0, 6], [1, 4], [0, 5]];
  const lineMat = new THREE.LineBasicMaterial({
    color: 0x38bdf8,
    transparent: true,
    opacity: 0.35,
    blending: THREE.AdditiveBlending
  });

  edgePairs.forEach(pair => {
    const p1 = new THREE.Vector3(...affinityNodes[pair[0]].pos);
    const p2 = new THREE.Vector3(...affinityNodes[pair[1]].pos);
    const geo = new THREE.BufferGeometry().setFromPoints([p1, p2]);
    const line = new THREE.Line(geo, lineMat);
    bgLines.add(line);
  });

  bgScene.add(bgNodesGroup);
  bgScene.add(bgLines);

  window.addEventListener('mousemove', (e) => {
    bgMouseX = (e.clientX - window.innerWidth / 2) * 0.35;
    bgMouseY = (e.clientY - window.innerHeight / 2) * 0.35;
  }, { passive: true });

  window.addEventListener('resize', onBgResize, { passive: true });
  animateGlobalBackground();
}

function onBgResize() {
  if (!bgCamera || !bgRenderer) return;
  bgCamera.aspect = window.innerWidth / window.innerHeight;
  bgCamera.updateProjectionMatrix();
  bgRenderer.setSize(window.innerWidth, window.innerHeight);
}

function animateGlobalBackground() {
  requestAnimationFrame(animateGlobalBackground);

  bgTargetX += (bgMouseX - bgTargetX) * 0.035;
  bgTargetY += (bgMouseY - bgTargetY) * 0.035;

  bgCamera.position.x = bgTargetX;
  bgCamera.position.y = -bgTargetY + 30;
  bgCamera.lookAt(bgScene.position);

  if (bgParticles) bgParticles.rotation.y += 0.0004;
  if (bgNodesGroup) {
    bgNodesGroup.rotation.y += 0.0012;
    bgLines.rotation.y += 0.0012;

    const time = Date.now() * 0.0015;
    bgNodesGroup.children.forEach(mesh => {
      const { initialPos, phase } = mesh.userData;
      mesh.position.y = initialPos[1] + Math.sin(time + phase) * 8;
    });
  }

  bgRenderer.render(bgScene, bgCamera);
}


// =========================================================================
// 2. HERO INTERACTIVE 3D SHOPPING BASKET & FLOATING GROCERY ITEMS
// =========================================================================
let heroScene, heroCamera, heroRenderer;
let heroBasketGroup, heroItemsGroup, heroLinesGroup;
let isDraggingHero = false;
let prevHeroMouseX = 0, prevHeroMouseY = 0;
let heroTargetRotX = 0.25, heroTargetRotY = -0.4;
let heroCurRotX = 0.25, heroCurRotY = -0.4;

function initHeroBasket3D() {
  const container = document.getElementById('hero-basket-3d');
  if (!container) return;

  const width = container.clientWidth || 480;
  const height = container.clientHeight || 420;

  heroScene = new THREE.Scene();

  heroCamera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  heroCamera.position.set(0, 45, 160);
  heroCamera.lookAt(0, 0, 0);

  heroRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  heroRenderer.setSize(width, height);
  heroRenderer.toneMapping = THREE.ACESFilmicToneMapping;
  container.innerHTML = '';
  container.appendChild(heroRenderer.domElement);

  // Studio Lighting setup
  const ambLight = new THREE.AmbientLight(0xffffff, 0.7);
  heroScene.add(ambLight);

  const mainDirLight = new THREE.DirectionalLight(0x38bdf8, 2.2);
  mainDirLight.position.set(100, 150, 120);
  heroScene.add(mainDirLight);

  const rimLight = new THREE.DirectionalLight(0xa855f7, 1.8);
  rimLight.position.set(-120, 80, -100);
  heroScene.add(rimLight);

  const underLight = new THREE.PointLight(0x06b6d4, 2.5, 200);
  underLight.position.set(0, -35, 10);
  heroScene.add(underLight);

  // Master pivot group for mouse drag rotation
  heroBasketGroup = new THREE.Group();
  heroScene.add(heroBasketGroup);

  // -------------------------------------------------------------
  // Construct the 3D Shopping Basket Model
  // -------------------------------------------------------------
  const chromeMat = new THREE.MeshStandardMaterial({
    color: 0x93c5fd,
    metalness: 0.85,
    roughness: 0.15
  });

  const neonCyanMat = new THREE.MeshStandardMaterial({
    color: 0x06b6d4,
    emissive: 0x06b6d4,
    emissiveIntensity: 0.6,
    metalness: 0.5,
    roughness: 0.2
  });

  const wireMat = new THREE.MeshStandardMaterial({
    color: 0x60a5fa,
    metalness: 0.9,
    roughness: 0.2
  });

  // Basket dimensions
  const topW = 68, topD = 48, topH = 2.2;
  const botW = 50, botD = 34, botH = 2;
  const basketHeight = 32;

  // 1. Top Outer Rim
  const topRimGeo = createRectFrameGeometry(topW, topD, topH, 1.5);
  const topRimMesh = new THREE.Mesh(topRimGeo, neonCyanMat);
  topRimMesh.position.y = basketHeight / 2;
  heroBasketGroup.add(topRimMesh);

  // 2. Bottom Base Rim
  const botRimGeo = createRectFrameGeometry(botW, botD, botH, 1.2);
  const botRimMesh = new THREE.Mesh(botRimGeo, chromeMat);
  botRimMesh.position.y = -basketHeight / 2;
  heroBasketGroup.add(botRimMesh);

  // 3. Four Corner Angled Struts
  const corners = [
    { tx: topW/2, tz: topD/2, bx: botW/2, bz: botD/2 },
    { tx: -topW/2, tz: topD/2, bx: -botW/2, bz: botD/2 },
    { tx: topW/2, tz: -topD/2, bx: botW/2, bz: -botD/2 },
    { tx: -topW/2, tz: -topD/2, bx: -botW/2, bz: -botD/2 }
  ];

  corners.forEach(c => {
    const p1 = new THREE.Vector3(c.bx, -basketHeight / 2, c.bz);
    const p2 = new THREE.Vector3(c.tx, basketHeight / 2, c.tz);
    const strut = createCylinderBetweenPoints(p1, p2, 1.2, chromeMat);
    heroBasketGroup.add(strut);
  });

  // 4. Side Wire Ribs (Vertical and Horizontal Wire Grid)
  // Horizontal rings around basket
  const ringCount = 3;
  for (let r = 1; r <= ringCount; r++) {
    const t = r / (ringCount + 1);
    const curY = -basketHeight / 2 + t * basketHeight;
    const curW = botW + (topW - botW) * t;
    const curD = botD + (topD - botD) * t;
    const ringGeo = createRectFrameGeometry(curW, curD, 0.8, 0.8);
    const ringMesh = new THREE.Mesh(ringGeo, wireMat);
    ringMesh.position.y = curY;
    heroBasketGroup.add(ringMesh);
  }

  // Vertical side wires on long sides
  const wireCols = 7;
  for (let c = 1; c <= wireCols; c++) {
    const t = c / (wireCols + 1) - 0.5;
    // Front side
    const p1f = new THREE.Vector3(botW * t, -basketHeight / 2, botD / 2);
    const p2f = new THREE.Vector3(topW * t, basketHeight / 2, topD / 2);
    heroBasketGroup.add(createCylinderBetweenPoints(p1f, p2f, 0.6, wireMat));
    // Back side
    const p1b = new THREE.Vector3(botW * t, -basketHeight / 2, -botD / 2);
    const p2b = new THREE.Vector3(topW * t, basketHeight / 2, -topD / 2);
    heroBasketGroup.add(createCylinderBetweenPoints(p1b, p2b, 0.6, wireMat));
  }

  // Bottom Mesh Grid
  for (let i = -3; i <= 3; i++) {
    const x = (botW / 2) * (i / 3.5);
    const p1 = new THREE.Vector3(x, -basketHeight / 2 + 0.5, -botD / 2 + 2);
    const p2 = new THREE.Vector3(x, -basketHeight / 2 + 0.5, botD / 2 - 2);
    heroBasketGroup.add(createCylinderBetweenPoints(p1, p2, 0.5, wireMat));
  }

  // 5. Dual Arched Handles with Metallic Hinges
  const handleRadius = 26;
  const handleTube = 1.3;
  // Handle 1 (Front edge)
  const handleGeo1 = new THREE.TorusGeometry(handleRadius, handleTube, 16, 40, Math.PI);
  const handleMesh1 = new THREE.Mesh(handleGeo1, chromeMat);
  handleMesh1.position.set(0, basketHeight / 2 + 1, topD / 2 - 2);
  handleMesh1.rotation.x = -Math.PI / 10;
  heroBasketGroup.add(handleMesh1);

  // Handle 2 (Back edge)
  const handleMesh2 = new THREE.Mesh(handleGeo1, chromeMat);
  handleMesh2.position.set(0, basketHeight / 2 + 1, -topD / 2 + 2);
  handleMesh2.rotation.x = Math.PI / 10;
  handleMesh2.rotation.z = Math.PI; // Inverted curve
  heroBasketGroup.add(handleMesh2);

  // 6. Glowing Bottom Cyber Disc & Ground Shadow
  const shadowGeo = new THREE.RingGeometry(18, 48, 32);
  const shadowMat = new THREE.MeshBasicMaterial({
    color: 0x06b6d4,
    transparent: true,
    opacity: 0.22,
    side: THREE.DoubleSide
  });
  const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
  shadowMesh.rotation.x = Math.PI / 2;
  shadowMesh.position.y = -basketHeight / 2 - 4;
  heroBasketGroup.add(shadowMesh);

  // -------------------------------------------------------------
  // Construct Orbiting 3D Stylized Grocery Objects
  // -------------------------------------------------------------
  heroItemsGroup = new THREE.Group();
  heroBasketGroup.add(heroItemsGroup);

  const groceryItems = [];

  // Item 1: 🍌 3D Curved Banana
  const bananaCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-8, 3, 0),
    new THREE.Vector3(-4, -2, 0),
    new THREE.Vector3(3, -2.5, 0),
    new THREE.Vector3(8, 2, 0)
  ]);
  const bananaGeo = new THREE.TubeGeometry(bananaCurve, 20, 2.8, 12, false);
  const bananaMat = new THREE.MeshStandardMaterial({
    color: 0xfacc15,
    emissive: 0xfacc15,
    emissiveIntensity: 0.35,
    roughness: 0.3
  });
  const bananaMesh = new THREE.Mesh(bananaGeo, bananaMat);
  bananaMesh.userData = { radius: 52, speed: 0.015, phase: 0, yOffset: 8, bobSpeed: 0.002 };
  heroItemsGroup.add(bananaMesh);
  groceryItems.push(bananaMesh);

  // Item 2: 🥑 3D Sculpted Avocado
  const avocadoGeo = new THREE.SphereGeometry(6, 24, 24);
  avocadoGeo.scale(1, 1.35, 0.9);
  const avocadoMat = new THREE.MeshStandardMaterial({
    color: 0x047857,
    emissive: 0x10b981,
    emissiveIntensity: 0.3,
    roughness: 0.4
  });
  const avocadoMesh = new THREE.Mesh(avocadoGeo, avocadoMat);
  // Add inner seed bulge
  const seedGeo = new THREE.SphereGeometry(3.2, 16, 16);
  const seedMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.7 });
  const seedMesh = new THREE.Mesh(seedGeo, seedMat);
  seedMesh.position.set(0, -1, 3.2);
  avocadoMesh.add(seedMesh);
  avocadoMesh.userData = { radius: 56, speed: 0.012, phase: 1.2, yOffset: 14, bobSpeed: 0.0022 };
  heroItemsGroup.add(avocadoMesh);
  groceryItems.push(avocadoMesh);

  // Item 3: 🍎 3D Ruby Apple
  const appleGeo = new THREE.SphereGeometry(5.5, 24, 24);
  const appleMat = new THREE.MeshPhysicalMaterial({
    color: 0xdc2626,
    emissive: 0xef4444,
    emissiveIntensity: 0.3,
    roughness: 0.15,
    clearcoat: 0.9
  });
  const appleMesh = new THREE.Mesh(appleGeo, appleMat);
  // Stem
  const stemGeo = new THREE.CylinderGeometry(0.5, 0.5, 3.5, 8);
  const stemMat = new THREE.MeshStandardMaterial({ color: 0x451a03 });
  const stemMesh = new THREE.Mesh(stemGeo, stemMat);
  stemMesh.position.set(0, 5, 0);
  stemMesh.rotation.z = 0.2;
  appleMesh.add(stemMesh);
  appleMesh.userData = { radius: 50, speed: 0.017, phase: 2.5, yOffset: -4, bobSpeed: 0.0018 };
  heroItemsGroup.add(appleMesh);
  groceryItems.push(appleMesh);

  // Item 4: 🧃 3D Sparkling Beverage Bottle/Can
  const canGeo = new THREE.CylinderGeometry(4.2, 4.2, 13, 24);
  const canMat = new THREE.MeshPhysicalMaterial({
    color: 0x06b6d4,
    emissive: 0x06b6d4,
    emissiveIntensity: 0.4,
    roughness: 0.1,
    metalness: 0.4,
    clearcoat: 0.8
  });
  const canMesh = new THREE.Mesh(canGeo, canMat);
  // Chrome lid
  const lidGeo = new THREE.CylinderGeometry(4, 4, 1.2, 24);
  const lidMesh = new THREE.Mesh(lidGeo, chromeMat);
  lidMesh.position.y = 6.6;
  canMesh.add(lidMesh);
  canMesh.userData = { radius: 54, speed: 0.014, phase: 3.8, yOffset: 6, bobSpeed: 0.0025 };
  heroItemsGroup.add(canMesh);
  groceryItems.push(canMesh);

  // Item 5: 🫑 3D Bell Pepper (Lift 20.72x!)
  const pepperGeo = new THREE.DodecahedronGeometry(5.5, 1);
  const pepperMat = new THREE.MeshStandardMaterial({
    color: 0xf97316,
    emissive: 0xf97316,
    emissiveIntensity: 0.45,
    roughness: 0.25
  });
  const pepperMesh = new THREE.Mesh(pepperGeo, pepperMat);
  pepperMesh.userData = { radius: 48, speed: 0.016, phase: 4.9, yOffset: 12, bobSpeed: 0.0021 };
  heroItemsGroup.add(pepperMesh);
  groceryItems.push(pepperMesh);

  // Item 6: 🥛 3D Milk/Dairy Carton
  const milkGeo = new THREE.BoxGeometry(6, 11, 6);
  const milkMat = new THREE.MeshStandardMaterial({
    color: 0xf8fafc,
    emissive: 0x38bdf8,
    emissiveIntensity: 0.25,
    roughness: 0.3
  });
  const milkMesh = new THREE.Mesh(milkGeo, milkMat);
  // Cap
  const capGeo = new THREE.CylinderGeometry(1.4, 1.4, 1.5, 12);
  const capMat = new THREE.MeshStandardMaterial({ color: 0x2563eb });
  const capMesh = new THREE.Mesh(capGeo, capMat);
  capMesh.position.set(0, 6.2, 0);
  milkMesh.add(capMesh);
  milkMesh.userData = { radius: 53, speed: 0.013, phase: 5.7, yOffset: -2, bobSpeed: 0.0019 };
  heroItemsGroup.add(milkMesh);
  groceryItems.push(milkMesh);

  // -------------------------------------------------------------
  // Glowing Association Laser Lines Between Related Items
  // -------------------------------------------------------------
  heroLinesGroup = new THREE.Group();
  heroBasketGroup.add(heroLinesGroup);

  const heroLineMat = new THREE.LineBasicMaterial({
    color: 0x38bdf8,
    transparent: true,
    opacity: 0.5,
    blending: THREE.AdditiveBlending
  });

  const heroEdgeIndices = [[0, 1], [1, 2], [3, 4], [0, 5]];
  const heroLines = [];

  heroEdgeIndices.forEach(() => {
    const geo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
    const line = new THREE.Line(geo, heroLineMat);
    heroLinesGroup.add(line);
    heroLines.push(line);
  });

  // -------------------------------------------------------------
  // Mouse & Touch 360° Drag Controls (Mobile-Optimized)
  // -------------------------------------------------------------
  const domElem = heroRenderer.domElement;

  function onPointerDown(e) {
    isDraggingHero = true;
    prevHeroMouseX = e.clientX;
    prevHeroMouseY = e.clientY;
  }

  function onPointerMove(e) {
    if (isDraggingHero) {
      const deltaX = e.clientX - prevHeroMouseX;
      const deltaY = e.clientY - prevHeroMouseY;
      heroTargetRotY += deltaX * 0.008;
      heroTargetRotX += deltaY * 0.008;
      prevHeroMouseX = e.clientX;
      prevHeroMouseY = e.clientY;
    } else {
      // Subtle tilt on hover (Desktop)
      const rect = domElem.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const normY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      heroTargetRotY = -0.4 + normX * 0.45;
      heroTargetRotX = 0.25 + normY * 0.35;
    }
  }

  function onPointerUp() {
    isDraggingHero = false;
  }

  domElem.addEventListener('mousedown', onPointerDown);
  window.addEventListener('mousemove', onPointerMove, { passive: true });
  window.addEventListener('mouseup', onPointerUp);

  // Touch handlers: Allow vertical scroll while capturing horizontal drag for 3D rotation
  let touchStartX = 0;
  let touchStartY = 0;

  domElem.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches.length === 1) {
      isDraggingHero = true;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      prevHeroMouseX = touchStartX;
      prevHeroMouseY = touchStartY;
    }
  }, { passive: true });

  domElem.addEventListener('touchmove', (e) => {
    if (isDraggingHero && e.touches && e.touches.length === 1) {
      const deltaX = e.touches[0].clientX - prevHeroMouseX;
      heroTargetRotY += deltaX * 0.012;
      prevHeroMouseX = e.touches[0].clientX;
      prevHeroMouseY = e.touches[0].clientY;
    }
  }, { passive: true });

  domElem.addEventListener('touchend', () => {
    isDraggingHero = false;
  }, { passive: true });

  domElem.addEventListener('touchcancel', () => {
    isDraggingHero = false;
  }, { passive: true });

  // Resize handler
  window.addEventListener('resize', () => {
    if (!container || !heroCamera || !heroRenderer) return;
    const newW = container.clientWidth;
    const newH = container.clientHeight;
    if (newW > 0 && newH > 0) {
      heroCamera.aspect = newW / newH;
      heroCamera.updateProjectionMatrix();
      heroRenderer.setSize(newW, newH);
    }
  });

  // -------------------------------------------------------------
  // Hero Animation Loop
  // -------------------------------------------------------------
  let angle = 0;
  function animateHeroBasket() {
    requestAnimationFrame(animateHeroBasket);

    // Continuous slow idle spin when not dragging
    if (!isDraggingHero) {
      heroTargetRotY += 0.003;
    }

    // Clamp vertical tilt
    heroTargetRotX = Math.max(-0.4, Math.min(0.6, heroTargetRotX));

    // Smooth inertia interpolation
    heroCurRotX += (heroTargetRotX - heroCurRotX) * 0.06;
    heroCurRotY += (heroTargetRotY - heroCurRotY) * 0.06;

    heroBasketGroup.rotation.x = heroCurRotX;
    heroBasketGroup.rotation.y = heroCurRotY;

    // Orbit and bob grocery objects
    angle += 0.015;
    const now = Date.now();

    groceryItems.forEach((item) => {
      const u = item.userData;
      const itemAngle = angle * u.speed * 70 + u.phase;
      item.position.x = Math.cos(itemAngle) * u.radius;
      item.position.z = Math.sin(itemAngle) * u.radius;
      item.position.y = u.yOffset + Math.sin(now * u.bobSpeed + u.phase) * 6;
      item.rotation.y += 0.02;
      item.rotation.x += 0.01;
    });

    // Update laser affinity lines
    heroEdgeIndices.forEach((pair, idx) => {
      const p1 = groceryItems[pair[0]].position;
      const p2 = groceryItems[pair[1]].position;
      const line = heroLines[idx];
      if (line) {
        const positions = line.geometry.attributes.position.array;
        positions[0] = p1.x; positions[1] = p1.y; positions[2] = p1.z;
        positions[3] = p2.x; positions[4] = p2.y; positions[5] = p2.z;
        line.geometry.attributes.position.needsUpdate = true;
      }
    });

    heroRenderer.render(heroScene, heroCamera);
  }

  animateHeroBasket();
}

// -------------------------------------------------------------
// Helper 3D Geometry Utilities
// -------------------------------------------------------------
function createRectFrameGeometry(width, depth, thickness, tubeRadius) {
  const hw = width / 2;
  const hd = depth / 2;
  const path = new THREE.CurvePath();

  const c1 = new THREE.LineCurve3(new THREE.Vector3(-hw, 0, -hd), new THREE.Vector3(hw, 0, -hd));
  const c2 = new THREE.LineCurve3(new THREE.Vector3(hw, 0, -hd), new THREE.Vector3(hw, 0, hd));
  const c3 = new THREE.LineCurve3(new THREE.Vector3(hw, 0, hd), new THREE.Vector3(-hw, 0, hd));
  const c4 = new THREE.LineCurve3(new THREE.Vector3(-hw, 0, hd), new THREE.Vector3(-hw, 0, -hd));

  path.add(c1);
  path.add(c2);
  path.add(c3);
  path.add(c4);

  return new THREE.TubeGeometry(path, 64, tubeRadius || 1, 8, true);
}

function createCylinderBetweenPoints(p1, p2, radius, material) {
  const distance = p1.distanceTo(p2);
  const cylinderGeo = new THREE.CylinderGeometry(radius, radius, distance, 12);
  const cylinder = new THREE.Mesh(cylinderGeo, material);

  cylinder.position.copy(p1).lerp(p2, 0.5);
  cylinder.quaternion.setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    p2.clone().sub(p1).normalize()
  );

  return cylinder;
}

// -------------------------------------------------------------
// Initialization Handler
// -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initGlobalBackground();
  initHeroBasket3D();
});
