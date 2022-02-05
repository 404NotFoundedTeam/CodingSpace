import React, { useRef } from "react";
import { Sphere } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import mapCover from "../../img/code3.jpg";

const AnimatedSphere = () => {
  const sphereCover = useLoader(TextureLoader, mapCover);
  const mesh = useRef();
  // rotate the box
  useFrame((state, delta) => {
    mesh.current.rotation.y += 0.002;
  });
  return (
    <Sphere ref={mesh} visible args={[1.3, 100, 200]} scale={2}>
      <meshStandardMaterial map={sphereCover} />
    </Sphere>
  );
};

export default AnimatedSphere;
