"use client";

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
const Models = ({name}:{name:string}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(true); // State untuk mengelola status loading

  useEffect(() => {
    // Initialize the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    // Function to set the canvas size based on the parent element
    const setCanvasSize = () => {
      if (mountRef.current) {
        const { clientWidth, clientHeight } = mountRef.current;
        renderer.setSize(clientWidth, clientHeight);
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
      }
    };

    // Append renderer to DOM
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
      setCanvasSize(); // Set initial size
    }

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
    scene.add(ambientLight);

    const directionalLightFront = new THREE.DirectionalLight(0xffffff, 5);
    directionalLightFront.position.set(1, 1, 1).normalize();
    scene.add(directionalLightFront);
    
    const directionalLightBack = new THREE.DirectionalLight(0xffffff, 5);
    directionalLightBack.position.set(-1, -1, -1).normalize();
    scene.add(directionalLightBack);

    // Load GLTF model
    const loader = new GLTFLoader();
    loader.load(
      `../${name}`, // Ensure your model is in the public folder and named correctly
      (gltf) => {
        scene.add(gltf.scene);
        setLoading(false); // Model selesai di-load, set status loading ke false
      },
      undefined,
      (error) => {
        console.error('An error happened while loading the GLTF model:', error);
        setLoading(false); // Jika ada error, set status loading ke false 
      }
    );

    // Set camera position
    camera.position.set(0, 0, 11);

    // Add OrbitControls for user interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Update controls
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      setCanvasSize();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={mountRef} style={{ width: '100%', height: '50vh', position: 'relative' }}>
      {loading && (
        <div
        className="mx-auto w-[500px] bg-gray-950 rounded-xl overflow-hidden drop-shadow-xl"
      >
        <div className="bg-[#333] flex items-center p-[5px] text-whitec relative">
          <div className="flex absolute left-3">
            <span className="h-3.5 w-3.5 bg-[#ff605c] rounded-xl mr-2"></span>
            <span className="h-3.5 w-3.5 bg-[#ffbd44] rounded-xl mr-2"></span>
            <span className="h-3.5 w-3.5 bg-[#00ca4e] rounded-xl"></span>
          </div>
          <div className="flex-1 text-center text-white">status</div>
        </div>
        <div className="p-2.5 text-[#0f0]">
          <div>
            <span className="mr-2">Loading 3D Model</span>
            <span className="animate-[ping_1.5s_0.5s_ease-in-out_infinite]">.</span>
            <span className="animate-[ping_1.5s_0.7s_ease-in-out_infinite]">.</span>
            <span className="animate-[ping_1.5s_0.9s_ease-in-out_infinite]">.</span>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default Models;
