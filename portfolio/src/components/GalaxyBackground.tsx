"use client";
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function GalaxyBackground({ rotation = 0 }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const galaxyRef = useRef<THREE.Group>(null);
  const animationRef = useRef<number>(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000010, 1);

    if (mountNode) {
      mountNode.appendChild(renderer.domElement);
    }

    // Create galaxy
    const galaxy = new THREE.Group();
    galaxyRef.current = galaxy;
    scene.add(galaxy);

    // Add stars
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 2500;
    const ringGeometry = new THREE.BufferGeometry();
    const planetPositions = [];
    const starPositions = [];
    const ringPositions = [];
    for (let i = 0; i < starCount; i++) {
      const r = 30 + Math.random() * 20;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.random() * Math.PI;
      starPositions.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
      ringPositions.push(
        r * Math.sin(phi) * Math.cos(phi * 2),
        r * Math.sin(phi) * Math.sin(phi / 2),
        r * Math.cos(phi)
      );
      if (i % 128 === 0) {
        planetPositions.push(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        );
      }
    }
    // Stars
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 4));
    const starMaterial = new THREE.PointsMaterial({ color: 0xdddddd, size: 0.1 });
    const stars = new THREE.Points(starGeometry, starMaterial);
    galaxy.add(stars);

    // Planets
    const planetMaterial = new THREE.PointsMaterial({ size: 1, vertexColors: true, sizeAttenuation: true });
    planetMaterial.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader.replace(
        'gl_PointSize = size;',
        `
        gl_PointSize = size * sizeAttr;
      `
      ).replace(
        '#include <attributes>',
        `
        attribute float sizeAttr;
        #include <attributes>
      `
      );
      shader.vertexShader = shader.vertexShader.replace(
        'void main() {',
        `
        void main() {
        float sizeAttr = size;
        #ifdef USE_SIZE
          sizeAttr = sizeAttr;
        #endif
        #ifdef ATTRIBUTE_SIZE
          sizeAttr = sizeAttr * sizeAttr;
        #endif
      `
      );
      shader.vertexShader = shader.vertexShader.replace(
        'gl_PointSize = size;',
        'gl_PointSize = sizeAttr;'
      );
    };
    const planetColors = [];
    for (let i = 0; i < planetPositions.length / 3; i++) {
      // Generate a random pastel color
      const color = new THREE.Color(
        0.15 + 0.6 * Math.random(),
        0.15 + 0.6 * Math.random(),
        0.15 + 0.6 * Math.random()
      );
      planetColors.push(color.r, color.g, color.b);
    }
    const planetSizes = [];
    for (let i = 0; i < planetPositions.length / 3; i++) {
      planetSizes.push(Math.random() * 5.3 + 0.2); // random size between 0.2 and 5.5
    }
    // Add planets as spheres instead of points
    for (let i = 0; i < planetPositions.length; i += 3) {
      const planetRadius = planetSizes[i / 3] * 0.2; // scale size down for sphere radius
      const geometry = new THREE.SphereGeometry(planetRadius, 16, 16);
      const color = new THREE.Color(
        planetColors[(i / 3) * 3],
        planetColors[(i / 3) * 3 + 1],
        planetColors[(i / 3) * 3 + 2]
      );
      const material = new THREE.MeshBasicMaterial({ color });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(
        planetPositions[i],
        planetPositions[i + 1],
        planetPositions[i + 2]
      );
      galaxy.add(sphere);
    }

    // Rings
    ringGeometry.setAttribute('position', new THREE.Float32BufferAttribute(ringPositions, 3));
    const ring = new THREE.Points(ringGeometry, starMaterial);
    galaxy.add(ring);

    // Utility to create a random nebula mesh
    function createRandomNebula() {
      // Random geometry type
      const geometries = [
      () => new THREE.TorusGeometry(
        30 + Math.random() * 20, // radius
        6 + Math.random() * 8,   // tube
        8 + Math.floor(Math.random() * 12), // radialSegments
        8 + Math.floor(Math.random() * 12)  // tubularSegments
      ),
      () => new THREE.CapsuleGeometry(
        30 + Math.random() * 20, // radius
        6 + Math.random() * 8,   // length
        8 + Math.floor(Math.random() * 12), // capSegments
        8 + Math.floor(Math.random() * 12)  // radialSegments
      ),
      () => new THREE.SphereGeometry(
        20 + Math.random() * 20, // radius
        16 + Math.floor(Math.random() * 16), // widthSegments
        16 + Math.floor(Math.random() * 16)  // heightSegments
      ),
      ];
      const geometry = geometries[Math.floor(Math.random() * geometries.length)]();

      // Random color
      const colors = [0x9b30ff, 0x33ccff, 0x123000, 0xff33cc, 0xffff99, 0x00ff99];
      const color = new THREE.Color(colors[Math.floor(Math.random() * colors.length)]);

      // Random opacity and blending
      const opacity = 0.12 + Math.random() * 0.12;
      const blending = Math.random() > 0.5 ? THREE.AdditiveBlending : THREE.NormalBlending;

      const material = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity,
      blending,
      depthWrite: false,
      });

      const mesh = new THREE.Mesh(geometry, material);

      // Random rotation
      mesh.rotation.x = Math.random() * 2 * Math.PI;
      mesh.rotation.y = Math.random() * 2 * Math.PI;
      mesh.rotation.z = Math.random() * 2 * Math.PI;

      // Random position within a spherical shell
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.random() * Math.PI;
      // Ensure nebulas spawn farther from the center (e.g., radius between 18 and 30)
      const minRadius = 100;
      const maxRadius = 120;
      const nebulaRadius = minRadius + Math.random() * (maxRadius - minRadius);
      mesh.position.set(
        nebulaRadius * Math.sin(phi) * Math.cos(theta),
        nebulaRadius * Math.sin(phi) * Math.sin(theta),
        nebulaRadius * Math.cos(phi)
      );

      return mesh;
    }

    // Add several random nebulas
    for (let i = 0; i < 10; i++) {
      galaxy.add(createRandomNebula());
    }

    // Add galaxy core
    const coreGeometry = new THREE.SphereGeometry(5, 60, 60);
    const coreMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    galaxy.add(core);
    // Add core glow
    const glowGeometry = new THREE.SphereGeometry(6.5, 60, 60);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xffff99,
      transparent: true,
      opacity: 0.35,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.material.depthWrite = false;
    glow.material.blending = THREE.AdditiveBlending;
    galaxy.add(glow);

    // Pulse the glow in the animation loop
    let pulseTime = 0;
    const originalGlowScale = glow.scale.clone();
    const originalGlowOpacity = glowMaterial.opacity;
    // Animate
    let spin = 0;
    function animate() {
      spin += 0.0001;
      galaxy.rotation.y = spin + rotation;

      // Pulse effect
      pulseTime += 0.005;
      const pulse = 1 + 0.08 * Math.sin(pulseTime);
      glow.scale.set(
        originalGlowScale.x * pulse,
        originalGlowScale.y * pulse,
        originalGlowScale.z * pulse
      );
      glowMaterial.opacity = originalGlowOpacity * (0.9 + 0.1 * Math.sin(pulseTime));

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    }

    animate();
    // Cleanup
    return () => {
      if (mountNode) {
        mountNode.removeChild(renderer.domElement);
      }
      cancelAnimationFrame(animationRef.current!);
      renderer.dispose();
    };
  }, [rotation]);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
