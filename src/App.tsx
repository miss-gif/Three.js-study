import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { ModelAni } from './components/Model-ani';

const App = () => {
  return (
    <div className="w-full h-screen">
      <Canvas
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        className="w-full h-dvh bg-neutral-800"
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.5} />
        <ModelAni position={[0.025, -0.9, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default App;
