import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Model } from './components/Avata';
import { ModelAni } from './components/Model-ani';
import RotatingCube from './components/RotatingCube';
import ToyCar from './components/ToyCar';

const App = () => {
  return (
    <div className="w-full h-screen">
      <Tabs defaultValue="1st" className="w-full h-screen">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="1st">1st</TabsTrigger>
          <TabsTrigger value="2nd">2nd</TabsTrigger>
          <TabsTrigger value="3rd">3rd</TabsTrigger>
          <TabsTrigger value="4th">4th</TabsTrigger>
        </TabsList>

        <TabsContent value="1st" className="w-full h-full">
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
        </TabsContent>

        <TabsContent value="2nd" className="w-full h-full">
          <Canvas
            camera={{ position: [2, 0, 12.25], fov: 15 }}
            className="w-full h-dvh bg-neutral-800"
          >
            <ambientLight intensity={1.25} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.5} />
            <Model position={[0.025, -0.9, 0]} />
            <OrbitControls />
          </Canvas>
        </TabsContent>

        <TabsContent value="3rd" className="w-full h-full">
          <Canvas>
            <ambientLight />
            <RotatingCube />
          </Canvas>
        </TabsContent>

        <TabsContent value="4th" className="w-full h-full">
          <Canvas>
            <ambientLight intensity={1.25} />
            <directionalLight intensity={0.5} />
            <ToyCar />
            <OrbitControls />
          </Canvas>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default App;
