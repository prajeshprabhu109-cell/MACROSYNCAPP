// --- Blueprint for 3D Transition with Three.js ---

// 1. You would need to link the Three.js library in your HTML:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

// Global variables for the scene
let scene, camera, renderer, geometry, material, cube;

function initThreeScene() {
    const container = document.getElementById('three-scene-container');
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene Setup
    scene = new THREE.Scene();

    // 2. Camera Setup (Aggressive perspective)
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // 3. Renderer Setup (To render the image on the screen)
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // 4. Create an object (e.g., a stylized, rotating model of a protein molecule)
    geometry = new THREE.BoxGeometry(1, 1, 1);
    material = new THREE.MeshBasicMaterial({ color: 0xB8A88F, wireframe: true }); // Beige wireframe for aggressive luxury
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
}

// 5. Animation Loop (The 3D Transition)
function animate() {
    requestAnimationFrame(animate);

    // Aggressive, fast rotation for the 3D element
    cube.rotation.x += 0.015;
    cube.rotation.y += 0.02;

    renderer.render(scene, camera);
}

// Initialize when the page loads
if (document.getElementById('three-scene-container')) {
    initThreeScene();
    animate();
}

// --- Blueprint for Aggressive Text/Element Transitions (Using CSS and Intersection Observer) ---

// This function adds a class when an element scrolls into view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2 // Trigger when 20% of the element is visible
};

const titleWords = document.querySelectorAll('.aggressive-title .word');

// Luxury Aggressive Transition: Make the words 'pop' into place when the hero section is visible
const titleObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            titleWords.forEach((word, index) => {
                word.style.transition = `transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${index * 0.15}s`;
                word.style.transform = 'translateY(0) rotateX(0deg)';
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const heroContent = document.querySelector('.hero-content');
if (heroContent) {
    // Initial state (hidden/pushed back in 3D space)
    titleWords.forEach(word => {
        word.style.transform = 'translateY(50px) rotateX(90deg)';
    });
    titleObserver.observe(heroContent);
}

// NOTE: You would need corresponding CSS for the initial hidden state to make this specific JS work.s