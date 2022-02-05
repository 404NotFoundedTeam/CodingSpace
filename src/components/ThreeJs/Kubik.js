import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Box = () => {
  return (
    <mesh rotation={[90, 0, 120]}>
      <circleBufferGeometry attach="geometry" args={[10, 10, 30]} />
      <meshLambertMaterial attach="material" color="blue" />
      <meshNormalMaterial />
      <meshStandardMaterial />
    </mesh>
  );
};

const Kubik = () => {
  return (
    <Canvas className="canvas">
      <ambientLight intensity={0.5} />
      <directionalLight intensity={1} />
      <Suspense fallback={null}>
        <Box />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Kubik;
