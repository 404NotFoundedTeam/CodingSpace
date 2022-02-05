import React, { useRef } from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import mapCover from "../../img/code3.jpg";

const AnimatedSphere2 = () => {
  const sphereCover = useLoader(TextureLoader, mapCover);
  const mesh = useRef();
  // rotate the box
  useFrame((state, delta) => {
    mesh.current.rotation.y += 0.005;
  });
  return (
    <Sphere ref={mesh} visible args={[0.7, 100, 200]} scale={2}>
      <meshStandardMaterial map={sphereCover} />
    </Sphere>
  );
};

export default AnimatedSphere2;
