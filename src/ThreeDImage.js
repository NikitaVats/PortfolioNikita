import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  const gltf = useGLTF("/your-3d-model.glb");
  return <primitive object={gltf.scene} scale={1} />;
};

const ThreeDImage = () => {
  return (
    <div
      style={{
        position: "absolute", // Makes it overlap
        top: "10%", // Adjust this value to control positioning
        left: "50%",
        transform: "translateX(-50%)",
        width: "300px", // Set width of the 3D canvas
        height: "300px",
        pointerEvents: "none", // Ensures clicks go to underlying content
        zIndex: 10, // Higher than content
      }}
    >
      <Canvas>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <Model />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ThreeDImage;
